import { Link, useParams } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../assets/housedetail/back.svg";
import { ReactComponent as FeaturedStarIcon } from "../../assets/icons/listing/star.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/search/location.svg";
import { AmenitiesSection } from "./AmenitiesSection";
import { HouseGallery } from "./HouseGallery";
import { SummarySection } from "./SummarySection";
import { MapSection } from "./MapSection";
import { SimilarListingsSection } from "./SimilarListingsSection";
import { featuredProperties } from "../../dummyData";
import { useGetListingByIdQuery } from "../../api/endpoints/listings";
import { Listing, ListingIdRequest } from "../../types/listing";

export const Details = () => {
  const { houseId } = useParams<ListingIdRequest>();





  const { data, isLoading, isError } = useGetListingByIdQuery(houseId);




  return (
    <div className="w-full">
      <div className="flex flex-col w-full mx-auto px-5 lg:px-36 py-12">
        <div>
          <Link className="flex  items-center	" to="/search">
            <BackIcon />
            <p className="lg:text-sm text-xs font-semibold text-primary-400 font-sans ml-2">
              Back to map
            </p>
          </Link>
        </div>

        <div className=" flex lg:w-full   justify-between items-center  pt-10">
          <h3 className="font-semibold  text-sm md:text-lg lg:text-3xl font-sans">
            {data?.title}
          </h3>

          <div className="flex  lg:mr-14">
            <div className="flex items-center justify-between border-primary-background mr-1 lg:mr-4 px-1 py-1 lg:px-5 lg:py-3 border-2 rounded-lg">
              <LocationIcon width={17} />
              <span className="font-semibold text-xs lg:text-base mx-1 md:mx-2">Share</span>
            </div>

            <div className="flex items-center justify-between border-primary-background px-1 py-1  lg:px-5 lg:py-3  border-2 rounded-lg">
              <FeaturedStarIcon width={17} />
              <span className="font-semibold text-xs lg:text-base mx-1 md:mx-2">Favorite</span>
            </div>
          </div>
        </div>

        <div className="mt-4">
          <p className="text-secondaryText md:text-base text-sm lg:text-xl font-medium font-sans">
            {data?.location.address + ' ' + data?.location.city}
          </p>
        </div>

        <HouseGallery data={data} />
        <SummarySection data={data} />
        <AmenitiesSection data={data} />
        <MapSection />
        {/* <SimilarListingsSection /> */}
      </div>
    </div>
  );
};
