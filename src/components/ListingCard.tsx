import { Listing } from "../types/listing";

import { ReactComponent as AreaIcon } from "../assets/icons/listing/area.svg";
import { ReactComponent as BathroomIcon } from "../assets/icons/listing/bathroom.svg";
import { ReactComponent as BedroomIcon } from "../assets/icons/listing/bedroom.svg";
import { ReactComponent as FeaturedStarIcon } from "../assets/icons/listing/featured-star.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/listing/location.svg";

export const ListingCard = ({
  price,
  location,
  area,
  rooms,
  status,
  title,
  type,
  images,
}: Listing) => {
  // If type is sale then "bg-primary-800 text-white" else "bg-primary-200 text-primary-800"
  const typeColor =
    type === "sale"
      ? "bg-primary-800 text-primary-100"
      : "bg-primary-100 text-primary-800";

  return (
    <div className="flex flex-col transition duration-200 relative z-0 listing-card rounded-lg snap-center my-4 lg:my-0">
      <div className="overflow-hidden rounded-lg">
        <img
          src={images[0]}
          alt="house"
          className="h-[170px] w-full rounded-lg object-cover"
        />
      </div>
      <span
        className={`absolute left-2 px-4 py-2 rounded-lg uppercase my-2 font-medium ${typeColor} text-sm`}
      >
        {type}
      </span>
      <div className="flex flex-col gap-y-2 px-5 items-baseline bg-white border border-primary-background py-6 rounded-lg relative ">
        <span className="text-primary-500 font-bold text-lg">${price}</span>
        <h3 className="text-primary-900 font-semibold text-md lg:text-lg h-[60px]">
          {title}
        </h3>
        <p className="flex gap-x-2 p-0 m-0 items-center">
          <LocationIcon />
          <span className="text-secondaryText text-sm lg:text-md">
            {location.address + " " + location.city}
          </span>
        </p>

        <hr className="w-full mx-auto my-2 bg-primary-background" />
        <div className="flex justify-between w-full mt-2 gap-x-4 lg:gap-0">
          <PropertyDetail
            icon={<BedroomIcon />}
            value={rooms.bedrooms}
            text={"bd."}
          />
          <PropertyDetail
            icon={<BathroomIcon />}
            value={rooms.bathrooms}
            text={"bth."}
          />
          <PropertyDetail icon={<AreaIcon />} value={area} text={"m²"} />
        </div>
        <div className="absolute bg-primary-500 flex -top-7 -left-1 items-center gap-x-2 py-2 px-4 rounded-lg">
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
    <div className="flex gap-x-2 items-center text-gray-600">
      <span className="text-primary-500 rounded-lg">{icon}</span>
      <div className="flex items-center gap-x-1">
        <span className="text-sm md:text-base">{value} </span>
        <span className="text-sm md:text-base">{text}</span>
      </div>
    </div>
  );
};
