import { ReactComponent as SearchIcon } from "../../assets/icons/listing/search.svg";

export const MobileFilter = () => {
  return (
    <div className="flex flex-col">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="flex h-10 w-full rounded-md border border-primary-100 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 "
        />
        <SearchIcon
          className="absolute top-3 right-3 text-gray-500"
          width={16}
          height={16}
        />
      </div>
    </div>
  );
};
