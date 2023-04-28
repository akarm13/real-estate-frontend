import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import { Button } from "../../../components/Button";
import { AmenitiesForm } from "./AmenitiesForm";
import { BasicInfoForm } from "./BasicInfoForm";
import { LocationForm } from "./LocationForm";
import { PhotosForm } from "./PhotosForm";
import { Stepper } from "./Stepper";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createListingSchemas } from "./validations";
import { useGetAllAmenitiesQuery } from "../../../api/endpoints/amenities";

const steps = [
  {
    title: "Basic info",
  },
  {
    title: "Location",
  },
  {
    title: "Amenities",
  },
  {
    title: "Photos",
  },
];

export const CreateListing = () => {
  const [activeStep, setActiveStep] = useState(0);

  const { data: amenities, isLoading: isAmenitiesLoading } =
    useGetAllAmenitiesQuery();

  const handleFormSubmit = async (data: any) => {
    const isValid = await formMethods.trigger();

    if (isValid && activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const formMethods = useForm({
    resolver: yupResolver(createListingSchemas[activeStep]),
  });

  const renderForm = useMemo(() => {
    switch (activeStep) {
      case 0:
        return <BasicInfoForm onSubmit={handleFormSubmit} />;
      case 1:
        return <LocationForm onSubmit={handleFormSubmit} />;
      case 2:
        return (
          <AmenitiesForm
            onSubmit={handleFormSubmit}
            amenities={amenities || []}
          />
        );
      case 3:
        return <PhotosForm onSubmit={handleFormSubmit} />;
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
        <div className="mt-16 px-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={formTransition}
              className="w-full h-[600px] overflow-auto px-2"
            >
              <FormProvider {...formMethods}>{renderForm}</FormProvider>
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
              onClick={() => {
                formMethods.handleSubmit(handleFormSubmit)();
              }}
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
