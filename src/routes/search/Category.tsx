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
          <h1 className="mb-4 capitalize text-lg text-primaryText font-semibold">
            Category
          </h1>
          <ul className=" text-sm font-medium  flex gap-y-3 flex-col ">
            <li className="w-full ">
              <div className="flex items-center ">
                <input
                  id="house-checkbox"
                  type="checkbox"
                  value="house"
                  className="w-5 h-5 text-primary-500 bg-gray-100  border-0  rounded focus:ring-0 focus:ring-offset-0"
                  onChange={(e) => onInputChange?.(e)}
                />
                <label
                  htmlFor="house-checkbox"
                  className="w-full ml-2 text-base  text-primary-900 font-normal"
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
                  className="w-5 h-5 text-primary-500 bg-gray-100  border-0  rounded focus:ring-0 focus:ring-offset-0"
                  onChange={(e) => onInputChange?.(e)}
                />
                <label
                  htmlFor="apar-checkbox"
                  className="w-full ml-2 text-base  text-primary-900 font-normal"
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
                  className="w-5 h-5 text-primary-500 bg-gray-100  border-0  rounded focus:ring-0 focus:ring-offset-0"
                  onChange={(e) => onInputChange?.(e)}
                />
                <label
                  htmlFor="villa-checkbox"
                  className="w-full  ml-2 text-base  text-primary-900 font-normal"
                >
                  Villa
                </label>
              </div>
            </li>

            <li className="w-full  ">
              <div className="flex items-center ">
                <input
                  id="land-checkbox"
                  type="checkbox"
                  value="land"
                  name="land"
                  className="w-5 h-5 text-primary-500 bg-gray-100  border-0  rounded focus:ring-0 focus:ring-offset-0"
                  onChange={(e) => onInputChange?.(e)}
                />
                <label
                  htmlFor="land-checkbox"
                  className="w-full  ml-2 text-base  text-primary-900 font-normal"
                >
                  Land
                </label>
              </div>
            </li>
          </ul>
        </>
      ) : (
        <select
          className="bg-white px-2 w-36 py-2 flex gap-x-3 text-gray-600 border-gray-300 md:w-28 rounded-lg outline-none"
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
