// SkeletonListingCard.tsx

import React from "react";
import { Skeleton } from "./Skeleton";

const SkeletonListingCard: React.FC = () => {
  return (
    <div className="listing-card relative z-10 my-4 flex snap-center flex-col rounded-lg transition duration-200 lg:my-0">
      <div className="overflow-hidden rounded-lg">
        <Skeleton className="h-[170px] w-full" />
      </div>
      <div className="absolute left-2 my-2 rounded-lg bg-primary-200 px-4 py-2 text-sm font-medium uppercase text-primary-800">
        <Skeleton className="h-4 w-10" />
      </div>
      <div className="relative flex flex-col items-baseline gap-y-2 rounded-lg border border-primary-background bg-white px-5 py-6 ">
        <span className="text-lg font-bold text-primary-500">
          <Skeleton className="h-4 w-14" />
        </span>
        <h3 className="text-md mt-4 h-[68px] font-semibold text-primary-900 lg:text-lg">
          <Skeleton className="h-4 w-48" />
        </h3>
        <p className="m-0 flex items-center gap-x-2 p-0">
          <Skeleton className="h-4 w-36" />
        </p>
        <hr className="mx-auto my-2 w-full bg-primary-background" />
        <div className="mt-2 flex w-full justify-between gap-x-4 lg:gap-0">
          <div className="flex items-center gap-x-2 text-gray-600">
            <span className="rounded-lg text-primary-500">
              <Skeleton className="h-4 w-4" />
            </span>
            <div className="flex items-center gap-x-1">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-4" />
            </div>
          </div>
          <div className="flex items-center gap-x-2 text-gray-600">
            <span className="rounded-lg text-primary-500">
              <Skeleton className="h-4 w-4" />
            </span>
            <div className="flex items-center gap-x-1">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-4" />
            </div>
          </div>
          <div className="flex items-center gap-x-2 text-gray-600">
            <span className="rounded-lg text-primary-500">
              <Skeleton className="h-4 w-4" />
            </span>
            <div className="flex items-center gap-x-1">
              <Skeleton className="h-4 w-4" />
              <Skeleton className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="absolute -top-7 -left-1 flex items-center gap-x-2 rounded-lg bg-primary-500 py-2 px-4">
          <Skeleton className="h-4 w-4" />
          <span className="text-sm font-semibold uppercase text-white">
            <Skeleton className="h-4 w-14" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default SkeletonListingCard;
