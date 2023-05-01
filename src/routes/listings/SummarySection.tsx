import { useState } from "react";
import { ReactComponent as CheckMarkIcon } from "../../assets/housedetail/checkmark.svg";
import { ReactComponent as MeterIcon } from "../../assets/housedetail/meters.svg";
import { ReactComponent as BathroomIcon } from "../../assets/icons/listing/bathroom.svg";
import { ReactComponent as BedroomIcon } from "../../assets/icons/listing/bedroom.svg";
import { Button } from "../../components/Button";

import { CopyIcon, LucidePhone, PhoneIcon, ViewIcon } from "lucide-react";
import { Skeleton } from "../../components/skeleton/Skeleton";
import { Listing } from "../../types/listing";
import { useCopyToClipboard } from "react-use";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";

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
  <div className="mx-2 mt-4 flex items-center">
    <Skeleton className="h-6 w-6 rounded-lg" />
    <div className="flex flex-col">
      <Skeleton className="ml-2 h-6 w-12" />
    </div>
  </div>
);

const AgentInfoSkeleton = () => (
  <div className="flex flex-col items-center gap-2">
    <Skeleton className="h-4 w-16" />
    <Skeleton className="h-4 w-8" />
  </div>
);

const DescriptionSkeleton = () => (
  <>
    <Skeleton className="h-4 w-full" />
    <Skeleton className="mt-2 h-4 w-5/6" />
    <Skeleton className="mt-2 h-4 w-4/6" />
    <Skeleton className="mt-2 h-4 w-3/6" />
    <Skeleton className="mt-2 h-4 w-2/6" />
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

  const [value, copy] = useCopyToClipboard();

  const handleCopyButtonPress = () => {
    if (owner?.phone === undefined) return;
    copy(owner?.phone);
    toast.success("Phone number copied!");
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 md:gap-x-8">
      <div className="order-2 col-span-3 flex flex-col gap-6 md:order-1">
        <div className="my-4 grid grid-cols-2 items-center gap-y-8 rounded-lg border-0 border-primary-background md:my-8 md:p-4 lg:grid-cols-4 lg:border">
          <div className="ml-2 flex flex-col">
            <p className="font-sm font-semibold md:ml-0 md:text-base lg:text-lg">
              Bedrooms
            </p>
            {isLoading ? (
              <RoomInfoSkeleton />
            ) : (
              <div className="mx-2 mt-4 flex items-center">
                <BedroomIcon />

                <span className="mx-1 w-16 font-medium text-primaryText md:mx-4">
                  {rooms?.bedrooms}
                </span>
              </div>
            )}
          </div>
          <div className="ml-2  flex flex-col">
            <p className="font-sm font-semibold md:ml-0 md:text-base lg:text-lg">
              Bathrooms
            </p>

            {isLoading ? (
              <RoomInfoSkeleton />
            ) : (
              <div className="mx-2 mt-4 flex items-center">
                <BathroomIcon />

                <span className="mx-1 w-16 font-medium text-primaryText md:mx-4">
                  {rooms?.bathrooms}
                </span>
              </div>
            )}
          </div>
          <div className="ml-2 flex flex-col">
            <p className="font-sm font-semibold md:ml-0 md:text-base lg:text-lg">
              Square Area
            </p>

            {isLoading ? (
              <RoomInfoSkeleton />
            ) : (
              <div className="mt-4 flex items-center">
                <MeterIcon />

                <span className="mx-1 w-16 font-medium text-primaryText md:mx-4">
                  {area} m2
                </span>
              </div>
            )}
          </div>
          <div className="ml-2  flex flex-col">
            <p className="font-sm font-semibold md:ml-0 md:text-base lg:text-lg">
              Status
            </p>

            {isLoading ? (
              <RoomInfoSkeleton />
            ) : (
              <div className="mt-4 flex items-center gap-x-2">
                <CheckMarkIcon />

                <span className="w-16 font-medium capitalize text-primaryText md:mx-4">
                  {status}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="my-4 flex flex-col gap-4 md:my-0">
          <h2 className="text-lg font-semibold lg:text-2xl">About this home</h2>

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

      <div className="order-1 col-span-2 my-4 flex w-full flex-col gap-6 rounded-lg  border-0 bg-white px-2 py-6 md:order-2 md:my-8 md:max-h-[300px] md:border-primary-background lg:border lg:px-8 lg:py-6">
        <h3 className="text-2xl font-bold text-primary-500 lg:text-2xl">
          {isLoading ? (
            <Skeleton className="h-8 w-32" />
          ) : (
            <span className="">${price}</span>
          )}
        </h3>

        <div className="flex w-44 gap-x-4 md:w-48">
          {isLoading ? (
            <>
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="flex flex-col">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="mt-2 h-4 w-24" />
              </div>
            </>
          ) : (
            <>
              <img
                src={owner?.avatar}
                alt="avatar"
                className="h-12 w-12 rounded-full"
              />
              <div>
                <h4 className="font-bold lg:text-base">{owner?.fullName}</h4>
                <h5 className="font-medium text-secondaryText lg:text-base">
                  {owner?.isVerified ? "Verified" : "Not verified"}
                </h5>
              </div>
            </>
          )}
        </div>

        <div className="flex  w-full items-center justify-between md:flex-row  ">
          {isLoading ? (
            [1, 2].map((_, index) => <AgentInfoSkeleton key={index} />)
          ) : (
            <>
              <div className="flex flex-row items-center gap-1">
                <p className="font-semibold lg:text-base text-primaryText">2</p>
                <h4 className="lg:text-base">Items listed</h4>
              </div>
              {/* View agent */}
              <Link
                to={`/agents/${owner?._id}`}
                className="tranisition flex items-center gap-x-2 hover:underline"
              >
                <ViewIcon className="h-5 w-5 stroke-primary-500" />
                <span className="font-semibold text-primary-500">
                  View agent
                </span>
              </Link>
            </>
          )}
        </div>

        <div className="mt-2 hidden md:flex md:justify-between">
          <div className="flex items-center">
            <PhoneIcon className="mr-2 text-gray-700" />
            <span className="mr-2 font-medium text-gray-700">
              {owner?.phone}
            </span>
          </div>
          <button
            onClick={handleCopyButtonPress}
            className="ml-2 py-2 text-primary-500 md:ml-0"
          >
            <CopyIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      <ContactAgentMobile phone={owner?.phone || ""} />
    </div>
  );
};

const ContactAgentMobile = ({ phone }: { phone: string }) => {
  // Show a call button on mobile a fixed bottom navigation
  return (
    <div className="fixed bottom-0 left-0 z-20 w-full border-t border-primary-background bg-white py-4 shadow-lg md:hidden">
      <a
        className="flex items-center justify-center gap-x-4 px-4 py-4"
        href={`tel:${phone}`}
      >
        <LucidePhone className="text-gray-700" />
        <p className="font-semibold">Call Agent</p>
      </a>
    </div>
  );
};
