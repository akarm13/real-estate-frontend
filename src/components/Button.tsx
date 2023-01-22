type Props = {
  children: React.ReactNode;
  variant: "primary" | "secondary" |"none";
  onClick: () => void;
};
export const Button = ({ onClick, children, variant }: Props) => {



  if (variant === "primary") {
    return (
      <button
        onClick={onClick}
        className="bg-primary-500 hover:bg-primary-600 text-white md:font-bold md:py-2 py-[5px] px-[10px] md:px-4 rounded"
      >
        {children}
      </button>
    );
  }
  if (variant === "none") {
    return (
      <button
        onClick={onClick}
        className="bg-white  text-white md:font-bold md:py-2 py-[5px] px-[10px] md:px-4 rounded"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="md:bg-white text-white md:text-black bg-primary-500 border-2 border-primary-background md:hover:bg-gray-100 md:font-bold md:py-2 md:px-4 py-[5px] px-[10px]  ml-5 md:ml-1 rounded"
    >
      {children}
    </button>
  );
};
