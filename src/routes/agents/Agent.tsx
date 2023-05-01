import { Link, useParams } from "react-router-dom";
import { useLazyGetListingsByAgentQuery } from "../../api/endpoints/listings";
import { useEffect, useState } from "react";
import { useLazyGetUserByIdQuery } from "../../api/endpoints/user";
import SkeletonListingCard from "../../components/skeleton/SkeletonListingCard";
import { ListingCard } from "../../components/ListingCard";
import { Listing } from "../../types/listing";
import { Skeleton } from "../../components/skeleton/Skeleton";

export const Agent = () => {
  const { id } = useParams<{ id: string }>();

  const [
    loadAgent,
    { data: agent, isLoading: isAgentLoading, isFetching: isAgentFetching },
  ] = useLazyGetUserByIdQuery();

  const [
    loadListings,
    { data: listing, isLoading, isError, isSuccess, isFetching },
  ] = useLazyGetListingsByAgentQuery();

  const [orderBy, setOrderBy] = useState("desc");

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(e.target.value);
  };

  useEffect(() => {
    if (id) {
      loadAgent(id).then((response) => {
        if (response && response.data) {
          loadListings({
            id: response.data._id,
            pageSize: 10,
            pageNumber: 1,
            orderBy,
          });
        }
      });
    }
  }, [id, loadListings, orderBy, loadAgent]);

  return (
    <div className="w-full pt-20 relative">
      <div className="container mx-auto flex border-r-primary-background bg-white">
        <nav className="hidden md:flex flex-col gap-y-4 w-72  border-primary-background pt-12 absolute top-32 shadow-card rounded-lg">
          <div className="flex items-center gap-y-8 flex-col mb-8">
            <div className="flex flex-col items-center">
              {isAgentLoading || isLoading ? (
                <div className="flex flex-col items-center">
                  <Skeleton className="w-12 h-12 rounded-full" />
                  <div className="text-center mt-4">
                    <Skeleton className="w-24 h-4 rounded-lg" />
                    <Skeleton className="w-24 h-4 rounded-lg mt-4" />
                  </div>
                </div>
              ) : (
                <>
                  <img
                    src={agent?.avatar}
                    alt="User Avatar"
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="text-center mt-4">
                    <h1 className="font-semibold text-lg">{agent?.fullName}</h1>
                    <p className="text-gray-500 capitalize">{agent?.role}</p>
                    <div>
                      {/* Show total number of listings */}
                      <p className="text-gray-500 capitalize mt-2">
                        <span className="font-semibold text-primaryText mr-1">
                          {listing?.page?.total}
                        </span>
                        listings
                      </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </nav>

        <div className="w-full container md:pl-96 pt-12">
          <div className="flex flex-col gap-y-2">
            <h3 className="text-2xl font-semibold text-primaryText">
              {agent?.fullName}'s Listings
            </h3>
            <h4 className="text-lg text-gray-600">
              {listing?.page?.total} listings found
            </h4>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-x-2 self-end mt-8">
              <select
                name="sort"
                id="sort"
                className={`h-10 w-full min-w-[120px] rounded-lg border border-primary-100 bg-transparent px-3 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 focus:ring-primary-500`}
                value={orderBy}
                onChange={handleSortByChange}
                disabled={isLoading || isFetching}
              >
                <option value="desc">Newest</option>
                <option value="asc">Oldest</option>
              </select>
            </div>
            <div
              className={`grid grid-cols-1 gap-y-3 pt-4  md:gap-x-3 xl:grid-cols-3 ${
                isFetching ? "pointer-events-none" : ""
              }`}
            >
              {isLoading || isFetching ? (
                <>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <SkeletonListingCard key={index} />
                  ))}
                </>
              ) : listing?.data !== undefined && listing.data?.length > 0 ? (
                listing?.data.map((listing: Listing) => (
                  <Link
                    key={listing?._id}
                    to={`/listings/${listing?._id}`}
                    state={{
                      from: location.pathname,
                    }}
                  >
                    <ListingCard {...listing} />
                  </Link>
                ))
              ) : (
                <h1>No listings found</h1>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
