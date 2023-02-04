import { Property } from "../../types/property";
import { ListingCard } from "../../components/ListingCard";
import { Link } from "react-router-dom";

export const featuredProperties: Property[] = [
  {
    id: "1",
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
    id: "2",
    address: "4321 Elm Street",
    area: 800,
    bathrooms: 1,
    bedrooms: 2,
    price: 600000,
    status: "new",
    title: "Cozy Apartment",
    type: "rent",
  },
  {
    id: "3",
    address: "5678 Oak Street",
    area: 1200,
    bathrooms: 3,
    bedrooms: 4,
    price: 1500000,
    status: "normal",
    title: "Luxurious Villa",
    type: "sale",
  },
  {
    id: "4",
    address: "8765 Pine Street",
    area: 1100,
    bathrooms: 2,
    bedrooms: 3,
    price: 900000,
    status: "featured",
    title: "Stunning Townhouse",
    type: "rent",
  },
  {
    id: "5",
    address: "2468 Maple Street",
    area: 1400,
    bathrooms: 3,
    bedrooms: 4,
    price: 2000000,
    status: "sold",
    title: "Exclusive Estate",
    type: "sale",
  },
  {
    id: "6",
    address: "3579 Birch Street",
    area: 900,
    bathrooms: 1,
    bedrooms: 2,
    price: 500000,
    status: "normal",
    title: "Affordable Condo",
    type: "rent",
  },
];

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
          <ListingCard {...property} key={property.id} />
        ))}
      </div>
    </div>
  );
};
