import { ReactComponent as BedroomIcon } from "../../assets/icons/listing/bedroom.svg";
import { ReactComponent as BathroomIcon } from "../../assets/icons/listing/bathroom.svg";
import { ReactComponent as MeterIcon } from "../../assets/housedetail/meters.svg";
import { ReactComponent as CheckMarkIcon } from "../../assets/housedetail/checkmark.svg";
import { ReactComponent as Person } from "../../assets/housedetail/person.svg";
import { Button } from "../../components/Button";

import { useParams, Link } from "react-router-dom";
import { featuredProperties } from "../../dummyData";

export const SummarySection = () => {
  const { houseId } = useParams();

  const houses = featuredProperties.find((house) => house.id === houseId);

  return (
    <div className="flex w-full ">
      <div className="flex flex-col gap-6">
        <div className="my-8 flex items-center justify-around max-w-[720px] h-28  bg-white border rounded-lg p-5">
          <div>
            <p className="font-semibold text-lg">Bedrooms</p>

            <div className="flex items-center mx-2 mt-4">
              <BedroomIcon />

              <span className="mx-4">{houses?.bedrooms}</span>
            </div>
          </div>
          <div>
            <p className="font-semibold text-lg">Bathrooms</p>
            <div className="flex items-center mx-2 mt-4">
              <BathroomIcon />

              <span className="mx-4">{houses?.bathrooms}</span>
            </div>
          </div>
          <div>
            <p className="font-semibold text-lg">Square Area</p>
            <div className="flex items-center  mt-4">
              <MeterIcon />

              <span className="mx-4">{houses?.area} m2</span>
            </div>
          </div>
          <div>
            <p className="font-semibold text-lg">Status</p>
            <div className="flex items-center  mt-4">
              <CheckMarkIcon />

              <span className="mx-4">Active</span>
            </div>
          </div>
        </div>

        <div className="max-w-[715px] flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">About this home</h2>

          <p className="text-secondaryText">
            A beautiful 2-bedroom, 2-bathroom house, with a total area of 200
            square meters, is now available for sale in Aqary Street,
            Sulaymaniyah. This active listing features a spacious living area,
            modern kitchen, and comfortable bedrooms. The house is
            well-maintained and ready for its new owners. Its prime location in
            Aqary Street makes it a perfect choice for those looking for easy
            access to local amenities and a convenient lifestyle. this is a
            great opportunity to own a wonderful home in a sought-after
            location.
          </p>
        </div>
      </div>

      <div className="flex flex-col w-[400px] bg-white border my-12 ml-14 px-6 py-6 rounded-lg gap-6">
        <h5 className="font-semibold text-lg">Sale Price</h5>

        <h3 className="text-primary-500 text-2xl font-bold ">
          ${houses?.price}
        </h3>

        <div className="flex w-48 justify-between  ">
          <Person />
          <div>
            <h4 className="font-semibold"> Akar Mohammed</h4>
            <h5 className="text-secondaryText">Verified Agent</h5>
          </div>
        </div>

        <div className="flex w-full justify-between items-center  ">
          <div className="flex flex-col gap-2 items-center">
            <h4 className="font-semibold ">Rating</h4>
            <p>5/5</p>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <h4 className="font-semibold">Properties Listed</h4>
            <p>2</p>
          </div>

          <div className="flex flex-col gap-2 items-center">
            <h4 className="font-semibold">Properties sold</h4>
            <p>2</p>
          </div>
        </div>

        <Button onClick={() => console.log("login")} variant="primary">
          Show phone number
        </Button>
      </div>
    </div>
  );
};
