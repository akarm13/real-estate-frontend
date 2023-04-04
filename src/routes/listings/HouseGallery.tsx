import Image1 from "../../assets/house/1.jpg";
import Image2 from "../../assets/house/2.jpg";

import { ReactComponent as GalleryIcon } from "../../assets/housedetail/gallery-icon.svg";

import { Link, useParams } from "react-router-dom";
import { featuredProperties } from "../../dummyData";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Import Swiper styles

import { useMediaQuery } from "react-responsive";
import { queries } from "../../devices";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
import { Listing, ListingIdRequest } from "../../types/listing";
import { useGetListingByIdQuery } from "../../api/endpoints/listings";

export const HouseGallery = ({ data }: any) => {
  const [open, setOpen] = useState(false);

  const isMedium = useMediaQuery({ query: queries.md });
  return (
    <div className="mt-7 w-full lg:flex lg:flex-row   lg:gap-4   ">
      {isMedium ? (
        <>
          <div className="relative">
            <img
              src={data?.images[1]}
              alt="house"
              className="md:w-[828px] lg:h-[400px] md:h-[300px]  object-cover rounded-2xl "
            />

            <p className="absolute top-2 left-4 bg-black text-white font-medium px-6 py-1 lg:px-12 lg:py-2 rounded-lg">
              For {data?.type}
            </p>
          </div>

          <div className="relative">
            <img
              src={data?.images[2]}
              alt="house"
              className="lg:w-[400px] md:mx-6 lg:mx-12 lg:h-[193px] md:w-[300px] md:h-[143px] w-full h-[250px] rounded-2xl object-cover "
            />

            <img
              src={data?.images[3]}
              alt="house"
              className="lg:w-[400px] lg:h-[193px] md:w-[300px] md:h-[143px] w-full h-[250px] border-2 border-primary-500 md:mx-6 lg:mx-12 mt-4 rounded-2xl object-cover"
            />

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="absolute bottom-3 right-3 lg:bottom-2 md:bottom-2 lg:right-14 md:-right-2 border-primary-500  font-semibold lg:text-sm text-xs bg-white flex items-center px-1 py-1 lg:px-6 lg:py-2 rounded-lg  "
            >
              <GalleryIcon />{" "}
              <span className="ml-2 ">
                View all {data?.images.length} photos{" "}
              </span>
            </button>
          </div>
        </>
      ) : (
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          loop={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper py-10"
        >
          <SwiperSlide>
            <div className="relative ">
              <img
                src={data?.images[2]}
                alt="house"
                className="h-[340px]  object-cover rounded-2xl w-full"
              />

              <p className="absolute top-2 left-4 bg-black text-white font-medium px-6 py-1 lg:px-12 lg:py-2 rounded-lg">
                For {data?.type}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src={data?.images[1]}
                alt="house"
                className="border-2 border-primary-500  rounded-2xl h-[340px] w-full"
              />

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="absolute bottom-3 right-3 lg:bottom-2 md:bottom-2 lg:right-14 md:-right-2 border-primary-500  font-semibold lg:text-sm text-xs bg-white flex items-center px-1 py-1 lg:px-6 lg:py-2 rounded-lg  "
              >
                <GalleryIcon />{" "}
                <span className="ml-2 ">
                  View all {data?.images.length} photos{" "}
                </span>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      )}

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[{ src: Image1 }, { src: Image2 }]}
      />
    </div>
  );
};
