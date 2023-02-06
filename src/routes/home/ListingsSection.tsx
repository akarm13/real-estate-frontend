import { Link } from "react-router-dom";
import { ListingCard } from "../../components/ListingCard";
import { featuredProperties } from "../../dummyData";

export const ListingsSection = () => {
  return (
    <div className="w-5/6 md: mx-auto mt-24">
      <h1 className="font-semibold text-2xl md:text-3xl text-primary-900">
        Featured Listings
      </h1>
      <h4 className="text-secondaryText text-base md:text-xl font-semibold mt-2">
        Discover the best properties
      </h4>

      <div className="grid grid-cols-listing gap-x-4 flex-wrap gap-y-10 mt-16">
        {featuredProperties.map((property) => (
          <Link key={property.id} to={`/listings/${property.id}`}>
            <ListingCard {...property} />
          </Link>
        ))}
      </div>
    </div>
  );
};
