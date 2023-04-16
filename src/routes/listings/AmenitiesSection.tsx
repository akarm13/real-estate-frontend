import { Skeleton } from "../../components/skeleton/Skeleton";
import { Amenity } from "../../types/listing";

type Props = {
  amenities: Amenity[];
  isLoading: boolean;
};

export const AmenitiesSection = ({ amenities, isLoading }: Props) => {
  return (
    <div className="flex flex-col gap-6 mt-12">
      <h2 className="text-2xl font-semibold">Amenities</h2>

      <div className="flex lg:flex-row flex-col gap-4 w-[730px] flex-wrap">
        {isLoading ? (
          <>
            <Skeleton className="w-32 h-8 rounded-lg" />
            <Skeleton className="w-32 h-8 ml-4 rounded-lg" />
            <Skeleton className="w-32 h-8 ml-4 rounded-lg" />
          </>
        ) : (
          amenities.map((amenity: Amenity) => (
            <h3
              key={amenity._id}
              className="text-primary-500  bg-primary-background w-72 md:w-1/2 lg:w-fit px-4 py-2 rounded-lg capitalize"
            >
              {amenity.title}
            </h3>
          ))
        )}
      </div>
    </div>
  );
};
