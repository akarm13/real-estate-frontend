import { ListingCard } from "../../components/ListingCard";

import { useState } from "react";
import { Link } from "react-router-dom";
import { DesktopFilter } from "../../components/filters/DesktopFilter";
import { MobileFilter } from "../../components/filters/MobileFilter";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/Select";
import { featuredProperties } from "../../dummyData";
import { ReactComponent as FilterIcon } from "../../assets/icons/search/filters.svg";
import { Button } from "../../components/Button";
const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "price", label: "Price" },
];

export const Search = () => {
  const [value, setValue] = useState(sortOptions[0].value);

  return (
    <div className="mt-11 container">
      <div className="grid grid-cols-1 lg:grid-cols-search gap-x-8">
        <div className="hidden lg:block">
          <DesktopFilter />
        </div>
        <div className="lg:hidden">
          <MobileFilter />
        </div>

        <div className="flex flex-col">
          <div className="flex justify-between items-center mt-4">
            <Button variant="secondary" onClick={() => console.log("hello")}>
              <div className="flex justify-center items-center">
                <FilterIcon
                  className="mr-2 text-gray-500"
                  width={16}
                  height={16}
                  fill="currentColor"
                />
                <span>Filters</span>
              </div>
            </Button>
            <Button variant="secondary" onClick={() => console.log("hello")}>
              Clear all
            </Button>
          </div>

          <div className="flex justify-between items-center mt-8 mb-4">
            <h1 className="text-xl font-bold">Results</h1>
            <div className="flex items-center">
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder={sortOptions[0].label} />
                </SelectTrigger>
                <SelectContent position="item-aligned">
                  {sortOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
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
    </div>
  );
};
