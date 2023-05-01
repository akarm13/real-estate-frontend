import { motion } from "framer-motion";
import { ListingCard } from "../../components/ListingCard";
import {
  useGetListingByIdQuery,
  useLazyGetListingsByAgentQuery,
} from "../../api/endpoints/listings";
import { useSelector } from "react-redux";
import { selectAuth } from "../../store/slices/auth";
import { useEffect } from "react";
import SkeletonListingCard from "../../components/skeleton/SkeletonListingCard";
import { Link } from "react-router-dom";

export const MyListings = () => {
  const auth = useSelector(selectAuth);

  const [
    loadListings,
    { data: listing, isLoading, isError, isSuccess, isFetching },
  ] = useLazyGetListingsByAgentQuery();

  useEffect(() => {
    if (auth.user) {
      loadListings({
        id: auth.user._id,
        pageSize: 10,
        pageNumber: 1,
        orderBy: "desc",
      });
    }
  }, [auth.user, loadListings]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <div className="flex flex-col gap-y-2">
        <h3 className="text-2xl font-semibold text-primaryText">My Listings</h3>
        <h4 className="text-lg text-gray-600">
          View and manage your listings.
        </h4>
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
    </motion.div>
  );
};
