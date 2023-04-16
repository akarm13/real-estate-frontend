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
import { TypeBadge } from "../../components/ListingCard";
import { Skeleton } from "../../components/skeleton/Skeleton";
import { Listing } from "../../types/listing";

type Props = {
  images: Listing["images"];
  type: Listing["type"] | undefined;
  isLoading: boolean;
};

const skeletons = [1, 2, 3];

const imageContainerClasses = ["first", "second", "third"];
const skeletonContainerClasses = [
  "first-skeleton",
  "second-skeleton",
  "third-skeleton",
];

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
    <div className="mt-7">
      <div className="gallery-container relative">
        {isLoading ? (
          <SkeletonPlaceholders />
        ) : (
          <>
            {isMedium ? (
              <GalleryImagesMedium images={images} type={type || ""} />
            ) : (
              <GalleryImagesSmall images={images} type={type || ""} />
            )}
          </>
        )}
      </div>

      <Lightbox open={open} close={() => setOpen(false)} slides={slideImages} />
    </div>
  );
};

const SkeletonPlaceholders = () => {
  return (
    <>
      {skeletons.map((_, index) => (
        <div
          key={index}
          className={`w-full  ${skeletonContainerClasses[index]}`}
        >
          <Skeleton className="rounded-2xl w-full h-full" />
        </div>
      ))}
    </>
  );
};

const GalleryImagesMedium = ({
  images,
  type,
}: {
  images: string[];
  type: string;
}) => {
  return (
    <>
      {images.slice(0, 3).map((image, index) => (
        <div key={index} className={`relative ${imageContainerClasses[index]}`}>
          <img
            src={image}
            alt={`House photo ${index + 1}`}
            className={`object-cover rounded-2xl ${
              index === 0 ? "max-h-[500px] h-full" : "max-h-[235px] h-full"
            } w-full`}
          />
          {index === 0 && (
            <TypeBadge
              type={type || "house"}
              className="absolute top-2 left-4 px-8"
            />
          )}
        </div>
      ))}
    </>
  );
};

// Render gallery images for small screens
const GalleryImagesSmall = ({
  images,
  type,
}: {
  images: string[];
  type: string;
}) => {
  return (
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
      {images.slice(0, 2).map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative">
            <img
              src={image}
              alt={`House photo ${index + 1}`}
              className={`h-[340px] object-cover rounded-2xl w-full ${
                index === 0 ? "border-2 border-primary-500" : ""
              }`}
            />
            {index === 0 && (
              <p className="absolute top-2 left-4 bg-black text-white font-medium px-6 py-1 lg:px-12 lg:py-2 rounded-lg">
                For {type}
              </p>
            )}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
