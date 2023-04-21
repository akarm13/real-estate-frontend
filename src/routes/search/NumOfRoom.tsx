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
      <div className="flex justify-between gap-y-8 md:flex-col">
        <div className="flex flex-col gap-y-2">
          <span className="w-full   text-base  font-medium  capitalize text-primaryText">
            Bedrooms
          </span>
          <div className="flex items-center justify-between ">
            <select
              className="flex w-28 gap-x-3 rounded-lg border-gray-300 bg-white px-2 py-2 text-gray-600 outline-none"
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
              className="flex w-28 items-center gap-x-3 rounded-lg border-gray-300 bg-white px-2 py-2 text-gray-600 outline-none"
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
          <span className="w-full   text-base  font-medium  capitalize text-primaryText">
            Bathroom
          </span>
          <div className="flex items-center justify-between ">
            <select
              className="flex w-28 gap-x-3 rounded-lg border-gray-300 bg-white px-2 py-2 text-gray-600 outline-none"
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
              className="flex w-28 items-center gap-x-3 rounded-lg border-gray-300 bg-white px-2 py-2 text-gray-600 outline-none"
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
