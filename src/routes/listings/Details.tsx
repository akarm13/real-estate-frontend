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

export const Details = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading } = useGetListingByIdQuery(id || "");

  return (
    <div className="w-full pt-24">
      <div className="flex flex-col w-full mx-auto md:px-0 container">
        <div>
          <Link className="flex items-center" to="/search">
            <BackIcon />
            <p className="lg:text-base text-sm font-semibold text-primary-400 font-sans ml-2">
              Back to map
            </p>
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row lg:w-full justify-between lg:items-center pt-4">
          {isLoading ? (
            <Skeleton className="w-1/2 h-8" />
          ) : (
            <h3 className="font-semibold text-2xl lg:text-3xl font-sans">
              {data?.title}
            </h3>
          )}
          <p className="mt-2 md:hidden text-secondaryText md:text-base lg:text-xl font-medium font-sans">
            {isLoading ? (
              <Skeleton className="w-52 h-8" />
            ) : (
              data?.location.address + " " + data?.location.city
            )}
          </p>
          <div className="flex md:self-auto mt-4 lg:mt-0 gap-x-4">
            <Button
              variant="secondary"
              onClick={() => console.log("hello")}
              className="flex items-center"
            >
              <LocationIcon width={16} />
              <span className="font-medium lg:text-base ml-2 md:mx-2">
                Share
              </span>
            </Button>
            <Button
              variant="secondary"
              onClick={() => console.log("hello")}
              className="flex items-center"
            >
              <FeaturedStarIcon width={16} />
              <span className="font-medium lg:text-base ml-2 md:mx-2">
                Favorite
              </span>
            </Button>
          </div>
        </div>

        <div className="mt-4">
          <p className="hidden md:flex text-secondaryText md:text-base text-sm lg:text-xl font-medium font-sans">
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
