import { BenefitCard } from "./BenefitCard";

export const BenefitsSection = () => {
  return (
    <div className="max-w-7xl mx-auto pt-7">
      <h1 className="font-semibold text-3xl primary-900">Why Choose Us</h1>
      <h4 className="text-secondaryText text-xl font-semibold mt-2">
        Simple, convenient, and value-driven real estate
      </h4>

      <div className="flex gap-x-8 pt-16">
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
