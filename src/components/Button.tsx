import { ClipLoader } from "react-spinners";

type Props = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "none";
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
};
export const Button = ({
  onClick,
  children,
  variant,
  className,
  isLoading,
}: Props) => {
  const loader = (
    <div className="flex items-center justify-center">
      <span className="pr-2">Please wait...</span>
      <ClipLoader
        color={variant === "primary" ? "#FFF" : "#36d7b7"}
        aria-label="Loading Spinner"
        data-testid="loader"
        size={18}
      />
    </div>
  );

  if (variant === "primary") {
    return (
      <button
        onClick={onClick}
        className={`rounded-lg bg-primary-500 py-2 px-4 font-semibold text-white transition hover:bg-primary-600 md:py-2 md:px-4 ${className} ${
          isLoading ? "pointer-events-none opacity-80" : ""
        }`}
      >
        {isLoading ? loader : children}
      </button>
    );
  }
  if (variant === "none") {
    return (
      <button
        onClick={onClick}
        className={`rounded-lg  bg-white py-2 px-4 text-secondaryText md:py-2 md:px-4 ${className}`}
      >
        {isLoading ? loader : children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`rounded-lg  border-2  border-primary-background bg-white py-2 px-4 text-black md:py-2 md:px-4 md:hover:bg-gray-100 ${className}`}
    >
      {isLoading ? loader : children}
    </button>
  );
};
