import { useMediaQuery } from "react-responsive";
import { queries } from "../../devices";
import { useState } from "react";

type Props = {
  onFirstBedInputChange?: (value: string) => void;
  onSecondBedInputChange?: (value: string) => void;
  onFirstBathInputChange?: (value: string) => void;
  onSecondBathInputChange?: (value: string) => void;
};
export const NumOfRoom = ({
  onFirstBathInputChange,
  onSecondBathInputChange,
  onFirstBedInputChange,
  onSecondBedInputChange,
}: Props) => {
  const isMedium = useMediaQuery({ query: queries.md });

  return (
    <div className="w-full">
      <div className="flex md:flex-col justify-between gap-y-8">
        <div className="flex flex-col gap-y-2">
          <span className="w-full   text-base  text-primaryText  font-medium capitalize">
            bedroom
          </span>
          <div className="flex items-center justify-between ">
            <select
              className="bg-white px-2 py-2 flex gap-x-3 text-gray-600 border-gray-300 w-28 rounded-lg outline-none"
              name=""
              id=""
              onChange={(e) => onFirstBedInputChange?.(e.target.value)}
            >
              <option value="">Min</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <span>-</span>
            <select
              className="bg-white px-2 py-2 flex gap-x-3 w-28 text-gray-600 border-gray-300 rounded-lg outline-none items-center"
              name=""
              id=""
              onChange={(e) => onSecondBedInputChange?.(e.target.value)}
            >
              <option value="">Min</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-y-4">
          <span className="w-full   text-base  text-primaryText  font-medium capitalize">
            Bathroom
          </span>
          <div className="flex items-center justify-between ">
            <select
              className="bg-white px-2 py-2 flex gap-x-3 w-28 text-gray-600 border-gray-300 rounded-lg outline-none"
              name=""
              id=""
              onChange={(e) => onFirstBathInputChange?.(e.target.value)}
            >
              <option value="">Min</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
            <span>-</span>
            <select
              className="bg-white px-2 py-2 flex gap-x-3 w-28 text-gray-600 border-gray-300 rounded-lg outline-none items-center"
              onChange={(e) => onSecondBathInputChange?.(e.target.value)}
            >
              <option value="n/a">Max</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
