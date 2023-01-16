import { Property } from "../../types/property";
import { ListingCard } from "../../components/ListingCard";

export const featuredProperties: Property[] = [
  {
    address: "1234 Main Street",
    area: 1000,
    bathrooms: 2,
    bedrooms: 3,
    price: 1000000,
    status: "featured",
    title: "Beautiful Home",
    type: "sale",
  },
  {
    address: "1234 Main Street",
    area: 1000,
    bathrooms: 2,
    bedrooms: 3,
    price: 1000000,
    status: "featured",
    title: "Beautiful Home",
    type: "sale",
  },
  {
    address: "1234 Main Street",
    area: 1000,
    bathrooms: 2,
    bedrooms: 3,
    price: 1000000,
    status: "featured",
    title: "Beautiful Home",
    type: "sale",
  },
];

export const ListingsSection = () => {
  return (
    <div className="max-w-7xl mx-auto mt-24">
      <h1 className="font-semibold text-3xl text-primary-900">
        Featured Listings
      </h1>
      <h4 className="text-secondaryText text-xl font-semibold mt-2">
        Discover the best properties
      </h4>

      <div className="flex gap-x-14 flex-wrap gap-y-10 pt-10">
        {featuredProperties.map((property) => (
          <ListingCard {...property} />
        ))}
      </div>
    </div>
  );
};
