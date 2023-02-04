import { useMediaQuery } from "react-responsive";
import { ReactComponent as SearchIcon } from "../../assets/icons/listing/search-gray.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/search/location.svg";
import { queries } from "../../devices";

export const InputSearch = () => {
  const isSmall = useMediaQuery({
    query: queries.sm,
  });
  return (
    <div className="flex justify-between items-center w-full">
      <div className="bg-searchBackground py-1 md:py-2 md: px-4 w-full mx-auto md:mx-0 lg:w-[700px] rounded-lg flex justify-between">
        {isSmall ? (
          <>
            <select className="bg-white text-black px-4 py-1 flex gap-x-4 w-32 text-lg border-none rounded-lg outline-none focus:ring-0 focus:ring-offset-0">
              <option className="capitalize" value="rent">
                Rent
              </option>
              <option className="capitalize" value="sale">
                Sale
              </option>
            </select>
            <input
              type="text"
              placeholder="City or address"
              className="text-center bg-transparent border-none focus:ring-0 focus:ring-offset-0"
            />
            <SearchIcon className="self-center" />
          </>
        ) : (
          <input
            type="text"
            placeholder="City or address"
            className=" bg-transparent w-11/12 border-none focus:ring-0 focus:ring-offset-0"
          />
        )}
      </div>

      {isSmall && (
        <div className="flex items-center border-primary-background  px-9 py-3 border-2 rounded-lg">
          <LocationIcon />
        </div>
      )}
    </div>
  );
};
