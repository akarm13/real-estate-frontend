import { Link, useParams } from "react-router-dom";
import { useGetListingByIdQuery } from "../../api/endpoints/listings";
import { ReactComponent as BackIcon } from "../../assets/housedetail/back.svg";
import { ReactComponent as FeaturedStarIcon } from "../../assets/icons/listing/star.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/search/location.svg";
import { Skeleton } from "../../components/skeleton/Skeleton";
import { AmenitiesSection } from "./AmenitiesSection";
import { HouseGallery } from "./HouseGallery";
import { MapSection } from "./MapSection";
import { SummarySection } from "./SummarySection";

export const Details = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useGetListingByIdQuery(id || "");

  return (
    <div className="w-full pt-24">
      <div className="flex flex-col w-full mx-auto md:px-0 container py-12">
        <div>
          <Link className="flex  items-center	" to="/search">
            <BackIcon />
            <p className="lg:text-base text-sm font-semibold text-primary-400 font-sans ml-2">
              Back to map
            </p>
          </Link>
        </div>

        <div className="flex lg:w-full justify-between items-center  pt-10">
          {isLoading ? (
            <Skeleton className="w-1/2 h-8" />
          ) : (
            <h3 className="font-semibold  text-sm md:text-lg lg:text-3xl font-sans">
              {data?.title}
            </h3>
          )}

          <div className="flex">
            <div className="flex items-center justify-between border-primary-background mr-1 lg:mr-4 px-1 py-1 lg:px-5 lg:py-3 border-2 rounded-lg">
              <LocationIcon width={16} />
              <span className="font-semibold text-xs lg:text-base mx-1 md:mx-2">
                Share
              </span>
            </div>

            <div className="flex items-center justify-between border-primary-background px-1 py-1  lg:px-5 lg:py-3  border-2 rounded-lg">
              <FeaturedStarIcon width={17} />
              <span className="font-semibold text-xs lg:text-base mx-1 md:mx-2">
                Favorite
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-secondaryText md:text-base text-sm lg:text-xl font-medium font-sans">
            {isLoading ? (
              <Skeleton className="w-52 h-8" />
            ) : (
              data?.location.address + " " + data?.location.city
            )}
          </p>
        </div>

        <HouseGallery
          images={data?.images || []}
          type={data?.type}
          isLoading={isLoading}
        />
        <SummarySection
          rooms={data?.rooms}
          area={data?.area}
          price={data?.price}
          owner={data?.owner}
          status={data?.status}
          description={data?.description}
          isLoading={isLoading}
        />
        <AmenitiesSection
          amenities={data?.amenities || []}
          isLoading={isLoading}
        />
        <MapSection isLoading={isLoading} geometry={data?.geometry} />
      </div>
    </div>
  );
};
