import { useState } from "react";
import {
  ListingCategory,
  bathrooms,
  bedrooms,
  categories,
  homeSizes,
  types,
} from "../../../components/filters/MobileFilter";
import { ListingType } from "../../../types/listing";
import { SelectButton } from "../../../components/filters/SelectButton";
import { PriceInput } from "../../../components/filters/PriceInput";
import { FilterItem } from "./Map";

type FiltersProps = {
  type: FilterItem;
  onTypeChange?: (types: ListingType[]) => void;
  onCategoryChange?: (categories: ListingCategory[]) => void;
  onBedroomsChange?: (bedrooms: number[]) => void;
  onBathroomsChange?: (bathrooms: number[]) => void;
  onHomeSizesChange?: (homeSizes: number[]) => void;
  onMinPriceChange?: (minPrice: number) => void;
  onMaxPriceChange?: (maxPrice: number) => void;
  onKeywordChange?: (keyword: string[]) => void;
};
export const Filters = ({ type }: FiltersProps) => {
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

  switch (type.value) {
    case "type":
      return (
        <div className="">
          <div className="flex flex-col">
            <h1 className="text-base font-semibold text-primaryText ">Type</h1>
            <span className="mt-1 font-normal text-gray-500">
              (multiple selection)
            </span>
          </div>
          <div className="mt-4 grid grid-cols-2 items-center gap-x-2 gap-y-3">
            {types.map((type) => (
              <SelectButton
                isSelected={selectedTypes.includes(type.value)}
                onClick={() => handleTypeClick(type.value)}
                key={type.value}
              >
                {type.label}
              </SelectButton>
            ))}
          </div>
        </div>
      );
    case "category":
      return (
        <div className="">
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
                isSelected={selectedCategories.includes(category.value)}
                onClick={() => handleCategoryClick(category.value)}
                key={category.value}
              >
                {category.label}
              </SelectButton>
            ))}
          </div>
        </div>
      );
    case "price":
      return (
        <div className="">
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
      );
    case "bedrooms":
      return (
        <div className="">
          <div className="flex items-center">
            <h1
              className="text-base font-semibold text-primaryText
"
            >
              Bedrooms
            </h1>
          </div>
          <div className="mt-4 grid grid-cols-6 flex-wrap items-center gap-y-3">
            {bedrooms.map((bedroom, i) => (
              <SelectButton
                isSelected={selectedBedrooms.includes(bedroom.value)}
                onClick={() => handleBedroomClick(bedroom.value)}
                key={bedroom.value}
                className={getJoinedButtonClassName(i, bedrooms.length)}
              >
                {bedroom.label}
              </SelectButton>
            ))}
          </div>
        </div>
      );
    case "bathrooms":
      return (
        <div className="">
          <div className="flex items-center">
            <h1 className="text-base font-semibold text-primaryText">
              Bathrooms
            </h1>
          </div>
          <div className="mt-4 grid grid-cols-6 flex-wrap items-center gap-y-3">
            {bathrooms.map((bathroom, i) => (
              <SelectButton
                isSelected={selectedBathrooms.includes(bathroom.value)}
                onClick={() => handleBathroomClick(bathroom.value)}
                key={bathroom.value}
                className={getJoinedButtonClassName(i, bathrooms.length)}
              >
                {bathroom.label}
              </SelectButton>
            ))}
          </div>
        </div>
      );
    case "area":
      return (
        <div className="">
          <div className="flex items-center">
            <h1 className="text-base font-semibold text-primaryText">
              <span>Home Size</span>
              <span className="text-secondary ml-1 text-base font-normal">
                (m<sup>2</sup>)
              </span>
            </h1>
          </div>
          <div className="mt-4 grid grid-cols-4 flex-wrap items-center gap-y-3">
            {homeSizes.map((homeSize, i) => (
              <SelectButton
                isSelected={selectedHomeSizes.includes(homeSize.value)}
                onClick={() => handleHomeSizeClick(homeSize.value)}
                key={homeSize.value}
                className={getJoinedButtonClassName(i, homeSizes.length)}
              >
                {homeSize.label}
              </SelectButton>
            ))}
          </div>
        </div>
      );
    default:
      return null;
  }
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
