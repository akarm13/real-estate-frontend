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
    ? "bg-primary-background text-primary-500"
    : "bg-white text-primaryText";
  return (
    <button
      className={`h-10 rounded-lg border border-primary-background py-2 px-4 ${selectedClass} ${className} focus:shadow-outline active:shadow-outline pointer-events-auto cursor-pointer focus:outline-none`}
      onClick={onClick}
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};
