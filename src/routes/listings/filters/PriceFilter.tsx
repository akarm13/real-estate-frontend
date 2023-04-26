import { useState } from "react";
import { PriceInput } from "../../../components/filters/PriceInput";
import { X } from "lucide-react";

type Props = {
  onMinPriceChange: (minPrice: string) => void;
  onMaxPriceChange: (maxPrice: string) => void;
  minPriceValue: string;
  maxPriceValue: string;
};
export const PriceFilter = ({
  onMaxPriceChange,
  onMinPriceChange,
  minPriceValue,
  maxPriceValue,
}: Props) => {
  return (
    <div className="">
      <div className="flex items-center">
        <label
          className="font-semibold text-primaryText"
          htmlFor="minimumPrice"
        >
          Price
        </label>

        <button
          className="ml-auto flex items-center gap-x-1 text-gray-500 hover:text-primaryText transition-colors"
          onClick={() => {
            onMinPriceChange("");
            onMaxPriceChange("");
          }}
        >
          <span className="text-sm font-semibold">Clear</span>
          <X size={16} className="stroke-gray-500" />
        </button>
      </div>

      <PriceInput
        containerClassName="mt-4"
        minPricePlaceholder="Min Price"
        maxPricePlaceholder="Max Price"
        maxPriceValue={maxPriceValue}
        minPriceValue={minPriceValue}
        onMinPriceChange={(value) => onMinPriceChange(value)}
        onMaxPriceChange={(value) => onMaxPriceChange(value)}
      />
    </div>
  );
};
