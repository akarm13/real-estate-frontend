import { Button } from "../../components/Button";

import { ReactComponent as HouseIllustration } from "../../assets/illustrations/house-illustration.svg";
export const HeroSection = () => {
  return (
    <div className="flex-col-reverse  items-center max-w-7xl flex md:flex-row md:justify-between md:items-center mx-auto">
      <div className="flex flex-col gap-y-8 w-5/6">
        <div className="">
          <h1 className="text-3xl  font-semibold md:text-6xl text-[#120F33] leading-tight">
            Finding your next home has never been easier
          </h1>
          <p className=" text-[#120F33] text-xl md:text-3xl mt-4 ">
            No commissions, no hassle.
          </p>
        </div>
        <div className="flex gap-x-6">
          <Button onClick={() => console.log("login")} variant="primary">
            Listings
          </Button>
          <Button onClick={() => console.log("sign up")} variant="secondary">
            Agents
          </Button>
        </div>
      </div>
      <div className=" w-5/6">
        <HouseIllustration className="w-full h-full" />
      </div>
    </div>
  );
};
