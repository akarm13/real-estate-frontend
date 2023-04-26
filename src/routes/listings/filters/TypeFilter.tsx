import { ListingType } from "../../../types/listing";
import { SelectButton } from "../../../components/filters/SelectButton";
import { types } from "../../../components/filters/MobileFilter";
import { useState } from "react";

type TypeFilterProps = {
  onTypeChange?: (types: ListingType[]) => void;
};

export const TypeFilter = ({ onTypeChange }: TypeFilterProps) => {
  const [selectedTypes, setSelectedTypes] = useState<ListingType[]>([]);

  const handleTypeClick = (type: ListingType) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes((prevSelectedTypes) =>
        prevSelectedTypes.filter((t) => t !== type)
      );
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
    onTypeChange?.(selectedTypes);
  };

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
};
