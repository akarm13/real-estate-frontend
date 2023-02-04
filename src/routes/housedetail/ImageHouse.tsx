import React from "react";
import Image2 from "../../assets/house/2.jpg";
import Image1 from "../../assets/house/1.jpg";
import { ReactComponent as Picture } from "../../assets/housedetail/images.svg";

const ImageHouse = () => {
  return (
    <div className="mt-7 w-full flex  ">
      <div className="relative">
        <img
          src={Image2}
          alt="house"
          className="w-[728px] h-[400px] object-cover rounded-2xl "
        />

        <p className="absolute top-2 left-4 bg-black text-white font-medium  px-12 py-2 rounded-lg">
          For sale
        </p>
      </div>

      <div className="relative">
        <img
          src={Image1}
          alt="house"
          className="w-[400px] mx-12 h-[193px] rounded-2xl object-cover "
        />

        <img
          src={Image1}
          alt="house"
          className="w-[400px] h-[193px] border-2 border-primary-500 mx-12 mt-4 rounded-2xl object-cover"
        />

        <button className="absolute bottom-2 right-14 border-primary-500  font-semibold text-sm bg-white flex items-center px-6 py-2 rounded-lg  ">
          <Picture /> <span className="ml-2">View all 21 photos </span>{" "}
        </button>
      </div>
    </div>
  );
};

export default ImageHouse;
