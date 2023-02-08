import { ReactComponent as CheckMarkIcon } from "../../assets/icons/checkmark.svg";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  isSelected: boolean;
  onClick: () => void;
  children: React.ReactNode;
};
export const SelectButton = ({
  isSelected,
  onClick,
  children,
  className,
  ...props
}: Props) => {
  const selectedClass = isSelected
    ? "bg-primary-500 text-white"
    : "bg-white text-primaryText";
  return (
    <button
      className={`border-2 border-primary-background py-2 px-4 rounded-md ${selectedClass} ${className} pointer-events-auto cursor-pointer focus:outline-none focus:shadow-outline active:shadow-outline`}
      onClick={onClick}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};
