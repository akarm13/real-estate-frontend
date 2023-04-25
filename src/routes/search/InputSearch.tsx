import { useMediaQuery } from "react-responsive";
import { ReactComponent as SearchIcon } from "../../assets/icons/listing/search-gray.svg";
import { queries } from "../../devices";

type Props = {
  title: string;
  setTitle: (title: string) => void;
  className?: string;
};

export const InputSearch = ({ title, setTitle, className }: Props) => {
  const isSmall = useMediaQuery({
    query: queries.sm,
  });

  return (
    <div
      className={`mx-auto flex w-full justify-between rounded-lg bg-searchBackground px-4 md:mx-0 ${className} h-12 items-center`}
    >
      {isSmall ? (
        <>
          <select className="flex w-32 gap-x-4 rounded-lg border-none bg-white px-4 py-1 text-black outline-none focus:ring-0 focus:ring-offset-0 shadow-dropdown h-8">
            <option className="capitalize" value="rent">
              Rent
            </option>
            <option className="capitalize" value="sale">
              Sale
            </option>
          </select>
          <input
            type="text"
            placeholder="Search by title..."
            className="border-none bg-transparent text-center focus:ring-0 focus:ring-offset-0 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <SearchIcon className="self-center" />
        </>
      ) : (
        <input
          type="text"
          placeholder="Search by title..."
          className="w-full border-none bg-transparent focus:ring-0 focus:ring-offset-0"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      )}
    </div>
  );
};
