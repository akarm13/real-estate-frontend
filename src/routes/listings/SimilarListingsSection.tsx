import { ListingCard } from "../../components/ListingCard";
import { Link } from "react-router-dom";
import { featuredProperties } from "../../dummyData";

const similarListings = featuredProperties.slice(1, 5);

export const SimilarListingsSection = () => {
  return (
    <div className="flex flex-col gap-4 mt-14 ">
      <h2 className="text-2xl font-semibold">Similar Listings</h2>

      <div className="lg:grid  lg:grid-cols-4 lg:gap-x-7  pt-4 flex gap-x-4   snap-x overflow-x-auto snap-proximity lg:snap-none ">
        {similarListings.map((listing) => {
          return (
            <Link to={`/listings/${listing.id}`} key={listing.id}>
              <ListingCard {...listing} key={listing.id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
