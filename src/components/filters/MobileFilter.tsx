import { ReactComponent as SearchIcon } from "../../assets/icons/listing/search.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/search/filters.svg";
import { Button } from "../../components/Button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../components/Select";
const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "price", label: "Price" },
];

import { BottomSheet } from "react-spring-bottom-sheet";
import { useState } from "react";

export const MobileFilter = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="flex h-10 w-full rounded-md border border-primary-100 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 "
        />
        <SearchIcon
          className="absolute top-3 right-3 text-gray-500"
          width={16}
          height={16}
        />
      </div>

      <div className="flex justify-between items-center mt-4">
        <Button variant="secondary" onClick={() => setIsFiltersOpen(true)}>
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
              <SelectValue placeholder={"All"} />
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
      <BottomSheet
        open={isFiltersOpen}
        onDismiss={() => setIsFiltersOpen(false)}
      >
        <div className="p-4">
          <h1 className="text-xl font-bold">Filters</h1>
        </div>

        <div className="p-4">
          <h1 className="text-lg font-bold">Price</h1>
        </div>

        <div className="p-4">
          <h1 className="text-lg font-bold">Bedrooms</h1>
        </div>

        <div className="p-4">
          <h1 className="text-lg font-bold">Bathrooms</h1>
        </div>

        <div className="p-4">
          <h1 className="text-lg font-bold">Property Type</h1>
        </div>

        <div className="p-4">
          <h1 className="text-lg font-bold">More Filters</h1>
        </div>
      </BottomSheet>
    </div>
  );
};
