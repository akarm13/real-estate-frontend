import { useMediaQuery } from "react-responsive";
import { queries } from "../../devices";
import { useState } from "react";

type Props = {
  onInputHandle: (values: string[]) => void;
};
export const Type = ({ onInputHandle }: Props) => {
  const [, setSelectedTypes] = useState<string[]>([]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedTypes((prev) => {
        const updated = [...prev, value];
        onInputHandle(updated);
        return updated;
      });
    } else {
      setSelectedTypes((prev) => {
        const updated = prev.filter((item) => item !== value);
        onInputHandle(updated);
        return updated;
      });
    }
  };

  return (
    <div className="">
      <h1 className="mb-4 text-lg font-semibold capitalize text-primaryText">
        Type
      </h1>
      <ul className=" flex flex-col  gap-y-3 text-sm font-medium ">
        <li className="w-full ">
          <div className="flex items-center ">
            <input
              id="rent-checkbox"
              type="checkbox"
              value="rent"
              className="h-5 w-5 rounded border-0  bg-gray-100  text-primary-500 focus:ring-0 focus:ring-offset-0"
              onChange={(e) => onInputChange?.(e)}
            />
            <label
              htmlFor="rent-checkbox"
              className="ml-2  w-full text-base  font-normal text-primary-900"
            >
              Rent
            </label>
          </div>
        </li>

        <li className="w-full  ">
          <div className="flex items-center ">
            <input
              id="sale-checkbox"
              type="checkbox"
              value="sale"
              className="h-5 w-5 rounded border-0  bg-gray-100  text-primary-500 focus:ring-0 focus:ring-offset-0"
              onChange={(e) => onInputChange?.(e)}
            />
            <label
              htmlFor="sale-checkbox"
              className="ml-2  w-full text-base  font-normal text-primary-900"
            >
              Sale
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};
