import { Link } from "react-router-dom";
import { ListingCard } from "../../components/ListingCard";
import { featuredProperties } from "../../dummyData";
import { useGetAllListingsQuery } from "../../api/endpoints/listings";
import { Listing } from "../../types/property";

export const ListingsSection = () => {
  const { data } = useGetAllListingsQuery()
  return (
    <div className="w-5/6 md: mx-auto mt-24">
      <h1 className="font-semibold text-2xl md:text-3xl text-primary-900">
        Featured Listings
      </h1>
      <h4 className="text-secondaryText text-base md:text-xl font-semibold mt-2">
        Discover the best properties
      </h4>

      <div className="lg:grid lg:grid-cols-listing lg:gap-x-4 lg:flex-wrap lg:gap-y-10 mt-16 flex gap-x-4   snap-x overflow-x-auto snap-proximity lg:snap-none">
        {featuredProperties.map((property) => (
          <Link key={property.id} to={`/listings/${property.id}`}>
            <ListingCard {...property} />
          </Link>
        ))}
      </div>
    </div>
  );
};
