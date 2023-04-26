import { useState } from "react";
import { PriceInput } from "../../../components/filters/PriceInput";

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
