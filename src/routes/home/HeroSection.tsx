import { Button } from "../../components/Button";

import { ReactComponent as HouseIllustration } from "../../assets/illustrations/house-illustration.svg";
import { useMediaQuery } from "react-responsive";
import { queries } from "../../devices";
import { LinkButton } from "../../components/LinkButton";
export const HeroSection = () => {
  const isSmall = useMediaQuery({
    query: queries.sm,
  });
  return (
    <div className="lg: mx-auto grid w-5/6 grid-cols-1 items-center space-y-8 lg:grid-cols-2">
      <div className="order-1 flex flex-col gap-y-8 lg:order-first">
        <div className="mt-24 flex flex-col">
          <h1 className="text-3xl  font-semibold leading-tight text-[#120F33] md:text-6xl">
            Finding your next home has never been easier
          </h1>
          <p className=" mt-4 text-xl text-[#120F33] md:text-3xl ">
            No commissions, no hassle.
          </p>
        </div>
        <div className="flex gap-x-6">
          <LinkButton to="/listings" variant="primary">
            {isSmall ? "Browse Listings" : "Listings"}
          </LinkButton>
          <LinkButton to="/agents" variant="secondary">
            {isSmall ? "Browse Agents" : "Agents"}
          </LinkButton>
        </div>
      </div>
      <div className="hidden md:flex">
        <HouseIllustration className="h-full w-full" height={500} />
      </div>
    </div>
  );
};
