import { useMediaQuery } from "react-responsive";
import { queries } from "../../devices";

export const HomeSize = () => {
  const isMedium = useMediaQuery({ query: queries.md });

  return (
    <div className="">
      {isMedium ? (
        <>
          <h1 className="mb-4 text-lg font-semibold break-words text-primary">
            Home Size{" "}
            <span className="text-base font-normal text-secondary">
              (m<sup>2</sup>)
            </span>
          </h1>
          <div className="flex flex-col gap-y-8">
            <div className="flex flex-col gap-y-4">
              <div className="flex items-center justify-between ">
                <select
                  className="bg-white px-2 py-2 flex gap-x-3 text-gray-600 border-gray-300 w-28 rounded-lg outline-none"
                  name=""
                  id=""
                >
                  <option value="">Min</option>
                  <option value="">100m</option>
                  <option value="">200m</option>
                  <option value="">300m</option>
                  <option value="">400m</option>
                  <option value="">500m</option>
                </select>
                <span>-</span>
                <select
                  className="bg-white px-2 py-2 flex gap-x-3 w-28 text-gray-600 border-gray-300 rounded-lg outline-none items-center"
                  name=""
                  id=""
                >
                  <option value="">Max</option>
                  <option value="">100m</option>
                  <option value="">200m</option>
                  <option value="">300m</option>
                  <option value="">400m</option>
                  <option value="">500m</option>
                </select>
              </div>
            </div>
          </div>
        </>
      ) : (
        <select
          className="bg-white px-2 w-36 py-2 flex gap-x-3 text-gray-600 border-gray-300 md:w-28 rounded-lg outline-none"
          name=""
          id=""
        >
          <option value="">Size Home</option>
          <option value="">1</option>
          <option value="">2</option>
          <option value="">3</option>
          <option value="">4</option>
          <option value="">5</option>
        </select>
      )}
    </div>
  );
};
