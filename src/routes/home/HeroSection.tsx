import { Button } from "../../components/Button";

import { ReactComponent as HouseIllustration } from "../../assets/illustrations/house-illustration.svg";
export const HeroSection = () => {
  return (
    <div className="max-w-7xl flex justify-between items-center mx-auto">
      <div className="flex flex-col gap-y-8">
        <div className="">
          <h1 className="font-semibold text-6xl text-[#120F33] leading-tight">
            Finding your next home has never been easier
          </h1>
          <p className=" text-[#120F33] text-3xl mt-4">
            No commissions, no hassle.
          </p>
        </div>
        <div className="flex gap-x-6">
          <Button onClick={() => console.log("login")} variant="primary">
            Browse Listings
          </Button>
          <Button onClick={() => console.log("sign up")} variant="secondary">
            Browse Agents
          </Button>
        </div>
      </div>
      <div className="">
        <HouseIllustration />
      </div>
    </div>
  );
};
