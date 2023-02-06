import { useMediaQuery } from "react-responsive";
import { Button } from "../../components/Button";
import { ListingCard } from "../../components/ListingCard";
import { queries } from "../../devices";
import { Category } from "./Category";
import { HomeSize } from "./HomeSize";
import { InputSearch } from "./InputSearch";
import { NumOfRoom } from "./NumOfRoom";
import { RangePrice } from "./RangePrice";
import { Type } from "./Type";

import { Link } from "react-router-dom";
import { featuredProperties } from "../../dummyData";
import { MobileFilter } from "../../components/filters/MobileFilter";
import { DesktopFilter } from "../../components/filters/DesktopFilter";

export const Search = () => {
  return (
    <div className="mt-11 container">
      <div className="grid grid-cols-1 lg:grid-cols-search gap-x-8">
        <div className="hidden lg:block">
          <DesktopFilter />
        </div>
        <div className="lg:hidden">
          <MobileFilter />
        </div>
        <div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 md:gap-x-3 gap-y-3 pt-4 ">
          {featuredProperties.map((property) => (
            <Link key={property.id} to={`/listings/${property.id}`}>
              <ListingCard {...property} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
