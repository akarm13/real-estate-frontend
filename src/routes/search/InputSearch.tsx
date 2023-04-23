import { useMediaQuery } from "react-responsive";
import { ReactComponent as SearchIcon } from "../../assets/icons/listing/search-gray.svg";
import { queries } from "../../devices";

export const InputSearch = ({ title, setTitle }: any) => {
  const isSmall = useMediaQuery({
    query: queries.sm,
  });

  return (
    <div className="mx-auto flex w-full justify-between rounded-lg bg-searchBackground py-1 px-4 md:mx-0 md:py-2">
      {isSmall ? (
        <>
          <select className="flex w-32 gap-x-4 rounded-lg border-none bg-white px-4 py-1 text-lg text-black outline-none focus:ring-0 focus:ring-offset-0">
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
            className="border-none bg-transparent text-center focus:ring-0 focus:ring-offset-0"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <SearchIcon className="self-center" />
        </>
      ) : (
        <input
          type="text"
          placeholder="City or address"
          className="w-full border-none bg-transparent focus:ring-0 focus:ring-offset-0"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      )}
    </div>
  );
};
