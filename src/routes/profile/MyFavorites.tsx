import { motion } from "framer-motion";
import { ListingCard } from "../../components/ListingCard";
import {
  useGetListingByIdQuery,
  useLazyGetFavoritedListingsQuery,
  useLazyGetListingsByAgentQuery,
} from "../../api/endpoints/listings";
import { useSelector } from "react-redux";
import { selectAuth } from "../../store/slices/auth";
import { useEffect, useState } from "react";
import SkeletonListingCard from "../../components/skeleton/SkeletonListingCard";
import { Link } from "react-router-dom";

export const MyFavorites = () => {
  const auth = useSelector(selectAuth);

  const [
    loadListings,
    { data: listing, isLoading, isError, isSuccess, isFetching },
  ] = useLazyGetFavoritedListingsQuery();

  const [orderBy, setOrderBy] = useState("desc");

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrderBy(e.target.value);
  };

  useEffect(() => {
    if (auth.user) {
      loadListings({
        pageSize: 10,
        pageNumber: 1,
        orderBy,
      });
    }
  }, [auth.user, loadListings, orderBy]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <div className="flex flex-col gap-y-2">
        <h3 className="text-2xl font-semibold text-primaryText">
          My favorites
        </h3>
        <h4 className="text-lg text-gray-600">
          View and manage your favorites.
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
            listing?.data.map((property: any) => (
              <Link
                key={property?._id}
                to={`/listings/${property?._id}`}
                state={{
                  from: location.pathname,
                }}
              >
                <ListingCard {...property} />
              </Link>
            ))
          ) : (
            <h1>No listings found</h1>
          )}
        </div>
      </div>
    </motion.div>
  );
};
