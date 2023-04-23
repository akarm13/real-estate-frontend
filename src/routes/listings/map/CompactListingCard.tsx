import { Listing } from "../../../types/listing";
import { motion } from "framer-motion";
import { TypeBadge } from "../../../components/ListingCard";
import { PropertyDetail } from "../../../components/ListingCard";

import { ReactComponent as AreaIcon } from "../../../assets/icons/listing/area.svg";
import { ReactComponent as BathroomIcon } from "../../../assets/icons/listing/bathroom.svg";
import { ReactComponent as BedroomIcon } from "../../../assets/icons/listing/bedroom.svg";
import { ReactComponent as FeaturedStarIcon } from "../../../assets/icons/listing/featured-star.svg";
import { ReactComponent as LocationIcon } from "../../../assets/icons/listing/location.svg";
import { ReactComponent as ViewIcon } from "../../../assets/icons/right-caret.svg";
import { Link } from "react-router-dom";
type Props = {
  listing: Listing;
};
export const CompactListingCard = ({ listing }: Props) => {
  const fadeInUp = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.15,
      },
    },
  };
  return (
    <motion.div
      className="listing-card absolute bottom-full left-1/2 z-30 my-4 flex min-w-[260px] -translate-x-1/2 -translate-y-2 transform snap-center flex-col rounded-lg transition duration-200 lg:my-0"
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
    >
      <div className="overflow-hidden rounded-lg">
        <img
          src={listing?.images[0]}
          alt="house"
          className="h-[170px] w-full rounded-lg object-cover"
        />
      </div>
      <TypeBadge type={listing?.type} className="absolute top-2 left-4" />
      <div className="relative flex flex-col items-baseline gap-y-2 rounded-lg border border-primary-background bg-white px-5 py-6 ">
        <span className="text-lg font-bold text-primary-500">
          ${listing?.price}
        </span>

        <p className="m-0 flex items-center gap-x-2 p-0">
          <LocationIcon />
          <span className="lg:text-md text-sm text-secondaryText">
            {listing?.location.address + " " + listing?.location.city}
          </span>
        </p>

        <hr className="mx-auto my-2 w-full bg-primary-background" />
        <div className="mt-2 flex w-full justify-between gap-x-4 lg:gap-0">
          <PropertyDetail
            icon={<BedroomIcon />}
            value={listing?.rooms.bedrooms}
            text={""}
          />
          <PropertyDetail
            icon={<BathroomIcon />}
            value={listing?.rooms.bathrooms}
            text={""}
          />
          <PropertyDetail icon={<AreaIcon />} value={listing?.area} text={""} />
        </div>
        <div className="absolute -top-7 -left-1 flex items-center gap-x-2 rounded-lg bg-primary-500 py-2 px-4">
          <FeaturedStarIcon width={16} height={16} />
          <span className="text-sm font-semibold uppercase text-white">
            {listing?.status}
          </span>
        </div>
        <Link
          to={`/listings/${listing?._id}`}
          className="tranisition mt-8 flex items-center gap-x-2 hover:underline"
        >
          <ViewIcon className="h-5 w-5" />
          <span className="font-semibold text-primary-500">View agent</span>
        </Link>
      </div>
    </motion.div>
  );
};
