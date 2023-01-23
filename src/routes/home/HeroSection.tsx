import { Button } from "../../components/Button";

import { ReactComponent as HouseIllustration } from "../../assets/illustrations/house-illustration.svg";
import { useMediaQuery } from "react-responsive";
import { queries } from "../../devices";
export const HeroSection = () => {
  const isSmall = useMediaQuery({
    query: queries.sm,
  });
  return (
    <div className="grid w-5/6 mx-auto grid-cols-1 space-y-8 lg:grid-cols-2 items-center lg:max-w-7xl">
      <div className="flex flex-col gap-y-8 order-1 lg:order-first">
        <div className="flex flex-col mt-24">
          <h1 className="text-3xl  font-semibold md:text-6xl text-[#120F33] leading-tight">
            Finding your next home has never been easier
          </h1>
          <p className=" text-[#120F33] text-xl md:text-3xl mt-4 ">
            No commissions, no hassle.
          </p>
        </div>
        <div className="flex gap-x-6">
          <Button onClick={() => console.log("login")} variant="primary">
            {isSmall ? "Browse Listings" : "Listings"}
          </Button>
          <Button onClick={() => console.log("sign up")} variant="secondary">
            {isSmall ? "Browse Agents" : "Agents"}
          </Button>
        </div>
      </div>
      <div className="hidden md:flex">
        <HouseIllustration className="w-full h-full" height={500} />
      </div>
    </div>
  );
};
