import { DollarSign } from "lucide-react";

type Props = {
  containerClassName?: string;
  firstInputPlaceholder?: string;
  secondInputPlaceholder?: string;
  firstInputValue?: string;
  secondInputValue?: string;
  name?: string
  onFirstInputChange?: (value: string) => void;
  onSecondInputChange?: (value: string) => void;
};

export const PriceInput = ({
  containerClassName,
  firstInputPlaceholder,
  firstInputValue,
  onFirstInputChange,
  onSecondInputChange,
  secondInputPlaceholder,
  secondInputValue,
  name
}: Props) => {
  return (
    <div className="flex flex-col">
      <span className="w-full   text-base  text-primaryText  font-medium capitalize">{name}</span>
      <div className={`flex items-center gap-x-4 ${containerClassName}`}>
        <div className="relative flex">
          <div className="absolute left-0 top-0 h-full flex items-center justify-center bg-white-100 rounded-lg w-8 text-gray-700">
            <DollarSign size={16} stroke="currentColor" />
          </div>
          <input
            type="number"
            placeholder={firstInputPlaceholder}
            value={firstInputValue}
            onChange={(e) => onFirstInputChange?.(e.target.value)}
            className="flex h-10 w-full rounded-lg border border-primary-100 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 pl-8"
          />
        </div>
        <div className="relative flex">
          <div className="absolute left-0 top-0 h-full flex items-center justify-center bg-white-100 rounded-lg w-8 text-gray-700">
            <DollarSign size={16} stroke="currentColor" />
          </div>
          <input
            type="number"
            placeholder={secondInputPlaceholder}
            value={secondInputValue}
            onChange={(e) => onSecondInputChange?.(e.target.value)}
            className="flex h-10 w-full rounded-lg border border-primary-100 focus:priamry-500 bg-transparent py-2 px-3 text-sm placeholder:text-slate-400 focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 pl-8"
          />
        </div>
      </div>
    </div>
  );
};
