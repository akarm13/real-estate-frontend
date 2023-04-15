// SkeletonListingCard.tsx

import React from "react";
import { Skeleton } from "./Skeleton";

const SkeletonListingCard: React.FC = () => {
  return (
    <div className="flex flex-col transition duration-200 relative z-0 listing-card rounded-lg snap-center my-4 lg:my-0">
      <div className="overflow-hidden rounded-lg">
        <Skeleton className="h-[170px] w-full" />
      </div>
      <div className="absolute left-2 px-4 py-2 rounded-lg uppercase my-2 font-medium bg-primary-200 text-primary-800 text-sm">
        <Skeleton className="h-4 w-10" />
      </div>
      <div className="flex flex-col gap-y-2 px-5 items-baseline bg-white border border-primary-background py-6 rounded-lg relative ">
        <span className="text-primary-500 font-bold text-lg">
          <Skeleton className="h-4 w-14" />
        </span>
        <h3 className="text-primary-900 font-semibold text-md lg:text-lg h-[68px] mt-4">
          <Skeleton className="h-4 w-48" />
        </h3>
        <p className="flex gap-x-2 p-0 m-0 items-center">
          <Skeleton className="h-4 w-36" />
        </p>
        <hr className="w-full mx-auto my-2 bg-primary-background" />
        <div className="flex justify-between w-full mt-2 gap-x-4 lg:gap-0">
          <div className="flex gap-x-2 items-center text-gray-600">
            <span className="text-primary-500 rounded-lg">
              <Skeleton className="h-4 w-4" />
            </span>
            <div className="flex items-center gap-x-1">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-4" />
            </div>
          </div>
          <div className="flex gap-x-2 items-center text-gray-600">
            <span className="text-primary-500 rounded-lg">
              <Skeleton className="h-4 w-4" />
            </span>
            <div className="flex items-center gap-x-1">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-4" />
            </div>
          </div>
          <div className="flex gap-x-2 items-center text-gray-600">
            <span className="text-primary-500 rounded-lg">
              <Skeleton className="h-4 w-4" />
            </span>
            <div className="flex items-center gap-x-1">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="absolute bg-primary-500 flex -top-7 -left-1 items-center gap-x-2 py-2 px-4 rounded-lg">
          <Skeleton className="w-4 h-4" />
          <span className="text-white uppercase text-sm font-semibold">
            <Skeleton className="h-4 w-14" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkeletonListingCard;
