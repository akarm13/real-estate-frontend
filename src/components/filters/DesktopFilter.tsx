import { Category } from "../../routes/search/Category";
import { NumOfRoom } from "../../routes/search/NumOfRoom";
import { HomeSize } from "../../routes/search/HomeSize";
import { Button } from "../Button";
import { PriceInput } from "./PriceInput";
import { Type } from "../../routes/search/TypeOfHouse";
import CreatableSelect from "react-select/creatable";
import { StylesConfig } from "react-select";
import makeAnimated from "react-select/animated";
import { KeyboardEventHandler, useState } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import queryString from "query-string";
import { removeUnusedQueryParams } from "../../utils/url";

type Props = {
  isLoading: boolean;
};

export const DesktopFilter = ({ isLoading }: Props) => {
  const [minPrice, setMinPrice] = useState<number>();
  const [maxPrice, setMaxPrice] = useState<number>();
  const [minBedrooms, setMinBedrooms] = useState<number>();
  const [maxBedrooms, setMaxBedrooms] = useState<number>();
  const [minBathrooms, setMinBathrooms] = useState<number>();
  const [maxBathrooms, setMaxBathrooms] = useState<number>();
  const [minArea, setMinArea] = useState<number>();
  const [maxArea, setMaxArea] = useState<number>();
  const [category, setCategory] = useState<string[]>([]);
  const [type, setType] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>("");
  const [Keyword, setkeyword] = useState<string[]>([]);

  const location = useLocation();

  const query = queryString.parse(location.search);

  const navigate = useNavigate();
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

  const animatedComponents = makeAnimated();

  const handleSearch = () => {
    console.log(Keyword);

    const queryParams = {
      minPrice: minPrice?.toString(),
      maxPrice: maxPrice?.toString(),
      minBedrooms: minBedrooms?.toString(),
      maxBedrooms: maxBedrooms?.toString(),
      minBathrooms: minBathrooms?.toString(),
      maxBathrooms: maxBathrooms?.toString(),
      minArea: minArea?.toString(),
      maxArea: maxArea?.toString(),
      buildingType: category.join(","),
      type: type.join(","),
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

  const handleValue = (newValue: any) => {
    const value = newValue.map((value: any) => value.value);
    setkeyword(value);
  };
  return (
    <div
      className={`flex flex-col gap-y-6 rounded-lg border-2 border-primary-background py-6 px-5 bg-white ${
        isLoading ? "pointer-events-none opacity-60" : ""
      }`}
    >
      <Category
        onInputHandle={(selectedCategories) => setCategory(selectedCategories)}
      />
      <Type onInputHandle={(selectedTypes) => setType(selectedTypes)} />
      <hr />
      <PriceInput
        name="Price"
        containerClassName="mt-4"
        minPricePlaceholder="Min Price"
        maxPricePlaceholder="Max Price"
        onMinPriceChange={(value) => setMinPrice(+value)}
        onMaxPriceChange={(value) => setMaxPrice(+value)}
      />
      <hr />
      <NumOfRoom
        onFirstBedInputChange={(value) => setMinBedrooms(+value)}
        onSecondBedInputChange={(value) => setMaxBedrooms(+value)}
        onFirstBathInputChange={(value) => setMinBathrooms(+value)}
        onSecondBathInputChange={(value) => setMaxBathrooms(+value)}
      />
      <hr />
      <HomeSize
        onFirstInputChange={(value) => setMinArea(+value)}
        onSecondInputChange={(value) => setMaxArea(+value)}
      />
      <hr />

      <div className="p-1">
        <div className="flex items-center">
          <h1 className="flex flex-col text-base font-semibold text-primaryText">
            <span>Keyword</span>
            <span className="mt-1 text-sm font-normal text-gray-500">
              (Search by title, ameneties, etc.)
            </span>
          </h1>
        </div>
        <div className="mt-4 grid flex-wrap items-center ">
          {/* Put the dropdown list above */}
          <CreatableSelect
            options={[]}
            isMulti
            placeholder="Eg. Balcony, Swimming pool, etc."
            styles={colourStyles}
            onChange={(newValue) => handleValue(newValue)}
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
      <hr />
      <Button onClick={handleSearch} variant="primary">
        APPLY FILTERS
      </Button>
    </div>
  );
};
