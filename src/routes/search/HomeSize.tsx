import { useMediaQuery } from "react-responsive";
import { queries } from "../../devices";
type Props = {
  onFirstInputChange?: (value: string) => void;
  onSecondInputChange?: (value: string) => void;
}
export const HomeSize = ({
  onFirstInputChange,
  onSecondInputChange,
}: Props) => {
  const isMedium = useMediaQuery({ query: queries.md });

  return (
    <div className="">
      <h1 className="mb-4 text-lg font-semibold break-words text-primary">
        <span>Home Size</span>
        <span className="text-base font-normal text-secondary ml-1">
          (m<sup>2</sup>)
        </span>
      </h1>
      <div className="flex flex-col gap-y-8">
        <div className="flex flex-col gap-y-4">
          <div className="flex items-center justify-between ">
            <select
              className="bg-white px-2 py-2 flex gap-x-3 text-gray-600 border-gray-300 w-28 rounded-lg outline-none"
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
              className="bg-white px-2 py-2 flex gap-x-3 w-28 text-gray-600 border-gray-300 rounded-lg outline-none items-center"
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
