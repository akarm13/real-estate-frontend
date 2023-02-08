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

import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
import { useRef, useState } from "react";
import { SelectButton } from "./SelectButton";

type ListingType = "sale" | "rent";
type ListingCategory = "houses" | "apartments" | "villa" | "land" | "all";

const categories = [
  { value: "all", label: "All" },
  { value: "houses", label: "Houses" },
  { value: "apartments", label: "Apartments" },
  { value: "villa", label: "Villa" },
  { value: "land", label: "Land" },
] as const;

const types = [
  { value: "sale", label: "Sale" },
  { value: "rent", label: "Rent" },
] as const;

export const MobileFilter = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedType, setSelectedType] = useState<ListingType>("sale");
  const [selectedCategory, setSelectedCategory] =
    useState<ListingCategory>("all");
  const sheetRef = useRef<BottomSheetRef>();

  const onDismiss = () => {
    setIsFiltersOpen(false);
    if (sheetRef.current) {
      sheetRef.current.snapTo(0);
    }
  };
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
        <Button
          variant="secondary"
          onClick={() => {
            setIsFiltersOpen(true);
            if (sheetRef.current) {
              sheetRef.current.snapTo(({ maxHeight }) => maxHeight);
            }
          }}
        >
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
        footer={
          <Button
            onClick={onDismiss}
            variant="primary"
            className="w-full h-12 rounded-md"
          >
            Search 891 results
          </Button>
        }
      >
        <div className="p-4">
          <h1 className="text-base font-semibold text-primaryText">
            Property Type
          </h1>
          <div className="grid grid-cols-2 gap-x-2 gap-y-3 items-center mt-4">
            {types.map((type) => (
              <SelectButton
                isSelected={selectedType === type.value}
                onClick={() => setSelectedType(type.value)}
              >
                {type.label}
              </SelectButton>
            ))}
          </div>
        </div>

        <div className="p-4">
          <h1 className="text-base font-semibold text-primaryText">
            Property Category
          </h1>
          <div className="grid items-center mt-4 grid-cols-2 grid-rows-3 gap-x-2 flex-wrap gap-y-3">
            {categories.map((category) => (
              <SelectButton
                isSelected={selectedCategory === category.value}
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </SelectButton>
            ))}
          </div>
        </div>
      </BottomSheet>
    </div>
  );
};
