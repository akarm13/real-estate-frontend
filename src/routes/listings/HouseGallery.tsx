import Image1 from "../../assets/house/1.jpg";
import Image2 from "../../assets/house/2.jpg";

import { ReactComponent as GalleryIcon } from "../../assets/housedetail/gallery-icon.svg";

import { useMemo, useState } from "react";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Import Swiper styles

import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { queries } from "../../devices";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";
import { Listing } from "../../types/listing";
import { Skeleton } from "../../components/skeleton/Skeleton";

type Props = {
  images: Listing["images"];
  type: Listing["type"] | undefined;
  isLoading: boolean;
};

const skeletons = [1, 2, 3];

export const HouseGallery = ({ images, type, isLoading }: Props) => {
  const [open, setOpen] = useState(false);

  const slideImages = useMemo(() => {
    return images.map((image) => ({
      src: image,
      alt: "house",
    })) as SlideImage[];
  }, [images]);

  const isMedium = useMediaQuery({ query: queries.md });
  return (
    <div className="mt-7 w-full lg:flex lg:flex-row   lg:gap-4   ">
      {isMedium ? (
        <>
          {isLoading
            ? skeletons.map((_, index) => (
                <div key={index} className="w-full h-[250px]">
                  <Skeleton className="rounded-2xl w-full h-full" />
                </div>
              ))
            : images.map((image, index) => (
                <div key={index} className="relative">
                  <img
                    src={image}
                    alt={`house-${index}`}
                    className={`${
                      index === 0
                        ? "md:w-[828px] lg:h-[400px] md:h-[300px]"
                        : "lg:w-[400px] md:mx-6 lg:mx-12 lg:h-[193px] md:w-[300px] md:h-[143px] w-full h-[250px]"
                    } object-cover rounded-2xl`}
                  />
                  {index === 0 && (
                    <p className="absolute top-2 left-4 bg-black text-white font-medium px-6 py-1 lg:px-12 lg:py-2 rounded-lg">
                      For {type}
                    </p>
                  )}
                </div>
              ))}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="absolute bottom-3 right-3 lg:bottom-2 md:bottom-2 lg:right-14 md:-right-2 border-primary-500  font-semibold lg:text-sm text-xs bg-white flex items-center px-1 py-1 lg:px-6 lg:py-2 rounded-lg  "
          >
            <GalleryIcon />{" "}
            <span className="ml-2 ">View all {images.length} photos </span>
          </button>
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
                src={images[2]}
                alt="house"
                className="h-[340px]  object-cover rounded-2xl w-full"
              />

              <p className="absolute top-2 left-4 bg-black text-white font-medium px-6 py-1 lg:px-12 lg:py-2 rounded-lg">
                For {type}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                src={images[1]}
                alt="house"
                className="border-2 border-primary-500  rounded-2xl h-[340px] w-full"
              />

              <button
                type="button"
                onClick={() => setOpen(true)}
                className="absolute bottom-3 right-3 lg:bottom-2 md:bottom-2 lg:right-14 md:-right-2 border-primary-500  font-semibold lg:text-sm text-xs bg-white flex items-center px-1 py-1 lg:px-6 lg:py-2 rounded-lg  "
              >
                <GalleryIcon />{" "}
                <span className="ml-2 ">View all {images?.length} photos </span>
              </button>
            </div>
          </SwiperSlide>
        </Swiper>
      )}

      <Lightbox open={open} close={() => setOpen(false)} slides={slideImages} />
    </div>
  );
};
