import house from "../assets/house/1.jpg";

import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { PropertyStatus, PropertyType } from "../types/property";

type Props = {
  price: number;
  title: string;
  address: string;
  type: PropertyType;
  bedrooms: number;
  bathrooms: number;
  area: number;
  status: PropertyStatus;
};
export const ListingCard = ({
  price,
  address,
  area,
  bathrooms,
  bedrooms,
  status,
  title,
  type,
}: Props) => {
  return (
    <div className="w-[385px]  ">
      <img src={house} alt="house" className="h-[200px] w-full rounded-md" />
      <div className="flex flex-col gap-y-4 px-4 items-baseline bg-white border border-gray-300 py-6 rounded-md relative ">
        <span className="text-primary-500 font-semibold">${price}</span>
        <h3 className="text-[#120F33] font-semibold  ">{title}</h3>
        <p className="flex gap-x-2 p-0 m-0 items-center ">
          <HiOutlineLocationMarker className="text-primary-500" />{" "}
          <span className="text-secondaryText text-sm">{address}</span>
        </p>
        <span className="bg-primary-background text-primary-500 px-3 py-1 rounded-md capitalize">
          {type}
        </span>

        <hr className="w-4/5 mx-auto" />
        <div className="flex justify-between  w-full">
          <p className="flex gap-x-1 items-center text-[#7F7D8C]  text-sm">
            <span className="bg-primary-background text-primary-500 px-3 py-1 rounded-md">
              <AiOutlineHome />
            </span>
            {bedrooms} bd.
          </p>
          <p className="flex gap-x-1 items-center text-[#7F7D8C] text-sm">
            <span className="bg-primary-background text-primary-500 px-3 py-1 rounded-md">
              <AiOutlineHome />
            </span>
            {bathrooms} bth.
          </p>
          <p className="flex gap-x-1 items-center text-[#7F7D8C] text-sm">
            <span className="bg-primary-background text-primary-500 px-3 py-1 rounded-md">
              <AiOutlineHome />
            </span>
            {area} m<span className="text-xs align-super">2</span>
          </p>
        </div>
        <div className="absolute bg-primary-500 flex -top-7 -left-1 items-center gap-x-2 py-2 px-4 rounded-md">
          <AiOutlineStar color="white" fill="white" />
          <span className="text-white capitalize">{status}</span>
        </div>
      </div>
    </div>
  );
};
