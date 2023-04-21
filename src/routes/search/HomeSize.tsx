import { useMediaQuery } from "react-responsive";
import { queries } from "../../devices";
type Props = {
  onFirstInputChange?: (value: string) => void;
  onSecondInputChange?: (value: string) => void;
};
export const HomeSize = ({
  onFirstInputChange,
  onSecondInputChange,
}: Props) => {
  const isMedium = useMediaQuery({ query: queries.md });

  return (
    <div className="">
      <h1 className="text-primary mb-4 break-words text-lg font-semibold">
        <span>Home Size</span>
        <span className="text-secondary ml-1 text-base font-normal">
          (m<sup>2</sup>)
        </span>
      </h1>
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center justify-between ">
            <select
              className="flex w-28 gap-x-3 rounded-lg border-gray-300 bg-white px-2 py-2 text-gray-600 outline-none"
              name=""
              id=""
              onChange={(e) => onFirstInputChange?.(e.target.value)}
            >
              <option value="">Min</option>
              <option value="100">100m</option>
              <option value="200">200m</option>
              <option value="300">300m</option>
              <option value="400">400m</option>
              <option value="500">500m</option>
            </select>
            <span>-</span>
            <select
              className="flex w-28 items-center gap-x-3 rounded-lg border-gray-300 bg-white px-2 py-2 text-gray-600 outline-none"
              name=""
              id=""
              onChange={(e) => onSecondInputChange?.(e.target.value)}
            >
              <option value="">Max</option>
              <option value="100">100m</option>
              <option value="200">200m</option>
              <option value="300">300m</option>
              <option value="400">400m</option>
              <option value="500">500m</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
