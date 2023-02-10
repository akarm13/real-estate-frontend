import Image1 from "../../assets/house/1.jpg";
import Image2 from "../../assets/house/2.jpg";
import { ReactComponent as GalleryIcon } from "../../assets/housedetail/gallery-icon.svg";

import { Link, useParams } from "react-router-dom";
import { featuredProperties } from "../../dummyData";
import { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export const HouseGallery = () => {
  const { houseId } = useParams();
  const [open, setOpen] = useState(false);
  const houses = featuredProperties.find((house) => house.id === houseId);

  return (
    <div className="mt-7 w-full flex md:flex-row flex-col md:gap-0 gap-4   ">
      <div className="relative">
        <img
          src={Image2}
          alt="house"
          className="md:w-[828px] lg:h-[400px] md:h-[300px]  object-cover rounded-2xl "
        />

        <p className="absolute top-2 left-4 bg-black text-white font-medium px-6 py-1 lg:px-12 lg:py-2 rounded-lg">
          For {houses?.type}
        </p>
      </div>

      <div className="relative">
        <img
          src={Image1}
          alt="house"
          className="lg:w-[400px] md:mx-6 lg:mx-12 lg:h-[193px] md:w-[300px] md:h-[143px] w-full h-[250px] rounded-2xl object-cover "
        />

        <img
          src={Image1}
          alt="house"
          className="lg:w-[400px] lg:h-[193px] md:w-[300px] md:h-[143px] w-full h-[250px] border-2 border-primary-500 md:mx-6 lg:mx-12 mt-4 rounded-2xl object-cover"
        />

        <button type="button" onClick={() => setOpen(true)} className="absolute bottom-3 right-3 lg:bottom-2 md:bottom-2 lg:right-14 md:-right-2 border-primary-500  font-semibold lg:text-sm text-xs bg-white flex items-center px-1 py-1 lg:px-6 lg:py-2 rounded-lg  ">
          <GalleryIcon  /> <span  className="ml-2 ">View all 21 photos </span>
        </button>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        slides={[
          { src: Image1 },
          { src: Image2 },

        ]}
      />
    </div>
  );
};
