import { useMemo, useState } from "react";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { queries } from "../../devices";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { TypeBadge } from "../../components/ListingCard";
import { Skeleton } from "../../components/skeleton/Skeleton";
import { Listing } from "../../types/listing";
import { Button } from "../../components/Button";

import { ReactComponent as GalleryIcon } from "../../assets/housedetail/gallery-icon.svg";

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
  const isMedium = useMediaQuery({ query: queries.md });
  return (
    <div className="mt-7">
      <div className="relative grid grid-cols-1 grid-rows-1 md:grid-cols-5 md:grid-rows-2 md:gap-8">
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
          <Skeleton className="h-full w-full rounded-2xl" />
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
  const [open, setOpen] = useState(false);

  const slideImages = useMemo(() => {
    return images.map((image) => ({
      src: image,
      alt: "house",
    })) as SlideImage[];
  }, [images]);
  return (
    <>
      {images.slice(0, 3).map((image, index) => (
        <div key={index} className={`relative ${imageContainerClasses[index]}`}>
          <img
            src={image}
            alt={`House photo ${index + 1}`}
            className={`rounded-2xl object-cover ${
              index === 0 ? "h-full max-h-[500px]" : "h-full max-h-[235px]"
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
      <Button
        variant="none"
        onClick={() => setOpen(true)}
        className="absolute bottom-3 right-3 flex items-center rounded-lg border-primary-500 bg-white  px-1 py-1 text-xs font-semibold md:bottom-2 md:-right-2 lg:bottom-4 lg:right-8 lg:px-6 lg:py-2 lg:text-sm  "
      >
        <GalleryIcon />
        <span className="ml-2 ">View all {images.length} photos </span>
      </Button>
      <Lightbox open={open} close={() => setOpen(false)} slides={slideImages} />
    </>
  );
};

const GalleryImagesSmall = ({
  images,
  type,
}: {
  images: string[];
  type: string;
}) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      spaceBetween={10}
      loop={true}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
    >
      <TypeBadge type={type} className="absolute top-2 left-4 z-10" />
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <div className="relative h-[250px] rounded-2xl">
            {/* Overlay gradient */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black to-transparent opacity-30" />
            <img
              src={image}
              alt={`House photo ${index + 1}`}
              className={`h-full w-full rounded-2xl object-cover ${
                index === 0 ? "border-2 border-primary-500" : ""
              }`}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
