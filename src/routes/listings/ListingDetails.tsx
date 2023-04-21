import { Link, useParams } from "react-router-dom";
import { useGetListingByIdQuery } from "../../api/endpoints/listings";
import { ReactComponent as BackIcon } from "../../assets/housedetail/back.svg";
import { ReactComponent as FeaturedStarIcon } from "../../assets/icons/listing/star.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/search/location.svg";
import { Button } from "../../components/Button";
import { Skeleton } from "../../components/skeleton/Skeleton";
import { AmenitiesSection } from "./AmenitiesSection";
import { HouseGallery } from "./HouseGallery";
import { MapSection } from "./MapSection";
import { SummarySection } from "./SummarySection";

export const ListingDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetListingByIdQuery(id || "");

  return (
    <div className="w-full pt-24">
      <div className="container mx-auto flex w-full flex-col md:px-0">
        <div>
          <Link className="flex items-center" to="/search">
            <BackIcon />
            <p className="ml-2 font-sans text-sm font-semibold text-primary-400 lg:text-base">
              Back to map
            </p>
          </Link>
        </div>

        <div className="flex flex-col justify-between pt-4 lg:w-full lg:flex-row lg:items-center">
          {isLoading ? (
            <Skeleton className="h-8 w-1/2" />
          ) : (
            <h3 className="font-sans text-2xl font-semibold lg:text-3xl">
              {data?.title}
            </h3>
          )}
          <p className="mt-2 font-sans font-medium text-secondaryText md:hidden md:text-base lg:text-xl">
            {isLoading ? (
              <Skeleton className="h-8 w-52" />
            ) : (
              data?.location.address + " " + data?.location.city
            )}
          </p>
          <div className="mt-4 flex gap-x-4 md:self-auto lg:mt-0">
            <Button
              variant="secondary"
              onClick={() => console.log("hello")}
              className="flex items-center"
            >
              <LocationIcon width={16} />
              <span className="ml-2 font-medium md:mx-2 lg:text-base">
                Share
              </span>
            </Button>
            <Button
              variant="secondary"
              onClick={() => console.log("hello")}
              className="flex items-center"
            >
              <FeaturedStarIcon width={16} />
              <span className="ml-2 font-medium md:mx-2 lg:text-base">
                Favorite
              </span>
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <p className="hidden font-sans text-sm font-medium text-secondaryText md:flex md:text-base lg:text-xl">
            {isLoading ? (
              <Skeleton className="h-8 w-52" />
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
