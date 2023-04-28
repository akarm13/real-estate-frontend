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
import * as yup from "yup";

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

const basicInfoSchema = yup.object().shape({
  category: yup.string().required("Category is required"),
  title: yup.string().required("Title is required"),
  area: yup
    .number()
    .typeError("Area must be a number")
    .positive("Area must be a positive number")
    .required("Area is required"),
  bedrooms: yup
    .number()
    .typeError("Bedrooms must be a number")
    .integer("Bedrooms must be a whole number")
    .positive("Bedrooms must be a positive number")
    .required("Bedrooms is required"),
  bathrooms: yup
    .number()
    .typeError("Bathrooms must be a number")
    .integer("Bathrooms must be a whole number")
    .positive("Bathrooms must be a positive number")
    .required("Bathrooms is required"),
  other: yup
    .number()
    .typeError("Other must be a number")
    .integer("Other must be a whole number")
    .positive("Other must be a positive number"),
});

const amenitiesSchema = yup.object().shape({
  amenities: yup.lazy((value) =>
    Object.keys(value).length > 0
      ? yup
          .object()
          .test(
            "one-amenity-selected",
            "At least one amenity must be selected",
            (amenitiesObj) => {
              return Object.values(amenitiesObj).some((selected) => selected);
            }
          )
      : yup
          .object()
          .test(
            "one-amenity-selected",
            "At least one amenity must be selected",
            () => false
          )
  ),
});

const locationSchema = yup.object().shape({
  city: yup.string().required("City is required"),
  address: yup.string().required("Address is required"),
  marker: yup.object().shape({
    latitude: yup.number().required("Latitude is required"),
    longitude: yup.number().required("Longitude is required"),
  }),
});

const photosSchema = yup.object().shape({
  files: yup
    .array()
    .of(
      yup
        .mixed()
        .test("type", "Only images are allowed", (value) =>
          value.type.startsWith("image/")
        )
    )
    .min(3, "At least three image are required"),
});
const schemas = [
  basicInfoSchema,
  locationSchema,
  amenitiesSchema,
  photosSchema,
];

export const CreateListing = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);

  const handleFormSubmit = async (data: any) => {
    const isValid = await formMethods.trigger();

    if (isValid && activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const formMethods = useForm({
    resolver: yupResolver(schemas[activeStep]),
  });
  const renderForm = useMemo(() => {
    switch (activeStep) {
      case 0:
        return <BasicInfoForm onSubmit={handleFormSubmit} />;
      case 1:
        return <LocationForm onSubmit={handleFormSubmit} />;
      case 2:
        return <AmenitiesForm onSubmit={handleFormSubmit} />;
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

  console.log(formMethods.formState.errors);
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
              className="w-full h-[600px] overflow-auto"
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
