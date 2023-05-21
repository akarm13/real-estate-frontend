import { Link } from "react-router-dom";
import { useGetAllListingsQuery } from "../../api/endpoints/listings";
import { ListingCard } from "../../components/ListingCard";
import SkeletonListingCard from "../../components/skeleton/SkeletonListingCard";

export const ListingsSection = () => {
  const { data, isLoading, isError } = useGetAllListingsQuery({
    pageNumber: 1,
    pageSize: 10,
    status: ["featured"],
  });

  return (
    <div className="md: container mx-auto mt-24">
      <h1 className="text-2xl font-semibold text-primary-900 md:text-3xl">
        Featured Listings
      </h1>
      <h4 className="mt-2 text-base font-semibold text-secondaryText md:text-xl">
        Discover the best properties
      </h4>
      {isLoading ? (
        <div className="mt-16 flex snap-x snap-proximity gap-x-4 overflow-x-auto lg:grid lg:snap-none lg:grid-cols-listing lg:flex-wrap lg:gap-x-4 lg:gap-y-10">
          {Array.from({ length: 8 }).map((_, index) => (
            <SkeletonListingCard key={index} />
          ))}
        </div>
      ) : (
        <div className="mt-16 flex snap-x snap-proximity gap-x-4 overflow-x-auto lg:grid lg:snap-none lg:grid-cols-listing lg:flex-wrap lg:gap-x-4 lg:gap-y-10">
          {data?.data !== undefined && data.data?.length > 0 ? (
            data?.data.map((property) => (
              <Link key={property?._id} to={`/listings/${property?._id}`}>
                <ListingCard {...property} />
              </Link>
            ))
          ) : (
            <h1>No listings found</h1>
          )}
        </div>
      )}
    </div>
  );
};
