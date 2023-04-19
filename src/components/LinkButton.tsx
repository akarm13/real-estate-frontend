import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "none";
  to: string;
  className?: string;
};

export const LinkButton = ({ to, children, variant, className }: Props) => {
  if (variant === "primary") {
    return (
      <Link
        to={to}
        className={`bg-primary-500 hover:bg-primary-600 font-semibold text-white md:py-2 py-2 px-4 md:px-4 rounded-lg transition flex items-center ${className}`}
      >
        {children}
      </Link>
    );
  }
  if (variant === "none") {
    return (
      <Link
        to={to}
        className={`bg-white text-secondaryText py-2 px-4 md:py-2 md:px-4 rounded-lg flex items-center ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      to={to}
      className={`bg-white text-black border-2 border-primary-background md:hover:bg-gray-100 py-2 px-4 md:py-2 md:px-4 rounded-lg flex items-center ${className}`}
    >
      {children}
    </Link>
  );
};
