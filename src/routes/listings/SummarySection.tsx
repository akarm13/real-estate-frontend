import { useState } from "react";
import { ReactComponent as CheckMarkIcon } from "../../assets/housedetail/checkmark.svg";
import { ReactComponent as MeterIcon } from "../../assets/housedetail/meters.svg";
import { ReactComponent as BathroomIcon } from "../../assets/icons/listing/bathroom.svg";
import { ReactComponent as BedroomIcon } from "../../assets/icons/listing/bedroom.svg";
import { Button } from "../../components/Button";

import { Skeleton } from "../../components/skeleton/Skeleton";
import { Listing } from "../../types/listing";
import { LucideMessageSquare, LucidePhone } from "lucide-react";

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
        <div className="grid grid-cols-2 gap-8 my-8 md:flex items-center justify-around rounded-lg border-none md:border border-primary-background py-2">
          <div className="ml-2 flex flex-col">
            <p className="font-semibold font-sm md:text-base md:ml-0 lg:text-lg">
              Bedrooms
            </p>
            {isLoading ? (
              <RoomInfoSkeleton />
            ) : (
              <div className="flex items-center mx-2 mt-4">
                <BedroomIcon />

                <span className="mx-1 md:mx-4 w-16 font-medium text-primaryText">
                  {rooms?.bedrooms}
                </span>
              </div>
            )}
          </div>
          <div className="ml-2  flex flex-col">
            <p className="font-semibold font-sm md:text-base md:ml-0 lg:text-lg">
              Bathrooms
            </p>

            {isLoading ? (
              <RoomInfoSkeleton />
            ) : (
              <div className="flex items-center mx-2 mt-4">
                <BathroomIcon />

                <span className="mx-1 md:mx-4 w-16 font-medium text-primaryText">
                  {rooms?.bathrooms}
                </span>
              </div>
            )}
          </div>
          <div className="ml-2 flex flex-col">
            <p className="font-semibold font-sm md:text-base md:ml-0 lg:text-lg">
              Square Area
            </p>

            {isLoading ? (
              <RoomInfoSkeleton />
            ) : (
              <div className="flex items-center mt-4">
                <MeterIcon />

                <span className="mx-1 md:mx-4 w-16 font-medium text-primaryText">
                  {area} m2
                </span>
              </div>
            )}
          </div>
          <div className="ml-2  flex flex-col">
            <p className="font-semibold font-sm md:text-base md:ml-0 lg:text-lg">
              Status
            </p>

            {isLoading ? (
              <RoomInfoSkeleton />
            ) : (
              <div className="flex items-center mt-4 gap-x-2">
                <CheckMarkIcon />

                <span className="md:mx-4 w-16 font-medium text-primaryText capitalize">
                  {status}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h2 className="text-lg lg:text-2xl font-semibold">About this home</h2>

          <p className="text-secondaryText">
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

      <div className="w-full flex flex-col bg-white border border-none md:border-primary-background  px-2 py-6 rounded-lg gap-6 col-span-2 my-8 md:max-h-[350px] order-1">
        <h3 className="text-primary-500 lg:text-2xl font-bold text-2xl">
          {isLoading ? (
            <Skeleton className="w-32 h-8" />
          ) : (
            <span className="">${price}</span>
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
                <h4 className="font-bold lg:text-base">{owner?.fullName}</h4>
                <h5 className="text-secondaryText lg:text-base font-medium">
                  Verified Agent
                </h5>
              </div>
            </>
          )}
        </div>

        <div className="flex  md:flex-row w-full justify-between items-center  ">
          {isLoading ? (
            [1, 2, 3].map((_, index) => <AgentInfoSkeleton key={index} />)
          ) : (
            <>
              <div className="flex flex-col gap-2 items-center">
                <h4 className="font-semibold lg:text-base">Rating</h4>
                <p className="font-medium text-primaryText">5/5</p>
              </div>

              <div className="flex flex-col  gap-2 items-center">
                <h4 className="font-semibold lg:text-base">Listed</h4>
                <p className="font-medium text-primaryText">2</p>
              </div>

              <div className="flex flex-col gap-2 items-center">
                <h4 className="font-semibold lg:text-base">Sold</h4>
                <p className="font-medium text-primaryText">2</p>
              </div>
            </>
          )}
        </div>

        <Button
          onClick={handleTogglePhone}
          variant="primary"
          className="hidden md:flex"
        >
          {isPhoneVisible ? (
            <span className="mr-2">{owner?.phone}</span>
          ) : (
            <span className="mr-2">Show phone number</span>
          )}
        </Button>
      </div>
      <ContactAgentMobile phone={owner?.phone || ""} />
    </div>
  );
};

const ContactAgentMobile = ({ phone }: { phone: string }) => {
  // Show a call button on mobile a fixed bottom navigation
  return (
    <div className="sm:hidden fixed bottom-0 left-0 w-full bg-white border-t border-primary-background py-4 z-20 shadow-lg">
      <a
        className="flex justify-center gap-x-4 items-center px-4 py-4"
        href={`tel:${phone}`}
      >
        <LucidePhone className="text-gray-700" />
        <p className="font-semibold">Call Agent</p>
      </a>
    </div>
  );
};
