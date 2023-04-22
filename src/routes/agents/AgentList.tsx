import { User } from "../../types/auth";
import { AgentCard } from "./AgentCard";
import { NoAgentsFound } from "./NotAgentsFound";

export const AgentList = ({ agents }: { agents: User[] }) => {
  if (agents.length === 0) {
    return <NoAgentsFound />;
  }

  return (
    <div className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
      {agents.map((agent: User) => (
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
  );
};
