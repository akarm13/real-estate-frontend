import { useMemo, useState } from "react";
import { Stepper } from "./Stepper";
import { Button } from "../../../components/Button";
import { AnimatePresence, motion } from "framer-motion";

const steps = [
  {
    title: "Basic info",
  },
  {
    title: "Location",
  },
  {
    title: "Photos",
  },
  {
    title: "Details",
  },
];

export const CreateListing = () => {
  const [activeStep, setActiveStep] = useState(0);

  const renderForm = useMemo(() => {
    switch (activeStep) {
      case 0:
        return <FormStepOne />;
      case 1:
        return <FormStepTwo />;
      case 2:
        return <FormStepThree />;
      case 3:
        return <FormStepFour />;
      default:
        return null;
    }
  }, [activeStep]);
  const formTransition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
  };

  return (
    <div className="container pt-24">
      <div className="w-full lg:w-3/4 xl:w-1/2 mx-auto">
        <Stepper steps={steps} activeStep={activeStep} />
        <div className="mt-8 relative min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={formTransition}
              className="absolute w-full"
            >
              {renderForm}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex justify-between mt-8">
          <Button
            variant="secondary"
            onClick={() => setActiveStep((prev) => prev - 1)}
            disabled={activeStep === 0}
          >
            Back
          </Button>
          <Button
            variant="primary"
            onClick={() => setActiveStep((prev) => prev + 1)}
            disabled={activeStep === steps.length - 1}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

const FormStepOne = () => {
  return <div>Form 1</div>;
};

const FormStepTwo = () => {
  return <div>Form 2</div>;
};

const FormStepThree = () => {
  return <div>Form 3</div>;
};
const FormStepFour = () => {
  return <div>Form 4</div>;
};
