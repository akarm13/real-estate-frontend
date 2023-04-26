import React from "react";

type Props = {
  className?: string;
};

export const Skeleton: React.FC<Props> = ({ className }) => {
  return (
    <span
      className={`flex animate-pulse bg-gray-200 ${
        className ?? ""
      } rounded-[2px]`}
    ></span>
  );
};
