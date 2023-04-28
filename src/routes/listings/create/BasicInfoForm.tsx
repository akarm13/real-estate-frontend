import { Input } from "../../../components/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/Select";
import { Textarea } from "../../../components/Textarea";
import { categories } from "../../../components/filters/MobileFilter";

import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Controller } from "react-hook-form";

const schema = yup.object().shape({
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

export const BasicInfoForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: any) => {
    console.log("aakar");
    setSubmitting(true);
    console.log(data);
  };

  console.log(errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="flex flex-col gap-y-2">
        <h3 className="text-2xl font-semibold text-primaryText">
          Basic Information
        </h3>
        <h4 className="text-lg text-gray-600">
          Provide essential information about the listing, such as the type,
          size, and price.
        </h4>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 mt-8 gap-x-8 gap-y-4 items-center">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="category" className="font-semibold text-primaryText">
            Category
          </label>
          <Controller
            control={control}
            name="category"
            defaultValue=""
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={(e) => field.onChange(e)}
                name="category"
                required
              >
                <SelectTrigger id="category">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem
                      key={category.value}
                      value={category.value as string}
                    >
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          {/* Label */}
          <label htmlFor="type" className="font-semibold text-primaryText">
            Type
          </label>
          <Controller
            control={control}
            name="type"
            defaultValue=""
            render={({ field }) => (
              <Select
                value={field.value}
                onValueChange={(e) => field.onChange(e)}
                name="type"
                required
              >
                <SelectTrigger id="type">
                  <SelectValue placeholder="Eg. Apartment" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem
                      key={category.value}
                      value={category.value as string}
                    >
                      {category.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
        </div>
        <div className="flex flex-col gap-y-2">
          {/* Label */}
          <label htmlFor="area" className="font-semibold text-primaryText">
            Area
          </label>
          <Input
            {...register("area")}
            placeholder="100"
            type="number"
            id="area"
          />
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 mt-8 gap-x-8 gap-y-4 items-center">
        <div className="flex flex-col gap-y-2">
          {/* Label */}
          <label htmlFor="bedrooms" className="font-semibold text-primaryText">
            Bedrooms
          </label>
          <Input
            {...register("bedrooms")}
            placeholder="100"
            type="number"
            id="bedrooms"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          {/* Label */}
          <label htmlFor="bathrooms" className="font-semibold text-primaryText">
            Bathrooms
          </label>
          <Input
            {...register("bathrooms")}
            placeholder="100"
            type="number"
            id="bathrooms"
          />
        </div>
        <div className="flex flex-col gap-y-2">
          {/* Label */}
          <label htmlFor="other" className="font-semibold text-primaryText">
            Other
          </label>
          <Input
            {...register("other")}
            placeholder="100"
            type="number"
            id="other"
          />
        </div>
      </div>

      {/* Title and description */}
      <div className="mt-8">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="title" className="font-semibold text-primaryText">
            Title
          </label>
          <Input
            {...register("title")}
            placeholder="Eg. 2 Bedroom Apartment"
            id="title"
          />
        </div>
        <div className="flex flex-col gap-y-2 mt-4">
          <label
            htmlFor="description"
            className="font-semibold text-primaryText"
          >
            Description
          </label>
          <Textarea
            {...register("description")}
            placeholder="Describe your listing in detail"
            rows={25}
            id="description"
          />
        </div>
      </div>

      <div className="mt-8">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
          disabled={submitting}
        >
          Submit
        </button>
      </div>
    </form>
  );
};
