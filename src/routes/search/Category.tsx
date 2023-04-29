import { useMediaQuery } from "react-responsive";
import { queries } from "../../devices";
import { useState } from "react";

type Props = {
  onInputHandle: (values: string[]) => void;
};

export const Category = ({ onInputHandle }: Props) => {
  const isMedium = useMediaQuery({ query: queries.md });
  const [, setSelectedCategories] = useState<string[]>([]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const isChecked = e.target.checked;

    if (isChecked) {
      setSelectedCategories((prev) => {
        const updated = [...prev, value];
        onInputHandle(updated);
        return updated;
      });
    } else {
      setSelectedCategories((prev) => {
        const updated = prev.filter((item) => item !== value);
        onInputHandle(updated);
        return updated;
      });
    }
  };

  return (
    <div className="">
      {isMedium ? (
        <>
          <h1 className="mb-4 text-lg font-semibold capitalize text-primaryText">
            Category
          </h1>
          <ul className=" flex flex-col  gap-y-3 text-sm font-medium ">
            <li className="w-full ">
              <div className="flex items-center ">
                <input
                  id="house-checkbox"
                  type="checkbox"
                  value="house"
                  className="h-5 w-5 rounded border-0  bg-gray-100  text-primary-500 focus:ring-0 focus:ring-offset-0"
                  onChange={(e) => onInputChange?.(e)}
                />
                <label
                  htmlFor="house-checkbox"
                  className="ml-2 w-full text-base  font-normal text-primary-900"
                >
                  Houses
                </label>
              </div>
            </li>

            <li className="w-full  ">
              <div className="flex items-center ">
                <input
                  id="apar-checkbox"
                  type="checkbox"
                  value="apartment"
                  className="h-5 w-5 rounded border-0  bg-gray-100  text-primary-500 focus:ring-0 focus:ring-offset-0"
                  onChange={(e) => onInputChange?.(e)}
                />
                <label
                  htmlFor="apar-checkbox"
                  className="ml-2 w-full text-base  font-normal text-primary-900"
                >
                  Apartments
                </label>
              </div>
            </li>

            <li className="w-full  ">
              <div className="flex items-center ">
                <input
                  id="villa-checkbox"
                  type="checkbox"
                  value="villa"
                  className="h-5 w-5 rounded border-0  bg-gray-100  text-primary-500 focus:ring-0 focus:ring-offset-0"
                  onChange={(e) => onInputChange?.(e)}
                />
                <label
                  htmlFor="villa-checkbox"
                  className="ml-2  w-full text-base  font-normal text-primary-900"
                >
                  Villa
                </label>
              </div>
            </li>
          </ul>
        </>
      ) : (
        <select
          className="flex w-36 gap-x-3 rounded-lg border-gray-300 bg-white px-2 py-2 text-gray-600 outline-none md:w-28"
          name=""
          id=""
        >
          <option value="">Category</option>
          <option value="">Houses</option>
          <option value="">Apartments</option>
          <option value="">Villa</option>
          <option value="">Land</option>
        </select>
      )}
    </div>
  );
};
