import { useGetAgentsQuery } from "../../api/endpoints/user";

import { User } from "../../types/auth";
import { AgentCard } from "./AgentCard";

export const Agents = () => {
  const { data, isLoading, isFetching, isError } = useGetAgentsQuery();

  return (
    <div className="container pt-24">
      <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
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
