import { Property } from "../types/property";
import { ListingCard } from "./ListingCard";

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

export const Listing = () => {
  return (
    <div className="max-w-7xl mx-auto pt-14">
      <h1 className="font-semibold text-2xl text-[#120F33]">
        Featured Listings
      </h1>
      <h4 className="text-secondaryText text-sm">
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
