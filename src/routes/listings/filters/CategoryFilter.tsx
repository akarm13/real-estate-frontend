import { SelectButton } from "../../../components/filters/SelectButton";
import {
  ListingCategory,
  categories,
} from "../../../components/filters/MobileFilter";
import { useState } from "react";

type CategoryFilterProps = {
  onCategoryChange?: (categories: ListingCategory[]) => void;
};

export const CategoryFilter = ({ onCategoryChange }: CategoryFilterProps) => {
  const [selectedCategories, setSelectedCategories] = useState<
    ListingCategory[]
  >([]);

  const handleCategoryClick = (category: ListingCategory) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prevSelectedCategories) =>
        prevSelectedCategories.filter((t) => t !== category)
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
    onCategoryChange?.(selectedCategories);
  };

  return (
    <div className="">
      <div className="flex flex-col">
        <h1 className="text-base font-semibold text-primaryText">Category</h1>
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
};
