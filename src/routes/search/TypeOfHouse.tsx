import { useMediaQuery } from "react-responsive";
import { queries } from "../../devices";

export const Type = () => {
  const isMedium = useMediaQuery({ query: queries.md });
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
              value=""
              className="w-5 h-5 text-primary-500 bg-gray-100  border-0  rounded focus:ring-0 focus:ring-offset-0"
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
              value=""
              className="w-5 h-5 text-primary-500 bg-gray-100  border-0  rounded focus:ring-0 focus:ring-offset-0"
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
