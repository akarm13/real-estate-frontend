// SelectFilter.tsx
import { FilterItem } from "../../../components/filters/MobileFilter";
import { SelectButton } from "../../../components/filters/SelectButton";

type Props = {
  title: string;
  items: FilterItem[];
  selectedItems: any[];
  onItemSelected: (itemValue: any) => void;
};

export const SelectFilter: React.FC<Props> = ({
  title,
  items,
  selectedItems,
  onItemSelected,
}) => {
  return (
    <div className="">
      <div className="flex items-center">
        <h1 className="font-semibold text-primaryText">{title}</h1>
      </div>
      <div className="mt-4 grid grid-cols-2 flex-wrap items-center gap-y-3">
        {items.map((item, i) => (
          <SelectButton
            isSelected={selectedItems.includes(item.value)}
            onClick={() => onItemSelected(item.value)}
            key={item.value}
            className={getJoinedButtonClassName(i, items.length)}
          >
            {item.label}
          </SelectButton>
        ))}
      </div>
    </div>
  );
};

const getJoinedButtonClassName = (index: number, length: number) => {
  if (index === 0) {
    return "rounded-l-lg rounded-r-none";
  }
  if (index === length - 2) {
    return "rounded-r-none rounded-l-none";
  }
  if (index === length - 1) {
    return "rounded-r-lg border-l-0 rounded-l-none";
  }
  return "rounded-none border-l-0 focus:border-l";
};
