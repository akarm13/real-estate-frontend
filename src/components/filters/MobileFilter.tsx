import { ReactComponent as SearchIcon } from "../../assets/icons/listing/search.svg";
import { ReactComponent as FilterIcon } from "../../assets/icons/search/filters.svg";
import { Button } from "../../components/Button";
import { KeyboardEventHandler, useRef, useState } from "react";
import { BottomSheet, BottomSheetRef } from "react-spring-bottom-sheet";
import { PriceInput } from "./PriceInput";
import { SelectButton } from "./SelectButton";
import CreatableSelect from "react-select/creatable";
import makeAnimated from "react-select/animated";
import { StylesConfig } from "react-select";

import "react-spring-bottom-sheet/dist/style.css";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { removeUnusedQueryParams } from "../../utils/url";

export type FilterItem = {
  label: string;
  value: string | number;
};

export type ListingType = "sale" | "rent";
export type ListingCategory =
  | "houses"
  | "apartments"
  | "villa"
  | "land"
  | "all";

export const categories: FilterItem[] = [
  { value: "house", label: "Houses" },
  { value: "apartment", label: "Apartments" },
  { value: "villa", label: "Villa" },
  { value: "land", label: "Land" },
];

export type City = "Erbil" | "Slemani";

export const cities: FilterItem[] = [
  { value: "erbil", label: "Erbil" },
  { value: "slemani", label: "Slemani" },
];
export const types: FilterItem[] = [
  { value: "sale", label: "Sale" },
  { value: "rent", label: "Rent" },
];

export const sortOptions: FilterItem[] = [
  { value: "newest", label: "Newest" },
  { value: "oldest", label: "Oldest" },
  { value: "price", label: "Price" },
];

export const bedrooms: FilterItem[] = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 100, label: "5+" },
];

export const bathrooms: FilterItem[] = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 100, label: "5+" },
];

export const areas: FilterItem[] = [
  { value: 100, label: "100" },
  { value: 200, label: "200" },
  { value: 300, label: "300" },
  { value: 10_000, label: "300+" },
];

const animatedComponents = makeAnimated();

const colourStyles: StylesConfig = {
  control: (styles, { isFocused }) => ({
    ...styles,
    backgroundColor: "white",
    borderRadius: 8,
    minHeight: 40,
    borderColor: isFocused ? "#5B4DFF" : "#ECEBEF",
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      ...styles,
      backgroundColor: isFocused ? "rgba(91, 77, 255, 0.1)" : "white",
      color: isFocused ? "rgba(91, 77, 255, 1)" : "rgba(0, 0, 0, 0.8)",
    };
  },
  multiValue: (styles, { data }) => {
    return {
      ...styles,
      backgroundColor: "rgba(91, 77, 255, 0.1)",
      borderRadius: 8,
      padding: "4px 8px",
      height: 32,
      display: "flex",
      alignItems: "center",
    };
  },
  multiValueLabel: (styles, { data }) => ({
    ...styles,
    color: "rgba(91, 77, 255, 1)",
    fontWeight: 500,
  }),
  menu: (styles) => ({
    ...styles,
    borderRadius: 8,
    backgroundColor: "white",
  }),
};

type Props = {
  isLoading: boolean;
};

export const MobileFilter = (
  { title, setTitle }: any,
  { isLoading }: Props
) => {
  const [isFiltersOpen, setIsFiltersOpen] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<ListingType[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<
    ListingCategory[]
  >([]);

  const [selectedBedrooms, setSelectedBedrooms] = useState<number[]>([]);
  const [selectedBathrooms, setSelectedBathrooms] = useState<number[]>([]);
  const [selectedHomeSizes, setSelectedHomeSizes] = useState<number[]>([]);
  const [minPrice, setMinPrice] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
  const [inputValue, setInputValue] = useState<string>("");
  const [Keyword, setkeyword] = useState<string[]>([]);
  useState<ListingCategory>("all");
  const sheetRef = useRef<BottomSheetRef>();
  const location = useLocation();

  const navigate = useNavigate();
  const onDismiss = () => {
    setIsFiltersOpen(false);
    if (sheetRef.current) {
      sheetRef.current.snapTo(0);
    }
    const queryParams = {
      minPrice: minPrice?.toString(),
      maxPrice: maxPrice?.toString(),
      minBedrooms: selectedBedrooms.join(","),
      minBathrooms: selectedBathrooms.join(","),
      minHomeSize: selectedHomeSizes.join(","),
      category: selectedCategories.join(","),
      type: selectedTypes.join(","),
      keyword: Keyword.join(","),
    };

    // Construct the full URL with query parameters
    const fullUrl = queryString.stringifyUrl({
      url: "/search",
      query: queryParams,
    });

    // Remove unused query parameters
    const cleanUrl = removeUnusedQueryParams(fullUrl);

    console.log({
      cleanUrl,
    });

    // Navigate to the cleaned URL
    navigate(cleanUrl);
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

  const handleBedroomClick = (bedroom: number) => {
    // Make it so that it selects only one bedroom
    if (selectedBedrooms.includes(bedroom)) {
      setSelectedBedrooms([]);
    } else {
      setSelectedBedrooms([bedroom]);
    }
  };

  const handleBathroomClick = (bedroom: number) => {
    // Make it so that it selects only one bedroom
    if (selectedBathrooms.includes(bedroom)) {
      setSelectedBathrooms([]);
    } else {
      setSelectedBathrooms([bedroom]);
    }
  };

  const handleHomeSizeClick = (homeSize: number) => {
    if (selectedHomeSizes.includes(homeSize)) {
      setSelectedHomeSizes([]);
    } else {
      setSelectedHomeSizes([homeSize]);
    }
  };
  const handleKeyDown: KeyboardEventHandler = (event) => {
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        setkeyword((prev) => [...prev, inputValue]);
        setInputValue("");
        event.preventDefault();
    }
  };

  const hanldeValue = (newValue: any) => {
    const value = newValue.map((value: any) => value.value);
    setkeyword(value);
  };
  return (
    <div className="flex flex-col">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="flex h-10 w-full rounded-lg border border-primary-100 bg-transparent py-2 px-3 text-sm transition placeholder:text-slate-400 focus:border-primary-500 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <SearchIcon
          className="absolute top-3 right-3 text-gray-500"
          width={16}
          height={16}
        />
      </div>

      <div className="mt-4 flex items-center justify-between">
        <Button
          variant="secondary"
          onClick={() => {
            setIsFiltersOpen(true);
            if (sheetRef.current) {
              sheetRef.current.snapTo(({ maxHeight }) => maxHeight);
            }
          }}
        >
          <div className="flex items-center justify-center">
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

      <div className="mt-8 mb-4 flex items-center justify-between">
        <h1 className="text-xl font-bold">Results</h1>
        <div className="flex items-center">
          <select
            id="sort"
            className="rounded-lg border border-primary-100 text-sm transition focus:border-primary-400"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>
      <BottomSheet
        open={isFiltersOpen}
        onDismiss={() => setIsFiltersOpen(false)}
        maxHeight={650}
        footer={
          <Button
            onClick={onDismiss}
            variant="primary"
            className="h-12 w-full rounded-lg"
          >
            Search 891 results
          </Button>
        }
      >
        <div className="p-4 ">
          <div className="flex flex-col">
            <h1 className="text-base font-semibold text-primaryText ">Type</h1>
            <span className="mt-1 font-normal text-gray-500">
              (multiple selection)
            </span>
          </div>
          <div className="mt-4 grid grid-cols-2 items-center gap-x-2 gap-y-3">
            {types.map((type) => (
              <SelectButton
                isSelected={selectedTypes.includes(type.value as ListingType)}
                onClick={() => handleTypeClick(type.value as ListingType)}
                key={type.value}
              >
                {type.label}
              </SelectButton>
            ))}
          </div>
        </div>

        <div className="p-4">
          <div className="flex flex-col">
            <h1 className="flex flex-col text-base font-semibold text-primaryText">
              Category
            </h1>
            <span className="mt-1 font-normal text-gray-500">
              (multiple selection)
            </span>
          </div>
          <div className="mt-4 grid grid-cols-2 flex-wrap items-center gap-x-2 gap-y-3">
            {categories.map((category) => (
              <SelectButton
                isSelected={selectedCategories.includes(
                  category.value as ListingCategory
                )}
                onClick={() =>
                  handleCategoryClick(category.value as ListingCategory)
                }
                key={category.value}
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
          <PriceInput
            containerClassName="mt-4"
            minPricePlaceholder="Min Price"
            maxPricePlaceholder="Max Price"
            onMinPriceChange={(value) => setMinPrice(+value)}
            onMaxPriceChange={(value) => setMaxPrice(+value)}
          />
        </div>

        <div className="p-4">
          <div className="flex items-center">
            <h1 className="text-base font-semibold text-primaryText">
              Bedrooms
            </h1>
          </div>
          <div className="mt-4 grid grid-cols-6 flex-wrap items-center gap-y-3">
            {bedrooms.map((bedroom, i) => (
              <SelectButton
                isSelected={selectedBedrooms.includes(bedroom.value as number)}
                onClick={() => handleBedroomClick(bedroom.value as number)}
                key={bedroom.value}
                className={getJoinedButtonClassName(i, bedrooms.length)}
              >
                {bedroom.label}
              </SelectButton>
            ))}
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center">
            <h1 className="text-base font-semibold text-primaryText">
              Bathrooms
            </h1>
          </div>
          <div className="mt-4 grid grid-cols-6 flex-wrap items-center gap-y-3">
            {bathrooms.map((bathroom, i) => (
              <SelectButton
                isSelected={selectedBathrooms.includes(
                  bathroom.value as number
                )}
                onClick={() => handleBathroomClick(bathroom.value as number)}
                key={bathroom.value}
                className={getJoinedButtonClassName(i, bathrooms.length)}
              >
                {bathroom.label}
              </SelectButton>
            ))}
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center">
            <h1 className="text-base font-semibold text-primaryText">
              <span>Home Size</span>
              <span className="text-secondary ml-1 text-base font-normal">
                (m<sup>2</sup>)
              </span>
            </h1>
          </div>
          <div className="mt-4 grid grid-cols-4 flex-wrap items-center gap-y-3">
            {areas.map((homeSize, i) => (
              <SelectButton
                isSelected={selectedHomeSizes.includes(
                  homeSize.value as number
                )}
                onClick={() => handleHomeSizeClick(homeSize.value as number)}
                key={homeSize.value}
                className={getJoinedButtonClassName(i, areas.length)}
              >
                {homeSize.label}
              </SelectButton>
            ))}
          </div>
        </div>

        <div className="p-4">
          <div className="flex items-center">
            <h1 className="flex flex-col text-base font-semibold text-primaryText">
              <span>Keyword</span>
              <span className="mt-1 font-normal text-gray-500">
                (Search by title, ameneties, etc.)
              </span>
            </h1>
          </div>
          <div className="mt-4 mb-12 grid flex-wrap items-center">
            {/* Put the dropdown list above */}
            <CreatableSelect
              options={[]}
              isMulti
              placeholder="Eg. Balcony, Swimming pool, etc."
              styles={colourStyles}
              onChange={(newValue) => hanldeValue(newValue)}
              onInputChange={(newValue) => setInputValue(newValue)}
              onKeyDown={handleKeyDown}
              components={{
                ...animatedComponents,
                DropdownIndicator: () => null,
                IndicatorSeparator: () => null,
              }}
            />
          </div>
        </div>
      </BottomSheet>
    </div>
  );
};

const getJoinedButtonClassName = (index: number, length: number) => {
  if (index === 0) {
    return "rounded-l-lg rounded-r-none";
  }
  if (index === length - 2) {
    return "rounded-r-none rounded-l-none";
  }
  if (index === length - 1) {
    return "rounded-r-lg border-l-0 rounded-l-none";
  }
  return "rounded-none border-l-0 focus:border-l";
};
