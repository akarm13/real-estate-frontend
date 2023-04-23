import { BenefitCard } from "./BenefitCard";

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
          description="Find the perfect property with our advanced search filters."
        />
        <BenefitCard
          title="Unbeatable value"
          description="Get the best deal with Hêlane's extensive listings and competitive pricing and commissions."
        />
        <BenefitCard
          title="Simple and convenient"
          description="Find and purchase your dream home with ease on Hêlane."
        />
        <BenefitCard
          title="Verified Agents"
          description="Work with top-rated, verified agents who are dedicated to your success."
        />
      </div>
    </div>
  );
};
