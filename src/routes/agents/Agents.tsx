import { SearchIcon } from "lucide-react";
import { useGetAgentsQuery } from "../../api/endpoints/user";

import { useState } from "react";
import { useDebounce } from "use-debounce";
import { Skeleton } from "../../components/skeleton/Skeleton";
import { AgentList } from "./AgentList";
import { LoadingSkeleton } from "./LoadingSkeleton";

export const Agents = () => {
  const [search, setSearch] = useState("");
  const [searchDebounced] = useDebounce(search, 500);
  const [status, setStatus] = useState("");

  const { data, isLoading, isFetching, isError } = useGetAgentsQuery(
    { search: searchDebounced, verificationStatus: status },
    { refetchOnMountOrArgChange: true }
  );

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatus(e.target.value);
  };

  const isSearching = isLoading || isFetching;

  return (
    <div className="container pt-24">
      <h1 className="my-8 text-3xl font-semibold text-primaryText">Agents</h1>

      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <p className="order-2 mt-8 md:order-none md:mt-0">
          {isLoading || isFetching ? (
            <Skeleton className="h-4 w-20" />
          ) : (
            <span className="text-primaryText">
              {data?.data?.length} agents found
            </span>
          )}
        </p>
        <div className="flex-2 flex flex-col items-center gap-x-4 gap-y-4 md:flex-row">
          <select
            className={`h-10 w-full min-w-[120px] rounded-lg border border-primary-100 bg-transparent px-3  focus:outline-none disabled:cursor-not-allowed disabled:opacity-50`}
            value={status}
            onChange={handleStatusChange}
            disabled={isLoading || isFetching}
          >
            <option value="" disabled>
              Status
            </option>
            <option value="all">All</option>
            <option value="verified">Verified</option>
            <option value="unverified">Unverified</option>
          </select>
          <div className="relative flex w-full items-center gap-x-2">
            <SearchIcon size={20} className="absolute left-3 stroke-gray-600" />
            <input
              className="flex h-10  w-full rounded-lg border border-primary-100 bg-transparent py-2 px-3 pl-10 placeholder:text-slate-400 focus:outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:min-w-[350px]"
              placeholder="Search by name, email, phone"
              value={search}
              onChange={handleSearchChange}
              disabled={isLoading || isFetching}
            />
          </div>
        </div>
      </div>

      {isSearching ? (
        <LoadingSkeleton />
      ) : (
        <AgentList agents={data?.data || []} />
      )}
    </div>
  );
};
