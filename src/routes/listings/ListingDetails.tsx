import { Link, useParams } from "react-router-dom";
import { useGetListingByIdQuery } from "../../api/endpoints/listings";
import { ReactComponent as BackIcon } from "../../assets/housedetail/back.svg";
import { ReactComponent as StarFilled } from "../../assets/icons/listing/star-filled.svg";
import { ReactComponent as StarOutline } from "../../assets/icons/listing/star-outline.svg";
import { Button } from "../../components/Button";
import { Skeleton } from "../../components/skeleton/Skeleton";
import { AmenitiesSection } from "./AmenitiesSection";
import { HouseGallery } from "./HouseGallery";
import { MapSection } from "./MapSection";
import { SummarySection } from "./SummarySection";
import { useMemo, useState } from "react";
import { useToggleFavoriteMutation } from "../../api/endpoints/favorites";
import { toast } from "react-hot-toast";
import { selectAuth } from "../../store/slices/auth";
import { useSelector } from "react-redux";
import { Edit } from "lucide-react";
import { LinkButton } from "../../components/LinkButton";
import {
  allStatusOptions,
  rentStatusOptions,
  saleStatusOptions,
} from "./edit/EditListing";
import { ListingStatus } from "../../types/listing";

export const ListingDetails = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isFetching, refetch } = useGetListingByIdQuery(
    id || ""
  );

  const { user } = useSelector(selectAuth);

  const [toggleFavorite, { isLoading: isFavoriting }] =
    useToggleFavoriteMutation();
  const isFavorited = useMemo(() => {
    return data?.isFavorited || false;
  }, [data?.isFavorited]);

  const handleToggleFavorite = async () => {
    if (isFavoriting) return;

    const response = await toggleFavorite(id || "").unwrap();

    refetch().then(() => {
      if (response.action === "favorited" && !isFetching) {
        toast.success("Added to favorites");
      } else if (response.action === "unfavorited" && !isFetching) {
        toast.success("Removed from favorites");
      }
    });
  };

  const isOwnListing = useMemo(() => {
    if (!user) return false;
    return data?.owner._id === user?._id;
  }, [data?.owner._id, user?._id]);

  return (
    <div className="w-full pt-24">
      <div className="container mx-auto flex w-full flex-col">
        <div>
          <Link className="flex items-center" to="/map">
            <BackIcon />
            <p className="ml-2 font-sans text-sm font-semibold text-primary-400 lg:text-base">
              Back to map
            </p>
          </Link>
        </div>

        <div className="flex flex-col justify-between pt-4 lg:w-full lg:flex-row lg:items-center">
          {isLoading || isFetching ? (
            <Skeleton className="h-8 w-1/2" />
          ) : (
            <h3 className="font-sans text-2xl font-semibold lg:text-3xl">
              {data?.title}
            </h3>
          )}
          <p className="mt-2 font-sans font-medium text-secondaryText md:hidden md:text-base lg:text-xl">
            {isLoading || isFetching ? (
              <Skeleton className="h-8 w-52" />
            ) : (
              data?.location.address + " " + data?.location.city
            )}
          </p>
          <div className="mt-4 flex gap-x-4 md:self-auto lg:mt-0">
            {!isLoading && isOwnListing && (
              <LinkButton to={`/listings/${id}/edit`} variant="secondary">
                <Edit
                  width={20}
                  height={20}
                  className="-current text-gray-600"
                />
              </LinkButton>
            )}

            {isLoading || isFetching ? (
              <Skeleton className="h-8 w-52" />
            ) : (
              <Button
                variant="secondary"
                onClick={handleToggleFavorite}
                className="flex items-center"
                isLoading={isFavoriting || isLoading || isFetching}
                loadingText=""
              >
                {isFavorited ? (
                  <StarFilled
                    width={20}
                    height={20}
                    className="fill-current text-primary-500"
                  />
                ) : (
                  <StarOutline
                    width={20}
                    height={20}
                    className="fill-current text-gray-600"
                  />
                )}
                <span className="ml-2 font-medium md:mx-2 lg:text-base text-">
                  {isFavorited ? "Remove from favorites" : "Add to favorites"}
                </span>
              </Button>
            )}
          </div>
        </div>

        <div className="mt-4">
          <p className="hidden font-sans text-sm font-medium text-secondaryText md:flex md:text-base lg:text-xl">
            {isLoading || isFetching ? (
              <Skeleton className="h-8 w-52" />
            ) : (
              data?.location.address + " " + data?.location.city
            )}
          </p>
        </div>

        <HouseGallery
          images={data?.images || []}
          type={data?.type}
          isLoading={isLoading || isFetching}
        />
        <SummarySection
          rooms={data?.rooms}
          area={data?.area}
          price={data?.price}
          owner={data?.owner}
          status={
            data?.status !== undefined
              ? (allStatusOptions[data?.status] as ListingStatus)
              : "normal"
          }
          description={data?.description}
          isLoading={isLoading || isFetching}
        />
        <AmenitiesSection
          amenities={data?.amenities || []}
          isLoading={isLoading || isFetching}
        />
        <MapSection
          isLoading={isLoading || isFetching}
          geometry={data?.geometry}
        />
      </div>
    </div>
  );
};
