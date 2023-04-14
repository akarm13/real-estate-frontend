import { ClipLoader } from "react-spinners";

type Props = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "none";
  onClick: () => void;
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
    <div className="flex justify-center items-center">
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
        className={`bg-primary-500 hover:bg-primary-600 font-semibold text-white md:py-2 py-2 px-4 md:px-4 rounded-lg transition ${className} ${
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
        className={`bg-white  text-secondaryText py-2 px-4 md:py-2 md:px-4 rounded-lg ${className}`}
      >
        {isLoading ? loader : children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`bg-white  text-black  border-2 border-primary-background md:hover:bg-gray-100 py-2 px-4 md:py-2 md:px-4 rounded-lg ${className}`}
    >
      {isLoading ? loader : children}
    </button>
  );
};
