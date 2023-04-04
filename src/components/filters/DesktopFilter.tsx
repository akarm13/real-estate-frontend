import { Category } from "../../routes/search/Category";
import { NumOfRoom } from "../../routes/search/NumOfRoom";
import { HomeSize } from "../../routes/search/HomeSize";
import { Button } from "../Button";
import { PriceInput } from "./PriceInput";
import { Type } from "../../routes/search/TypeOfHouse";
import CreatableSelect from "react-select/creatable";
import { StylesConfig } from "react-select";
import makeAnimated from "react-select/animated";

export const DesktopFilter = () => {
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
  return (
    <div className="py-6 px-5 border-primary-background border-2 flex flex-col gap-y-6 rounded-lg">
      <Category />
      <Type />
      <hr />
      <PriceInput
        name="Price"
        containerClassName="mt-4"
        firstInputPlaceholder="Min Price"
        secondInputPlaceholder="Max Price"
        onFirstInputChange={(value) => console.log(value)}
        onSecondInputChange={(value) => console.log(value)}
      />
      <hr />
      <NumOfRoom />
      <hr />
      <HomeSize />
      <hr />

      <div className="p-1">
        <div className="flex items-center">
          <h1 className="text-base font-semibold text-primaryText flex flex-col">
            <span>Keyword</span>
            <span className="text-gray-500 font-normal text-sm mt-1">
              (Search by title, ameneties, etc.)
            </span>
          </h1>
        </div>
        <div className="grid items-center mt-4 flex-wrap ">
          {/* Put the dropdown list above */}
          <CreatableSelect
            options={[]}
            isMulti
            placeholder="Eg. Balcony, Swimming pool, etc."
            styles={colourStyles}
            components={{
              ...animatedComponents,
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
          />
        </div>
      </div>
      <hr />
      <Button onClick={() => console.log("login")} variant="primary">
        APPLY FILTERS
      </Button>
    </div>
  );
};
