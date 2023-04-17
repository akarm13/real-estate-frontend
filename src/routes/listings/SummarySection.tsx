import { useState } from "react";
import { ReactComponent as CheckMarkIcon } from "../../assets/housedetail/checkmark.svg";
import { ReactComponent as MeterIcon } from "../../assets/housedetail/meters.svg";
import { ReactComponent as Person } from "../../assets/housedetail/person.svg";
import { ReactComponent as BathroomIcon } from "../../assets/icons/listing/bathroom.svg";
import { ReactComponent as BedroomIcon } from "../../assets/icons/listing/bedroom.svg";
import { Button } from "../../components/Button";

import { Listing } from "../../types/listing";
import { Skeleton } from "../../components/skeleton/Skeleton";

type Props = {
  rooms: Listing["rooms"] | undefined;
  area: Listing["area"] | undefined;
  description: Listing["description"] | undefined;
  price: Listing["price"] | undefined;
  owner: Listing["owner"] | undefined;
  status: Listing["status"] | undefined;
  isLoading: boolean;
};

const RoomInfoSkeleton = () => (
  <div className="flex items-center mx-2 mt-4">
    <Skeleton className="w-6 h-6 rounded-lg" />
    <div className="flex flex-col">
      <Skeleton className="ml-2 w-12 h-6" />
    </div>
  </div>
);

const AgentInfoSkeleton = () => (
  <div className="flex flex-col gap-2 items-center">
    <Skeleton className="w-16 h-4" />
    <Skeleton className="w-8 h-4" />
  </div>
);

const DescriptionSkeleton = () => (
  <>
    <Skeleton className="w-full h-4" />
    <Skeleton className="w-5/6 h-4 mt-2" />
    <Skeleton className="w-4/6 h-4 mt-2" />
    <Skeleton className="w-3/6 h-4 mt-2" />
    <Skeleton className="w-2/6 h-4 mt-2" />
  </>
);
export const SummarySection = ({
  rooms,
  area,
  price,
  owner,
  status,
  description,
  isLoading,
}: Props) => {
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);

  const handleTogglePhone = () => {
    setIsPhoneVisible(!isPhoneVisible);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 md:gap-x-8">
      <div className="flex flex-col gap-6 col-span-3 order-2">
        <div className="grid grid-cols-2 gap-8 my-8 md:flex items-center justify-around rounded-lg border border-primary-background py-6 px-12">
          <div className="ml-2">
            <p className="font-semibold text-sm md:text-base lg:text-lg">
              Bedrooms
            </p>

            {isLoading ? (
              <RoomInfoSkeleton />
            ) : (
              <div className="flex items-center mx-2 mt-4">
                <BedroomIcon />

                <span className="mx-2 md:mx-4 lg:text-base md:text-sm text-sm ">
                  {rooms?.bedrooms}
                </span>
              </div>
            )}
          </div>
          <div className="ml-2">
            <p className="font-semibold text-sm md:text-base  lg:text-lg">
              Bathrooms
            </p>

            {isLoading ? (
              <RoomInfoSkeleton />
            ) : (
              <div className="flex items-center mx-2 mt-4">
                <BathroomIcon />

                <span className="mx-2 md:mx-4 lg:text-base md:text-sm text-sm">
                  {rooms?.bathrooms}
                </span>
              </div>
            )}
          </div>
          <div className="ml-2">
            <p className="font-semibold text-sm md:text-base md:ml-0 ml-1  lg:text-lg">
              Square Area
            </p>

            {isLoading ? (
              <RoomInfoSkeleton />
            ) : (
              <div className="flex items-center  mt-4">
                <MeterIcon />

                <span className="mx-1 md:mx-4 w-16 lg:text-base md:text-sm text-sm">
                  {area} m2
                </span>
              </div>
            )}
          </div>
          <div className="ml-2">
            <p className="font-semibold text-sm md:text-base lg:text-lg">
              Status
            </p>

            {isLoading ? (
              <RoomInfoSkeleton />
            ) : (
              <div className="flex items-center mt-4 gap-x-2">
                <CheckMarkIcon />

                <span className="md:mx-4 lg:text-base md:text-sm text-sm translate-x-0 capitalize">
                  {status}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="lg:text-2xl md:text-lg font-semibold">
            About this home
          </h2>

          <p className="text-secondaryText text-sm lg:text-base">
            {isLoading ? (
              <>
                <DescriptionSkeleton />
              </>
            ) : (
              <>{description}</>
            )}
          </p>
        </div>
      </div>

      <div className="w-full flex flex-col bg-white border border-primary-background  px-6 py-6 rounded-lg gap-6 col-span-2 my-8 md:max-h-[350px] order-1">
        <h5 className="font-semibold text-base lg:text-lg">Sale Price</h5>

        <h3 className="text-primary-500 text-lg lg:text-2xl font-bold ">
          {isLoading ? (
            <Skeleton className="w-32 h-8" />
          ) : (
            <span className="text-primary-500 text-lg lg:text-2xl font-bold ">
              ${price}
            </span>
          )}
        </h3>

        <div className="flex md:w-48 w-44 gap-x-4">
          {isLoading ? (
            <>
              <Skeleton className="w-12 h-12 rounded-full" />
              <div className="flex flex-col">
                <Skeleton className="w-32 h-4" />
                <Skeleton className="w-24 h-4 mt-2" />
              </div>
            </>
          ) : (
            <>
              <img
                src={owner?.avatar}
                alt="avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h4 className="font-semibold lg:text-base text-sm">
                  {owner?.fullName}
                </h4>
                <h5 className="text-secondaryText lg:text-base text-sm">
                  Verified Agent
                </h5>
              </div>
            </>
          )}
        </div>

        <div className="flex w-full  justify-between items-center  ">
          {isLoading ? (
            [1, 2, 3].map((_, index) => <AgentInfoSkeleton key={index} />)
          ) : (
            <>
              <div className="flex flex-col gap-2 items-center">
                <h4 className="font-semibold  lg:text-base md:text-sm text-sm ">
                  Rating
                </h4>
                <p className="text-sm md:text-base">5/5</p>
              </div>

              <div className="flex flex-col  gap-2 items-center">
                <h4 className="font-semibold  lg:text-base md:text-sm text-sm ">
                  Properties Listed
                </h4>
                <p className="text-sm md:text-base">2</p>
              </div>

              <div className="flex flex-col  gap-2 items-center">
                <h4 className="font-semibold  lg:text-base md:text-sm text-sm ">
                  Properties sold
                </h4>
                <p className="text-sm md:text-base">2</p>
              </div>
            </>
          )}
        </div>

        <Button onClick={handleTogglePhone} variant="primary">
          {isPhoneVisible ? (
            <span className="mr-2">{owner?.phone}</span>
          ) : (
            <span className="mr-2">Show phone number</span>
          )}
        </Button>
      </div>
    </div>
  );
};
