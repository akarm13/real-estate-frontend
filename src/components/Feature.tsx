import { VisionCard } from "./FeatureCard";

export const Feature = () => {
  return (
    <div className="max-w-7xl mx-auto pt-7">
      <h1 className="font-semibold text-2xl text-[#120F33]">Why Choose Us</h1>
      <h4 className="text-secondaryText text-sm">
        Simple, convenient, and value-driven real estate
      </h4>

      <div className="flex gap-x-8 pt-10">
        <VisionCard
          title="Powerful Search"
          desc="Find the perfect property with our advanced search filters."
        />
        <VisionCard
          title="Unbeatable value"
          desc="Get the best deal with Hêlane's extensive listings and competitive pricing and commissions."
        />
        <VisionCard
          title="Simple and convenient"
          desc="Find and purchase your dream home with ease on Hêlane."
        />
        <VisionCard
          title="Verified Agents"
          desc="Work with top-rated, verified agents who are dedicated to your success."
        />
      </div>
    </div>
  );
};
