// Filters.tsx
import { useEffect, useState } from "react";
import {
  FilterItem,
  ListingCategory,
  bathrooms,
  bedrooms,
  categories,
  areas,
  types,
} from "../../../components/filters/MobileFilter";
import { ListingType } from "../../../types/listing";
import { PriceFilter } from "../filters/PriceFilter";
import { SelectFilter } from "../filters/SelectFilter";

type FiltersProps = {
  type: FilterItem;
  selectedCategories: string[];
  selectedTypes: string[];
  selectedBedrooms: string[];
  selectedBathrooms: string[];
  selectedAreas: string[];
  minPrice: string | undefined;
  maxPrice: string | undefined;
  onCategoryClick: (category: string) => void;
  onTypeClick: (type: string) => void;
  onBedroomClick: (bedroom: string) => void;
  onBathroomClick: (bathroom: string) => void;
  onAreaClick: (area: string) => void;
  onMinPriceChange: (minPrice: string) => void;
  onMaxPriceChange: (maxPrice: string) => void;
  onClear: (key: string) => void;
};

export const Filters = ({
  type,
  selectedAreas,
  selectedBathrooms,
  selectedBedrooms,
  selectedCategories,
  selectedTypes,
  onAreaClick,
  onBathroomClick,
  onBedroomClick,
  onCategoryClick,
  onTypeClick,
  maxPrice,
  minPrice,
  onMaxPriceChange,
  onMinPriceChange,
  onClear,
}: FiltersProps) => {
  switch (type.value) {
    case "type":
      return (
        <SelectFilter
          title="Type"
          items={types}
          selectedItems={selectedTypes}
          onItemSelected={onTypeClick}
          onClear={onClear}
        />
      );
    case "category":
      return (
        <SelectFilter
          title="Categories"
          items={categories}
          selectedItems={selectedCategories}
          onItemSelected={onCategoryClick}
          onClear={onClear}
        />
      );
    case "price":
      return (
        <PriceFilter
          minPriceValue={minPrice || ""}
          maxPriceValue={maxPrice || ""}
          onMinPriceChange={onMinPriceChange}
          onMaxPriceChange={onMaxPriceChange}
        />
      );
    case "bedrooms":
      return (
        <SelectFilter
          title="Bedrooms"
          items={bedrooms}
          selectedItems={selectedBedrooms}
          onItemSelected={onBedroomClick}
          onClear={onClear}
        />
      );
    case "bathrooms":
      return (
        <SelectFilter
          title="Bathrooms"
          items={bathrooms}
          selectedItems={selectedBathrooms}
          onItemSelected={onBathroomClick}
          onClear={onClear}
        />
      );
    case "area":
      return (
        <SelectFilter
          title="Area"
          items={areas}
          selectedItems={selectedAreas}
          onItemSelected={onAreaClick}
          onClear={onClear}
        />
      );

    default:
      return null;
  }
};
