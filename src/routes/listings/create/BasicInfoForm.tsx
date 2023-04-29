import { Input } from "../../../components/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/Select";
import { Textarea } from "../../../components/Textarea";
import { categories, types } from "../../../components/filters/MobileFilter";

import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ErrorMessage } from "../../../components/ErrorMessage";

type Props = {
  onSubmit: (data: any) => void;
};
export const BasicInfoForm = ({ onSubmit }: Props) => {
  const [submitting, setSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useFormContext();

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

      <div className="grid grid-cols-2 sm:grid-cols-3 mt-4 gap-x-8 gap-y-4 items-center">
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
          <div className="min-h-[24px]">
            {errors.category && (
              <ErrorMessage>
                {(errors.category.message as string) || "Category is required"}
              </ErrorMessage>
            )}
          </div>
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
                  {types.map((type) => (
                    <SelectItem key={type.value} value={type.value as string}>
                      {type.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          <div className="min-h-[24px]">
            {errors.type && (
              <ErrorMessage>
                {(errors.type.message as string) || "Type is required"}
              </ErrorMessage>
            )}
          </div>
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
          <div className="min-h-[24px]">
            {errors.area && (
              <ErrorMessage>
                {(errors.area.message as string) || "Area is required"}
              </ErrorMessage>
            )}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 mt-4 gap-x-8  items-center">
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

          <div className="min-h-[24px]">
            {errors.bedrooms && (
              <ErrorMessage>
                {(errors.bedrooms.message as string) || "Bedrooms is required"}
              </ErrorMessage>
            )}
          </div>
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
          <div className="min-h-[24px]">
            {errors.bathrooms && (
              <ErrorMessage>
                {(errors.bathrooms.message as string) ||
                  "Bathrooms is required"}
              </ErrorMessage>
            )}
          </div>
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
          <div className="min-h-[24px]">
            {errors.other && (
              <ErrorMessage>
                {(errors.other.message as string) || "Other rooms is required"}
              </ErrorMessage>
            )}
          </div>
        </div>
      </div>

      {/* Title and description */}
      <div className="mt-4">
        <div className="flex flex-col gap-y-2">
          <label htmlFor="title" className="font-semibold text-primaryText">
            Price
          </label>
          <Input
            {...register("price")}
            placeholder="Price in USD"
            id="price"
            type="number"
          />
          <div className="min-h-[24px]">
            {errors.price && (
              <ErrorMessage>
                {(errors.price.message as string) || "Price is required"}
              </ErrorMessage>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="title" className="font-semibold text-primaryText">
            Title
          </label>
          <Input
            {...register("title")}
            placeholder="Eg. 2 Bedroom Apartment"
            id="title"
          />
          <div className="min-h-[24px]">
            {errors.title && (
              <ErrorMessage>
                {(errors.title.message as string) || "Title is required"}
              </ErrorMessage>
            )}
          </div>
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

          <div className="min-h-[24px]">
            {errors.description && (
              <ErrorMessage>
                {(errors.description.message as string) ||
                  "Description is required"}
              </ErrorMessage>
            )}
          </div>
        </div>
      </div>
    </form>
  );
};
