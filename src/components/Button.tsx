type Props = {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "none";
  onClick: () => void;
};
export const Button = ({ onClick, children, variant }: Props) => {
  if (variant === "primary") {
    return (
      <button
        onClick={onClick}
        className="bg-primary-500 hover:bg-primary-600 text-white md:font-bold md:py-2 py-2 px-4 md:px-4 rounded transition"
      >
        {children}
      </button>
    );
  }
  if (variant === "none") {
    return (
      <button
        onClick={onClick}
        className="bg-white  text-secondaryText md:font-bold py-2 px-4 md:py-2 md:px-4 rounded-md"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="bg-white  text-black  border-2 border-primary-background md:hover:bg-gray-100 md:font-bold py-2 px-4 md:py-2 md:px-4 rounded-md"
    >
      {children}
    </button>
  );
};
