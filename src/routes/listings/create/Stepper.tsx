import { Check } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

import { motion } from "framer-motion";

type StepperProps = {
  activeStep: number;
  steps: {
    title: string;
  }[];
};
export const Stepper = ({ activeStep, steps }: StepperProps) => {
  const [connectorStatuses, setConnectorStatuses] = useState(
    new Array(steps.length - 1).fill("inactive")
  );

  useEffect(() => {
    const newStatuses = connectorStatuses.map((status, index) => {
      if (activeStep > index) return "completed";
      if (activeStep === index) return "active";
      return "inactive";
    });
    setConnectorStatuses(newStatuses);
  }, [activeStep]);

  return (
    <div className="flex flex-col gap-y-8 relative">
      <div className="flex justify-between">
        {steps.map((step, index) => (
          <div key={index} className="z-10">
            <Step title={step.title} step={index} activeStep={activeStep} />
          </div>
        ))}
      </div>

      <div className="absolute top-1/4 left-1 right-0 flex justify-between w-[calc(100%-2rem)]">
        {steps.slice(0, -1).map((_, index) => (
          <Connector key={index} index={index} activeStep={activeStep} />
        ))}
      </div>
    </div>
  );
};

type StepProps = {
  title: string;
  step: number;
  activeStep: number;
};

export const Step = ({ activeStep, step, title }: StepProps) => {
  const stepStatus = useMemo(() => {
    if (activeStep > step) return "completed";
    if (activeStep === step) return "active";
    return "inactive";
  }, [activeStep, step]);

  const checkVariants = {
    active: { scale: 0, opacity: 0 },
    completed: { scale: 1, opacity: 1 },
  };

  return (
    <motion.div
      className={`flex flex-col gap-y-4 ${stepStatus}`}
      animate={stepStatus}
    >
      <div
        className={`flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 rounded-full ${
          stepStatus === "completed" ? "bg-[#EEEDFE]" : "bg-primary-100"
        }`}
      >
        <div
          className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full ${
            stepStatus === "completed" ? "bg-primary-500" : "bg-white"
          } flex items-center justify-center`}
        >
          <motion.div
            animate={stepStatus === "completed" ? "completed" : "active"}
            variants={checkVariants}
            className="relative"
          >
            <Check
              size={16}
              className="stroke-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              strokeWidth={3}
            />
          </motion.div>
          {stepStatus !== "completed" && (
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary-500"></div>
          )}
        </div>
      </div>

      <h3
        className={`text-xs md:text-base ${
          activeStep === step
            ? "text-primaryText font-semibold "
            : "text-gray-600 font-medium"
        }`}
      >
        {title}
      </h3>
    </motion.div>
  );
};

type ConnectorProps = {
  index: number;
  activeStep: number;
};

const Connector: React.FC<ConnectorProps> = ({ index, activeStep }) => {
  const [scaleX, setScaleX] = useState(0);

  useEffect(() => {
    if (activeStep > index) {
      setScaleX(1);
    } else if (activeStep === index) {
      setScaleX(0);
    } else {
      setScaleX(0);
    }
  }, [activeStep, index]);

  return (
    <div className="relative w-full">
      <motion.div
        className={`h-2 w-full origin-left rounded-lg bg-primary-50 absolute`}
      />
      <motion.div
        className={`h-2 w-full origin-left rounded-lg bg-primary-500 absolute`}
        style={{ scaleX }}
      />
    </div>
  );
};
