type Props = {
  children: React.ReactNode;
  variant: "primary" | "secondary";
  onClick: () => void;
};
export const Button = ({ onClick, children, variant }: Props) => {
  if (variant === "primary") {
    return (
      <button
        onClick={onClick}
        className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded"
      >
        {children}
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className="bg-white border-2 border-primary-background hover:bg-gray-100 font-bold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
};
