import React, { useEffect, useMemo } from "react";
import { Button } from "../../../components/Button";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { editListingSchema } from "./validations";
import { useGetAllAmenitiesQuery } from "../../../api/endpoints/amenities";
import {
  EditListingFormData,
  ListingStatus,
  ListingType,
} from "../../../types/listing";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../store/slices/auth";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetListingByIdQuery,
  useUpdateListingMutation,
} from "../../../api/endpoints/listings";
import { toast } from "react-hot-toast";
import { AnimatePresence } from "framer-motion";

import { motion } from "framer-motion";
import { Input } from "../../../components/Input";
import { ErrorMessage } from "../../../components/ErrorMessage";
import { Textarea } from "../../../components/Textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/Select";
import { Database } from "lucide-react";

export const saleStatusOptions = [
  { value: "normal", label: "Normal" },
  { value: "sold", label: "Sold" },
  { value: "under_contract", label: "Under Contract" },
  { value: "unavailable", label: "Unavailable" },
];

export const rentStatusOptions = [
  { value: "normal", label: "Normal" },
  { value: "rented", label: "Rented" },
  { value: "under_contract", label: "Under Contract" },
  { value: "unavailable", label: "Unavailable" },
];

// Convert them to key value pairs
export const allStatusOptions = [
  ...saleStatusOptions,
  ...rentStatusOptions,
].reduce((acc, curr) => {
  const currentValue = curr.value as ListingStatus;
  acc[currentValue] = curr.label;
  return acc;
}, {} as Record<ListingStatus, string>);

export const EditListing = () => {
  const { id } = useParams<{ id: string }>();
  const { data: listing } = useGetListingByIdQuery(id || "");
  const { data: amenities } = useGetAllAmenitiesQuery();
  const navigate = useNavigate();
  const { user } = useSelector(selectAuth);

  const defaultValues = useMemo(() => {
    if (listing && amenities) {
      const amenitiesObj = listing.amenities.reduce((acc, curr) => {
        acc[`amenities.${curr._id}`] = true;
        return acc;
      }, {} as Record<string, boolean>);

      return {
        title: listing.title,
        description: listing.description,
        price: listing.price.toString(),
        status: listing.status,
        ...amenitiesObj,
      };
    }

    return {};
  }, [listing, amenities]);

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
    register,
    reset,
  } = useForm<EditListingFormData>({
    resolver: yupResolver(editListingSchema),
    defaultValues,
  });

  const [updateListing, { isLoading: isEditingListing }] =
    useUpdateListingMutation();

  const onSubmit = async (data: EditListingFormData) => {
    // Use Object.entries() to get an array of key-value pairs
    const amenitiesEntries = Object.entries(data.amenities ?? {});

    // Use Array.filter() to keep only entries with a value of true, then map to get the keys
    const amenities = amenitiesEntries
      .filter(([key, value]) => value === true)
      .map(([key, value]) => key);

    try {
      const updateData = {
        title: data.title,
        description: data.description,
        price: parseFloat(data.price || "0"),
        status: data.status,
        amenities,
      };

      if (id) {
        await updateListing({
          id,
          ...updateData,
        }).unwrap();

        toast.success("Listing updated successfully");
        navigate(`/listings/${id}`);
      }
    } catch (error) {
      toast.error("Failed to update listing");
    }
  };

  if (!user || (listing && listing.owner._id !== user._id)) {
    navigate(`/listings/${id}`);
    return null;
  }

  const listingType = useMemo(() => listing?.type, [listing]);
  const statusOptions = useMemo(
    () => (listingType === "sale" ? saleStatusOptions : rentStatusOptions),
    [listingType]
  );

  return (
    <div className="container pt-28">
      <div className="flex flex-col gap-y-2 px-4">
        <h3 className="text-2xl font-semibold text-primaryText">
          Edit Listing
        </h3>
        <h4 className="text-lg text-gray-600">
          Edit your listing details here
        </h4>
      </div>
      <div
        className={`mt-8 px-2 ${
          isEditingListing ? "opacity-30 pointer-events-none" : ""
        }  relative`}
      >
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            className="w-full h-[600px] overflow-auto px-2 py-2"
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-y-2"
            >
              {/* Title */}
              <div className="flex flex-col gap-y-4">
                <label
                  className="font-semibold text-primaryText"
                  htmlFor="title"
                >
                  Title
                </label>
                <Input
                  {...register("title", { required: "Title is required" })}
                  type="text"
                  id="title"
                />
                {errors.title && (
                  <ErrorMessage>{errors.title.message}</ErrorMessage>
                )}
              </div>

              {/* Description */}
              <div className="flex flex-col gap-y-4">
                <label
                  className="font-semibold text-primaryText"
                  htmlFor="description"
                >
                  Description
                </label>
                <Textarea
                  {...register("description", {
                    required: "Description is required",
                  })}
                  id="description"
                ></Textarea>
                {errors.description && (
                  <ErrorMessage>{errors.description.message}</ErrorMessage>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 mt-4 gap-x-8 gap-y-4 items-center">
                <div className="flex flex-col gap-y-4">
                  <label
                    className="font-semibold text-primaryText"
                    htmlFor="price"
                  >
                    Price
                  </label>
                  <Input
                    {...register("price", { required: "Price is required" })}
                    type="number"
                    id="price"
                  />
                  {errors.price && (
                    <ErrorMessage>{errors.price.message}</ErrorMessage>
                  )}
                </div>

                {/* Status */}
                <div className="flex flex-col gap-y-4">
                  <label
                    className="font-semibold text-primaryText"
                    htmlFor="status"
                  >
                    Status
                  </label>
                  <Controller
                    control={control}
                    name="status"
                    defaultValue="active"
                    render={({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(e) => field.onChange(e)}
                        name="status"
                        required
                      >
                        <SelectTrigger id="status">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {statusOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.status && (
                    <ErrorMessage>{errors.status.message}</ErrorMessage>
                  )}
                </div>
              </div>
              {/* Amenities */}
              <div className="grid grid-cols-2 sm:grid-cols-3 mt-8 gap-x-8 gap-y-4 items-center m,">
                {amenities
                  ? amenities.map((amenity) => (
                      <div
                        className="flex gap-x-2 items-center"
                        key={amenity._id}
                      >
                        <Controller
                          control={control}
                          name={`amenities.${amenity._id}`}
                          defaultValue={false}
                          render={({ field }: any) => (
                            <input
                              {...field}
                              id={amenity._id}
                              type="checkbox"
                              checked={field.value}
                              onChange={(e) => field.onChange(e.target.checked)}
                              className="h-5 w-5 rounded border-0 bg-gray-100 text-primary-500 focus:ring-0 focus:ring-offset-0"
                            />
                          )}
                        />
                        <label
                          htmlFor={amenity._id}
                          className="font-medium text-primaryText capitalize"
                        >
                          {amenity.title}
                        </label>
                      </div>
                    ))
                  : null}
              </div>
              {/* Images */}

              <Button
                variant="primary"
                type="submit"
                className="mt-8 self-start"
                isLoading={isEditingListing}
              >
                Update Listing
              </Button>
            </form>
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Other divs */}
    </div>
  );
};
