import { useMediaQuery } from "react-responsive";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { ListingCard } from "../../components/ListingCard";
import { queries } from "../../devices";
import { Property } from "../../types/property";
import { Category } from "./Category";
import { HomeSize } from "./HomeSize";
import { InputSearch } from "./InputSearch";
import { NumOfRoom } from "./NumOfRoom";
import { RangePrice } from "./RangePrice";
import { Type } from "./Type";


import {Link} from 'react-router-dom'

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
export const Search = () => {
  const isMedium = useMediaQuery({ query: queries.md });

  return (
    <div className="mt-11 container">
      <div className="grid grid-cols-1 md:grid-cols-search gap-x-8">
        {isMedium ? (
          <div className="py-8 px-5 border-primary-background border-2 flex flex-col gap-y-8 rounded-lg">
            <Category />
            <Type />
            <hr />
            <RangePrice />
            <hr />
            <NumOfRoom />
            <hr />
            <HomeSize />
            <hr />
            <Button onClick={() => console.log("login")} variant="primary">
              APPLY FILTERS
            </Button>
          </div>
        ) : (
          <InputSearch />
        )}

        <div className="">
          {/* top */}
          {isMedium ? (
            <InputSearch />
          ) : (
            <div className="flex flex-wrap gap-y-3 justify-between mt-5">
              <Category />
              <Type />
              <NumOfRoom />
              <HomeSize />
            </div>
          )}

{/* <<<<<<< HEAD */}
          <div className="">
            {/* top */}
            {isMedium ? (
              <InputSearch />
            ) : (
              <div className="flex flex-wrap gap-y-3 justify-between mt-5">
                <Category />
                <Type />
                <NumOfRoom />
                <HomeSize />
              </div>
            )}

            <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:gap-x-3 gap-y-3 pt-4 ">
              {featuredProperties.map((property) => (
                  <Link to={`/houses/${property.id}`}> 
                <ListingCard {...property} key={property.id} />
                </Link>
              ))}
            </div>
{/* ======= */}
          <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 md:gap-x-3 gap-y-3 pt-4 ">
            {featuredProperties.map((property) => (
              <ListingCard {...property} key={property.id} />
            ))}
{/* >>>>>>> db782115eb3de6ac963258e652dd888c8b3fd4df */}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
