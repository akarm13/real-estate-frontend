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
      <h1 className="mb-4 capitalize text-lg text-primaryText font-semibold">
        Type
      </h1>
      <ul className=" text-sm font-medium  flex gap-y-3 flex-col ">
        <li className="w-full ">
          <div className="flex items-center ">
            <input
              id="rent-checkbox"
              type="checkbox"
              value="rent"
              className="w-5 h-5 text-primary-500 bg-gray-100  border-0  rounded focus:ring-0 focus:ring-offset-0"
              onChange={(e) => onInputChange?.(e)}
            />
            <label
              htmlFor="rent-checkbox"
              className="w-full  ml-2 text-base  text-primary-900 font-normal"
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
              className="w-5 h-5 text-primary-500 bg-gray-100  border-0  rounded focus:ring-0 focus:ring-offset-0"
              onChange={(e) => onInputChange?.(e)}
            />
            <label
              htmlFor="sale-checkbox"
              className="w-full  ml-2 text-base  text-primary-900 font-normal"
            >
              Sale
            </label>
          </div>
        </li>
      </ul>
    </div>
  );
};
