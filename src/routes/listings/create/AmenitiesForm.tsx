import { Controller, useFormContext } from "react-hook-form";
import { Amenity } from "../../../types/listing";
import { ErrorMessage } from "../../../components/ErrorMessage";

type Props = {
  onSubmit: (data: any) => void;
  amenities: Amenity[];
};
export const AmenitiesForm = ({ onSubmit, amenities }: Props) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-y-2">
        <h3 className="text-2xl font-semibold text-primaryText">Amenities</h3>
        <h4 className="text-lg text-gray-600">
          List the amenities that the property offers, such as parking, pool,
          gym, security, internet, etc.
        </h4>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 mt-8 gap-x-8 gap-y-4 items-center">
        {amenities
          ? amenities.map((amenity) => (
              <div className="flex gap-x-2 items-center" key={amenity._id}>
                <Controller
                  control={control}
                  name={`amenities.${amenity._id}`}
                  render={({ field }) => (
                    <input
                      {...field}
                      id={amenity._id}
                      type="checkbox"
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
      <div className="min-h-[24px] mt-8">
        {errors.amenities && (
          <ErrorMessage>
            {(errors.amenities.message as string) || "Amenities is required"}
          </ErrorMessage>
        )}
      </div>
    </div>
  );
};
