import { ClipLoader } from "react-spinners";

type Props = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "none";
  onClick?: () => void;
  className?: string;
  isLoading?: boolean;
  disabled?: boolean;
};
export const Button = ({
  onClick,
  children,
  variant,
  className,
  isLoading,
  disabled,
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
        className={`rounded-lg bg-primary-500 py-2 px-4 font-semibold text-white transition hover:bg-primary-600 md:py-2 md:px-4 disabled:pointer-events-none disabled:opacity-80 ${className} ${
          isLoading ? "pointer-events-none opacity-80" : ""
        } `}
        disabled={disabled}
      >
        {isLoading ? loader : children}
      </button>
    );
  }
  if (variant === "none") {
    return (
      <button
        onClick={onClick}
        className={`rounded-lg  bg-white py-2 px-4 text-secondaryText md:py-2 md:px-4 disabled:pointer-events-none disabled:opacity-80 ${className}`}
        disabled={disabled}
      >
        {isLoading ? loader : children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`rounded-lg  border  border-primary-background bg-white py-2 px-4 text-black md:py-2 md:px-4 md:hover:bg-gray-100 disabled:pointer-events-none disabled:opacity-80 ${className}`}
      disabled={disabled}
    >
      {isLoading ? loader : children}
    </button>
  );
};
