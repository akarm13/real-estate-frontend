import { Skeleton } from "../../components/skeleton/Skeleton";
import { Amenity } from "../../types/listing";

type Props = {
  amenities: Amenity[];
  isLoading: boolean;
};

export const AmenitiesSection = ({ amenities, isLoading }: Props) => {
  return (
    <div className="mt-12 flex flex-col gap-6">
      <h2 className="text-lg font-semibold lg:text-2xl">Amenities</h2>

      <div className="flex flex-col flex-wrap gap-4 lg:flex-row">
        {isLoading ? (
          <>
            <Skeleton className="h-8 w-32 rounded-lg" />
            <Skeleton className="ml-4 h-8 w-32 rounded-lg" />
            <Skeleton className="ml-4 h-8 w-32 rounded-lg" />
          </>
        ) : (
          amenities.map((amenity: Amenity) => (
            <h3
              key={amenity._id}
              className="w-72  rounded-lg bg-primary-background px-4 py-2 capitalize text-primary-500 md:w-1/2 lg:w-fit"
            >
              {amenity.title}
            </h3>
          ))
        )}
      </div>
    </div>
  );
};
