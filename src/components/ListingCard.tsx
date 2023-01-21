import house from "../assets/house/1.jpg";

import { AiOutlineStar } from "react-icons/ai";
import { PropertyStatus, PropertyType } from "../types/property";

import { ReactComponent as LocationIcon } from "../assets/icons/listing/location.svg";
import { ReactComponent as BedroomIcon } from "../assets/icons/listing/bedroom.svg";
import { ReactComponent as BathroomIcon } from "../assets/icons/listing/bathroom.svg";
import { ReactComponent as AreaIcon } from "../assets/icons/listing/area.svg";
import { ReactComponent as FeaturedStarIcon } from "../assets/icons/listing/featured-star.svg";

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
    <div className="max-w-[370px]   ">
      <img src={house} alt="house" className="h-[200px] w-full rounded-md" />
      <div className="flex flex-col gap-y-2 px-5 items-baseline bg-white border border-primary-background py-6 rounded-md relative ">
        <span className="text-primary-500 font-bold text-lg">${price}</span>
        <h3 className="text-primary-900 font-semibold text-xl">{title}</h3>
        <p className="flex gap-x-2 p-0 m-0 items-center mt-2">
          <LocationIcon />

          <span className="text-secondaryText">{address}</span>
        </p>
        <span className="bg-primary-background text-primary-500 px-4 py-2 rounded-md capitalize my-2">
          {type}
        </span>
        <hr className="w-full mx-auto my-2 bg-primary-background" />
        <div className="flex justify-between w-full mt-2">
          <PropertyDetail
            icon={<BedroomIcon />}
            value={bedrooms}
            text={"bd."}
          />
          <PropertyDetail
            icon={<BathroomIcon />}
            value={bathrooms}
            text={"bth."}
          />
          <PropertyDetail icon={<AreaIcon />} value={area} text={"m²"} />
        </div>
        <div className="absolute bg-primary-500 flex -top-7 -left-1 items-center gap-x-2 py-2 px-4 rounded-md">
          <FeaturedStarIcon width={16} height={16} />
          <span className="text-white uppercase text-sm font-semibold">
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

type PropertyDetailProps = {
  icon: React.ReactNode;
  value: number;
  text: string | React.ReactNode;
};
export const PropertyDetail = ({ icon, value, text }: PropertyDetailProps) => {
  return (
    <div className="flex gap-x-1 items-center text-gray-600">
      <span className="bg-primary-background text-primary-500 p-2 rounded-md">
        {icon}
      </span>
      {value} <span className="hidden md:block">{text}</span>
    </div>
  );
};
