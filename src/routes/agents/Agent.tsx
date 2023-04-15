import React from "react";
import Person from "../../assets/agent/person1.jpg";
import { ReactComponent as StarIcon } from "../../assets/icons/listing/featured-star.svg";
import { ReactComponent as LocationIcon } from "../../assets/icons/listing/location.svg";
import { ReactComponent as SearchIcon } from "../../assets/icons/listing/search-gray.svg";
import { useMediaQuery } from "react-responsive";
import { queries } from "../../devices";

const personDetail = [
  {
    id: 1,
    img: Person,
    name: "Akar Mohammed",
    location: "Sulaymaniyah",
  },
  {
    id: 2,
    img: Person,
    name: "Akar Mohammed",
    location: "Sulaymaniyah",
  },
  {
    id: 3,
    img: Person,

    name: "Akar Mohammed",
    location: "Sulaymaniyah",
  },
  {
    id: 4,
    img: Person,
    name: "Akar Mohammed",
    location: "Sulaymaniyah",
  },
];

export const Agent = () => {
  const isSmall = useMediaQuery({
    query: queries.sm,
  });

  return (
    <div className="pt-32 container">
      <div className="bg-searchBackground py-1 md:py-2 md: px-4 w-full mx-auto md:mx-0 rounded-lg flex justify-between">
        {isSmall ? (
          <>
            <input
              type="text"
              placeholder="Name"
              className=" bg-transparen border-none focus:ring-0 focus:ring-offset-0"
            />
            <SearchIcon className="self-center" />
          </>
        ) : (
          <input
            type="text"
            placeholder="City or address"
            className=" bg-transparent border-none focus:ring-0 focus:ring-offset-0"
          />
        )}
      </div>

      <div className="flex-col mt-9 gap-6">
        {personDetail.map((person) => {
          const { id, img, name, location } = person;
          return (
            <div key={id} className=" bg-white border  px-4 py-4 rounded-2xl ">
              <img src={img} alt="name" className="rounded-2xl"></img>

              <div className=" bg-primary-500 flex  w-[120px]  items-center gap-x-2 py-2 px-4 mt-2 rounded-lg">
                <StarIcon width={16} height={16} />
                <span className="text-white uppercase text-sm font-semibold">
                  verified
                </span>
              </div>

              <h1 className="mt-2 font-sans text-lg font-bold">{name}</h1>

              <span className="flex gap-2 items-center mt-2">
                <LocationIcon /> {location}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
