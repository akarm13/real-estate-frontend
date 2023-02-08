type Props = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "none";
  onClick: () => void;
  className?: string;
};
export const Button = ({ onClick, children, variant, className }: Props) => {
  if (variant === "primary") {
    return (
      <button
        onClick={onClick}
        className={`bg-primary-500 hover:bg-primary-600 font-semibold text-white md:py-2 py-2 px-4 md:px-4 rounded-lg transition ${className}`}
      >
        {children}
      </button>
    );
  }
  if (variant === "none") {
    return (
      <button
        onClick={onClick}
        className={`bg-white  text-secondaryText py-2 px-4 md:py-2 md:px-4 rounded-lg ${className}`}
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`bg-white  text-black  border-2 border-primary-background md:hover:bg-gray-100 py-2 px-4 md:py-2 md:px-4 rounded-lg ${className}`}
    >
      {children}
    </button>
  );
};
