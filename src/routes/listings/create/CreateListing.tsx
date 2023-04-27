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
      <div className="w-full lg:w-3/4 xl:w-4/6 mx-auto mt-8 relative overflow-hidden">
        <Stepper steps={steps} activeStep={activeStep} />
        <div className="mt-8 ">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={formTransition}
              className="w-full h-[500px] overflow-y-auto"
            >
              {renderForm}
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="flex mt-24 bg-white py-4 border-gray-100 sticky left-0 bottom-0 w-full">
          <div className="w-full lg:w-3/4 xl:w-4/6 mx-auto relative flex justify-between px-4">
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
    </div>
  );
};

const FormStepOne = () => {
  return (
    <div>
      <h1>Form 1</h1>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum impedit
      labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
      impedit labore quos possimus hic, quo laudantium eligendi, ipsam voluptas
      aspernatur nesciunt? Accusamus quos et esse delectus ad doloremque eos
      atque!
    </div>
  );
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
