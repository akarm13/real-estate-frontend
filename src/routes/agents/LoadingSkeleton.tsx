import { SkeletonAgentCard } from "../../components/skeleton/SkeletonAgentCard";

export const LoadingSkeleton = () => (
  <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
    {Array.from({ length: 6 }).map((_, index) => (
      <SkeletonAgentCard key={index} />
    ))}
  </div>
);
