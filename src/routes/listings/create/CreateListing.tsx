import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
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
import { AddListingFormdata, AddListingPayload } from "../../../types/listing";
import { useSelector } from "react-redux";
import { selectAuth, selectIsAgent } from "../../../store/slices/auth";
import { useUploadMutation } from "../../../api/rtk-api";
import { useAddListingMutation } from "../../../api/endpoints/listings";
import { toast } from "react-hot-toast";
import { ClipLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";

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

  const { user } = useSelector(selectAuth);

  const { data: amenities, isLoading: isAmenitiesLoading } =
    useGetAllAmenitiesQuery();

  const [upload, { isLoading: isUploading, data: imageUrls }] =
    useUploadMutation();

  const [addListing, { isLoading: isAddingListing }] = useAddListingMutation();

  const navigate = useNavigate();

  const isAgent = useSelector(selectIsAgent);

  useEffect(() => {
    if (!isAgent) {
      navigate("/");
    }
  }, [isAgent]);

  const handleFormSubmit = async (data: AddListingFormdata) => {
    // If it's the last step, submit the form
    if (activeStep === steps.length - 1 && user) {
      const amenities = Object.keys(data.amenities).filter(
        (key) => data.amenities[key] === true
      );

      const formData = new FormData();

      if (data.files.length > 0) {
        data.files.forEach((file) => {
          formData.append("images", file as Blob);
        });
      }

      const uploadResponse = await upload(formData).unwrap();

      if (uploadResponse) {
        const imageUrls = uploadResponse.urls;
        const payload: AddListingPayload = {
          area: parseInt(data.area),
          title: data.title,
          description: data.description,
          buildingType: data.category,
          type: data.type,
          location: {
            address: data.address,
            city: data.city,
          },
          geometry: {
            type: "Point",
            coordinates: [data.marker.latitude, data.marker.longitude],
          },
          rooms: {
            bedrooms: parseInt(data.bedrooms, 10),
            bathrooms: parseInt(data.bathrooms, 10),
            other: parseInt(data.other, 10),
          },
          amenities,
          status: "normal",
          price: parseInt(data.price, 10),
          owner: user?._id,
          images: imageUrls,
        };
        const response = await addListing(payload).unwrap();

        if (response) {
          toast.success("Listing added successfully");

          navigate(`/listings/${response._id}`);
        }
      }

      return;
    }

    const isValid = await formMethods.trigger();

    if (isValid && activeStep < steps.length - 1) {
      setActiveStep((prev) => prev + 1);
    }
  };

  const formMethods = useForm<AddListingFormdata>({
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

  console.log(formMethods.formState.errors);
  return (
    <div className="container pt-24">
      <div className="w-full lg:w-3/4 xl:w-4/6 mx-auto mt-8 relative overflow-hidden">
        <Stepper steps={steps} activeStep={activeStep} />
        {isAddingListing || isUploading ? (
          <ClipLoader
            color={"#5B4DFF"}
            size={40}
            className="absolute top-1/2 left-1/2"
          />
        ) : null}
        <div
          className={`mt-16 px-2 ${
            isAddingListing || isUploading
              ? "opacity-30 pointer-events-none"
              : ""
          }  relative`}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={formTransition}
              className="w-full h-[600px] overflow-auto px-2 py-2"
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
            >
              Next
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
