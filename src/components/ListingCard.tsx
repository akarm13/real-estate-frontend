import { Listing } from "../types/listing";
import { ReactComponent as StarFilled } from "../assets/icons/listing/star-filled.svg";
import { ReactComponent as StarOutline } from "../assets/icons/listing/star-outline.svg";
import { ReactComponent as AreaIcon } from "../assets/icons/listing/area.svg";
import { ReactComponent as BathroomIcon } from "../assets/icons/listing/bathroom.svg";
import { ReactComponent as BedroomIcon } from "../assets/icons/listing/bedroom.svg";
import { ReactComponent as FeaturedStarIcon } from "../assets/icons/listing/featured-star.svg";
import { ReactComponent as LocationIcon } from "../assets/icons/listing/location.svg";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./Tooltip";

export const ListingCard = ({
  price,
  location,
  area,
  rooms,
  status,
  title,
  type,
  images,
  isFavorited,
}: Listing) => {
  return (
    <div className="listing-card relative my-4 flex snap-center flex-col rounded-lg transition duration-200 lg:my-0">
      {/* Overlay */}

      <div className="overflow-hidden rounded-lg">
        <img
          src={images[0]}
          alt="house"
          className="h-[170px] w-full rounded-lg object-cover"
        />
      </div>

      {isFavorited !== undefined && isFavorited ? (
        <div className="absolute top-2 right-2 p-1 bg-primary-500 rounded-lg">
          <StarFilled
            width={18}
            height={18}
            className="fill-current text-primary-50"
          />
        </div>
      ) : null}

      <TypeBadge type={type} className="absolute top-0 left-0" />
      <div className="relative flex flex-col items-baseline gap-y-2 rounded-lg border border-primary-background bg-white px-5 py-6 ">
        <span className="text-lg font-bold text-primary-500">
          {type === "sale" ? `$${price}` : `$${price}/mo`}
        </span>
        <h3 className="text-md h-[60px] font-semibold text-primary-900 lg:text-lg">
          {title}
        </h3>
        <p className="m-0 flex items-center gap-x-2 p-0">
          <LocationIcon />
          <span className="lg:text-md text-sm text-secondaryText">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  {location.address.length > 20 ? (
                    <>
                      {location.address.substring(0, 30)}
                      <span className="text-primary-500">...</span>
                    </>
                  ) : (
                    location.address
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  {location.address}, {location.city}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </span>
        </p>

        <hr className="mx-auto my-2 w-full bg-primary-background" />
        <div className="mt-2 flex w-full justify-between gap-x-4 lg:gap-0">
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

        <div
          className={`absolute -top-7 -left-1 flex items-center gap-x-2 rounded-lg ${
            status === "featured" ? "bg-primary-500" : "bg-primary-50"
          } py-2 px-4`}
        >
          {status === "featured" ? (
            <FeaturedStarIcon width={16} height={16} fill="#FFF" />
          ) : null}
          <span
            className={`text-sm font-medium capitalize ${
              status === "featured" ? "text-white" : "text-gray-800"
            }`}
          >
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
    <div className="flex items-center gap-x-2 text-gray-600">
      <span className="rounded-lg text-primary-500">{icon}</span>
      <div className="flex items-center gap-x-1">
        <span className="text-sm md:text-base">{value} </span>
        <span className="text-sm md:text-base">{text}</span>
      </div>
    </div>
  );
};

export type TypeBadgeProps = {
  type: string;
  className?: string;
};
export const TypeBadge = ({ type, className }: TypeBadgeProps) => {
  return (
    <span className="inline-flex items-center gap-x-1.5 rounded-full px-2 py-1 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200 absolute left-2 bg-white top-2">
      <svg
        className={`h-1.5 w-1.5  ${
          type === "sale" ? "fill-green-500" : "fill-yellow-400"
        }`}
        viewBox="0 0 6 6"
        aria-hidden="true"
      >
        <circle cx={3} cy={3} r={3} />
      </svg>
      <span className="capitalize">{type}</span>
    </span>
  );
};
