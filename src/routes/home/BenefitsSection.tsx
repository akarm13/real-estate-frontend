import { BenefitCard } from "./BenefitCard";

import { ReactComponent as SearchIcon } from "../../assets/icons/home/search.svg";
import { ReactComponent as MapIcon } from "../../assets/icons/home/map.svg";
import { ReactComponent as SimpleIcon } from "../../assets/icons/home/simple.svg";
import { ReactComponent as VerifiedIcon } from "../../assets/icons/home/verified.svg";

export const BenefitsSection = () => {
  return (
    <div className="md: container mx-auto mt-24">
      <h1 className="primary-900 text-2xl font-semibold md:text-3xl">
        Why Choose Us
      </h1>
      <h4 className="mt-2 text-base font-semibold text-secondaryText md:text-xl">
        Simple, convenient, and value-driven real estate
      </h4>

      <div className="mt-16 grid grid-cols-benefits items-center gap-y-4 gap-x-4">
        <BenefitCard
          title="Powerful Search"
          description="Find the perfect listing with our advanced search filters."
          icon={<SearchIcon />}
        />
        <BenefitCard
          title="Map Visualization"
          description="Explore listings in your desired location with our interactive map view."
          icon={<MapIcon />}
        />
        <BenefitCard
          title="Simple and convenient"
          description="Find and purchase your dream home with ease on Hêlane."
          icon={<SimpleIcon />}
        />
        <BenefitCard
          title="Verified Agents"
          description="Work with top-rated, verified agents who are dedicated to your success."
          icon={<VerifiedIcon />}
        />
      </div>
    </div>
  );
};
