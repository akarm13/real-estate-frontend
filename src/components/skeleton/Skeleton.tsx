import React from "react";

type Props = {
  className?: string;
};

export const Skeleton: React.FC<Props> = ({ className }) => {
  return <div className={`bg-gray-200 animate-pulse ${className ?? ""}`}></div>;
};
