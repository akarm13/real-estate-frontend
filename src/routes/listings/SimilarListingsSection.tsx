import { Link } from "react-router-dom";
import { ListingCard } from "../../components/ListingCard";

export const SimilarListingsSection = () => {
  return (
    <div className="mt-14 flex flex-col gap-4 ">
      <h2 className="text-2xl font-semibold">Similar Listings</h2>

      <div className="flex  snap-x snap-proximity  gap-x-4 overflow-x-auto pt-4 lg:grid lg:snap-none lg:grid-cols-4 lg:gap-x-7 ">
        {/* {similarListings.map((listing) => {
          return (
            <Link
              to={`/listings/${listing._id}`}
              key={listing._id}
              className="snap-center"
            >
              <ListingCard {...listing} key={listing._id} />
            </Link>
          );
        })} */}
        TODO Add Similar
      </div>
    </div>
  );
};
