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
        className={`flex items-center rounded-lg bg-primary-500 py-2 px-4 font-semibold text-white transition hover:bg-primary-600 md:py-2 md:px-4 ${className}`}
      >
        {children}
      </Link>
    );
  }
  if (variant === "none") {
    return (
      <Link
        to={to}
        className={`flex items-center rounded-lg bg-white py-2 px-4 text-secondaryText md:py-2 md:px-4 ${className}`}
      >
        {children}
      </Link>
    );
  }

  return (
    <Link
      to={to}
      className={`flex items-center rounded-lg border-2 border-primary-background bg-white py-2 px-4 text-black md:py-2 md:px-4 md:hover:bg-gray-100 ${className}`}
    >
      {children}
    </Link>
  );
};
