import { ReactComponent as BedroomIcon } from "../../assets/icons/listing/bedroom.svg";
import { ReactComponent as BathroomIcon } from "../../assets/icons/listing/bathroom.svg";
import { ReactComponent as MeterIcon } from "../../assets/housedetail/meters.svg";
import { ReactComponent as CheckMarkIcon } from "../../assets/housedetail/checkmark.svg";
import { ReactComponent as Person } from "../../assets/housedetail/person.svg";
import { Button } from "../../components/Button";

import { useParams, Link } from "react-router-dom";
import { featuredProperties } from "../../dummyData";

export const SummarySection = ({ data }: any) => {
  //  data.owner.name = data

  return (
    <div className="lg:flex w-full ">
      <div className="flex flex-col gap-6">
        <div className="my-8 flex  items-center justify-around  max-w-[720px] h-28  bg-white border rounded-lg p-5">
          <div className="ml-2">
            <p className="font-semibold text-xs md:text-base lg:text-lg">
              Bedrooms
            </p>

            <div className="flex items-center mx-2 mt-4">
              <BedroomIcon />

              <span className="mx-2 md:mx-4 lg:text-base md:text-sm text-xs ">
                {data?.rooms.bedrooms}
              </span>
            </div>
          </div>
          <div className="ml-2">
            <p className="font-semibold text-xs md:text-base  lg:text-lg">
              Bathrooms
            </p>
            <div className="flex items-center mx-2 mt-4">
              <BathroomIcon />

              <span className="mx-2 md:mx-4 lg:text-base md:text-sm text-xs">
                {data?.rooms.bathrooms}
              </span>
            </div>
          </div>
          <div className="ml-2">
            <p className="font-semibold text-xs md:text-base md:ml-0 ml-1  lg:text-lg">
              Square Area
            </p>
            <div className="flex items-center  mt-4">
              <MeterIcon />

              <span className="mx-1 md:mx-4 w-16 lg:text-base md:text-sm text-xs">
                {data?.area} m2
              </span>
            </div>
          </div>
          <div className="">
            <p className="font-semibold text-xs md:text-base   lg:text-lg">
              Status
            </p>
            <div className="flex items-center  mt-4">
              <CheckMarkIcon />

              <span className="md:mx-4 lg:text-base md:text-sm text-xs">
                Active
              </span>
            </div>
          </div>
        </div>

        <div className="max-w-[715px] flex flex-col gap-4">
          <h2 className="lg:text-2xl md:text-lg font-semibold">
            About this home
          </h2>

          <p className="text-secondaryText text-sm lg:text-base">
            {data?.description}
          </p>
        </div>
      </div>

      <div className="flex flex-col max-w-[360px] md:w-[400px] bg-white border my-12 lg:ml-14 px-6 py-6 rounded-lg gap-6">
        <h5 className="font-semibold text-base lg:text-lg">Sale Price</h5>

        <h3 className="text-primary-500 text-lg lg:text-2xl font-bold ">
          ${data?.price}
        </h3>

        <div className="flex md:w-48 w-44 justify-between  ">
          <Person />
          <div>
            <h4 className="font-semibold lg:text-base text-sm">
              {" "}
              {data?.owner.fullName}
            </h4>
            <h5 className="text-secondaryText lg:text-base text-sm">
              Verified Agent
            </h5>
          </div>
        </div>

        <div className="flex w-full  justify-between items-center  ">
          <div className="flex flex-col gap-2 items-center">
            <h4 className="font-semibold  lg:text-base md:text-sm text-xs ">
              Rating
            </h4>
            <p className="text-xs md:text-base">5/5</p>
          </div>

          <div className="flex flex-col  gap-2 items-center">
            <h4 className="font-semibold  lg:text-base md:text-sm text-xs ">
              Properties Listed
            </h4>
            <p className="text-xs md:text-base">2</p>
          </div>

          <div className="flex flex-col  gap-2 items-center">
            <h4 className="font-semibold  lg:text-base md:text-sm text-xs ">
              Properties sold
            </h4>
            <p className="text-xs md:text-base">2</p>
          </div>
        </div>

        <Button
          className="text-sm"
          onClick={() => console.log("login")}
          variant="primary"
        >
          {data?.owner.phone}
        </Button>
      </div>
    </div>
  );
};
