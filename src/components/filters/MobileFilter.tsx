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
  { value: "houses", label: "Houses" },
  { value: "apartments", label: "Apartments" },
  { value: "villa", label: "Villa" },
  { value: "land", label: "Land" },
] as const;

const types = [
  { value: "sale", label: "Sale" },
  { value: "rent", label: "Rent" },
] as const;

// Create a price array with 50 items from 1k to 1M
const prices = new Array(50)
  .fill(0)
  .map((_, i) => ({
    value: i * 1000,
    label: `${i}k`,
  }))
  .reverse();

export const MobileFilter = () => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<ListingType[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<
    ListingCategory[]
  >([]);

  useState<ListingCategory>("all");
  const sheetRef = useRef<BottomSheetRef>();

  const onDismiss = () => {
    setIsFiltersOpen(false);
    if (sheetRef.current) {
      sheetRef.current.snapTo(0);
    }
  };

  const handleCategoryClick = (category: ListingCategory) => {
    // Push or remove from array
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prevSelectedCategories) =>
        prevSelectedCategories.filter((t) => t !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handleTypeClick = (type: ListingType) => {
    // Push or remove from array
    if (selectedTypes.includes(type)) {
      setSelectedTypes((prevSelectedTypes) =>
        prevSelectedTypes.filter((t) => t !== type)
      );
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  return (
    <div className="flex flex-col">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="flex h-10 w-full rounded-lg border border-primary-100 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 "
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
            className="w-full h-12 rounded-lg"
          >
            Search 891 results
          </Button>
        }
      >
        <div className="p-4">
          <div className="flex items-center">
            <h1 className="text-base font-semibold text-primaryText">Type</h1>
            <span className="text-gray-500 font-normal ml-2">
              (multiple selection)
            </span>
          </div>
          <div className="grid grid-cols-2 gap-x-2 gap-y-3 items-center mt-4">
            {types.map((type) => (
              <SelectButton
                isSelected={selectedTypes.includes(type.value)}
                onClick={() => handleTypeClick(type.value)}
              >
                {type.label}
              </SelectButton>
            ))}
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center">
            <h1 className="text-base font-semibold text-primaryText">
              Category
            </h1>
            <span className="text-gray-500 font-normal ml-2">
              (multiple selection)
            </span>
          </div>
          <div className="grid items-center mt-4 grid-cols-2 gap-x-2 flex-wrap gap-y-3">
            {categories.map((category) => (
              <SelectButton
                isSelected={selectedCategories.includes(category.value)}
                onClick={() => handleCategoryClick(category.value)}
              >
                {category.label}
              </SelectButton>
            ))}
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center">
            <label
              className="text-base font-semibold text-primaryText"
              htmlFor="minimumPrice"
            >
              Price
            </label>
          </div>
          <div className="grid items-center mt-4 grid-cols-1 grid-y-2">
            <div className="flex gap-x-2 gap-y-3 items-center">
              <select
                id="minimumPrice"
                className="bg-white border border-primary-background text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              >
                {prices.map((price) => (
                  <option value={price.value}>{price.label}</option>
                ))}
              </select>
              <span>-</span>
              <select
                id="countries"
                className="bg-white border border-primary-background text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 "
              >
                {prices.map((price) => (
                  <option value={price.value}>{price.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </BottomSheet>
    </div>
  );
};
