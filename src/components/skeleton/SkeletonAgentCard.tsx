import React from "react";
import { Skeleton } from "./Skeleton";

export const SkeletonAgentCard: React.FC = () => {
  return (
    <div className="relative flex flex-col rounded-2xl border border-primary-background">
      {/* The user image */}
      <Skeleton className="h-36 w-full rounded-lg rounded-b-none object-cover md:h-44" />
      {/* Details section */}
      <div className="flex flex-col gap-y-4 py-6 px-4">
        <Skeleton className="mb-4 h-4 w-32 rounded" />
        <div className="mt-4 flex flex-col gap-y-2">
          <div className="flex items-center">
            <Skeleton className="mr-2 h-5 w-5 rounded" />
            <Skeleton className="h-4 w-40 rounded" />
          </div>
          <div className="flex items-center">
            <Skeleton className="mr-2 h-5 w-5 rounded" />
            <Skeleton className="h-4 w-32 rounded" />
          </div>
        </div>

        {/* View agent */}
        <div className="tranisition mt-8 flex items-center gap-x-2">
          <Skeleton className="mr-2 h-5 w-5 rounded" />
          <Skeleton className="h-4 w-24 rounded" />
        </div>
      </div>
    </div>
  );
};
