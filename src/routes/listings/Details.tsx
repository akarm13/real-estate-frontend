import { Link, useParams } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../assets/housedetail/back.svg";
import { ReactComponent as FeaturedStarIcon } from "../../assets/icons/listing/star.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/search/location.svg";
import { featuredProperties } from "../search/Search";
import { AmenitiesSection } from "./AmenitiesSection";
import { HouseGallery } from "./HouseGallery";
import { SummarySection } from "./SummarySection";
import { MapSection } from "./MapSection";
import { SimilarListingsSection } from "./SimilarListingsSection";

export const Details = () => {
  const { houseId } = useParams();

  const houses = featuredProperties.find((house) => house.id === houseId);

  return (
    <div className="w-full">
      <div className="flex flex-col w-full mx-auto px-36 py-12">
        <div>
          <Link className="flex  items-center	" to="/search">
            <BackIcon />
            <p className="text-sm font-semibold text-primary-400 font-sans ml-2">
              Back to map
            </p>
          </Link>
        </div>

        <div className="w-full flex justify-between items-center  pt-10">
          <h3 className="font-semibold text-3xl font-sans">
            A nice house for sale in Aqary
          </h3>

          <div className="flex mr-14">
            <div className="flex items-center justify-between border-primary-background mr-4 px-5 py-3 border-2 rounded-lg">
              <LocationIcon />
              <span className="font-semibold text-base mx-2">Share</span>
            </div>

            <div className="flex items-center justify-between border-primary-background  px-5 py-3  border-2 rounded-lg">
              <FeaturedStarIcon />
              <span className="font-semibold text-base mx-2">Share</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-secondaryText text-xl font-medium font-sans">
            {houses?.address}
          </p>
        </div>

        <HouseGallery />
        <SummarySection />
        <AmenitiesSection />
        <MapSection />
        <SimilarListingsSection />
      </div>
    </div>
  );
};
