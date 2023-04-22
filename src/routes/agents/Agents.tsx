import { SearchIcon } from "lucide-react";
import { useGetAgentsQuery } from "../../api/endpoints/user";

import { User } from "../../types/auth";
import { AgentCard } from "./AgentCard";

export const Agents = () => {
  const { data, isLoading, isFetching, isError } = useGetAgentsQuery();

  return (
    <div className="container pt-24">
      <h1 className="my-8 text-3xl font-semibold text-primaryText">Agents</h1>

      <div className="mb-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <p className="order-2 mt-8 md:order-none md:mt-0">
          <span className="text-primaryText">Showing</span> 1-10 of 100
        </p>
        <div className="flex-2 flex flex-col items-center gap-x-4 gap-y-4 md:flex-row">
          <select className="h-10 w-full min-w-[120px] rounded-lg border border-primary-100 bg-transparent px-3 text-slate-400 focus:outline-none">
            <option value="">Sort by</option>
            <option value="all">All</option>
            <option value="verified">Verified</option>
            <option value="unverified">Unverified</option>
          </select>
          <div className="relative flex w-full items-center gap-x-2">
            <SearchIcon size={20} className="absolute left-3 stroke-gray-600" />
            <input
              className="flex h-10  w-full rounded-lg border border-primary-100 bg-transparent py-2 px-3 pl-10 placeholder:text-slate-400 focus:outline-none  disabled:cursor-not-allowed disabled:opacity-50 md:min-w-[350px]"
              placeholder="Search by name, email, phone"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
        {data?.data?.map((agent: User) => (
          <AgentCard
            key={agent._id}
            id={agent._id}
            fullName={agent.fullName}
            email={agent.email}
            phone={agent.phone}
            avatar={agent.avatar}
            isVerified={agent.isVerified}
          />
        ))}
      </div>
    </div>
  );
};
