import { Amenity } from "../../types/listing";

type Props = {
  amenities: Amenity[];
  isLoading: boolean;
};

export const AmenitiesSection = ({ amenities }: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <h2 className="text-2xl font-semibold">Amenities</h2>

      <div className="flex lg:flex-row flex-col   gap-4 w-[730px] flex-wrap">
        {amenities.map((amenity: Amenity) => (
          <h3
            key={amenity._id}
            className="text-primary-500  bg-primary-background w-72 md:w-1/2 lg:w-fit px-4 py-2 rounded-lg"
          >
            {amenity.title}
          </h3>
        ))}
      </div>
    </div>
  );
};
