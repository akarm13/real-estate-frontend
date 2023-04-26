import { Search } from "lucide-react";

type Props = {
  value: string;
  onValueChange: (title: string) => void;
  className?: string;
  disabled?: boolean;
  placeholder?: string;
};

export const InputSearch = ({
  value,
  onValueChange,
  className,
  disabled,
  placeholder,
}: Props) => {
  return (
    <div
      className={`hidden mx-auto lg:flex w-full justify-between rounded-lg border border-primary-background bg-white px-4 md:mx-0 items-center focus-within:border-primary-color focus-within:ring-2 focus-within:ring-primary-500 ${className}`}
    >
      <Search className="stroke-gray-600" />
      <input
        type="text"
        placeholder={placeholder}
        className="border-none bg-transparent focus:ring-0 focus:ring-offset-0 w-full"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        disabled={disabled}
      />
    </div>
  );
};
