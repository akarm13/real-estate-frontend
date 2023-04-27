import { Check } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "../../../components/Button";

import { AnimatePresence, motion } from "framer-motion";

type StepperProps = {
  activeStep: number;
  steps: {
    title: string;
  }[];
};

export const Stepper = ({ activeStep, steps }: StepperProps) => {
  return (
    <div className="flex flex-col items-center gap-y-8">
      <div className="flex items-center gap-x-4">
        {steps.map((step, index) => (
          <Step
            key={index}
            title={step.title}
            step={index}
            activeStep={activeStep}
          />
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
      className={`flex items-center flex-col gap-y-2 ${stepStatus}`}
      animate={stepStatus}
    >
      <div
        className={`flex items-center justify-center w-10 h-10 rounded-full ${
          stepStatus === "completed" ? "bg-[#EEEDFE]" : "bg-primary-100"
        }`}
      >
        <div
          className={`w-6 h-6 rounded-full ${
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
            <div className="w-3 h-3 rounded-full bg-primary-500"></div>
          )}
        </div>
      </div>

      <div className="ml-4">
        <h3
          className={`${
            activeStep === step
              ? "text-primaryText font-semibold "
              : "text-gray-600 font-medium"
          }`}
        >
          {title}
        </h3>
      </div>
    </motion.div>
  );
};
