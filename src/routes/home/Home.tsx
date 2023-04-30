import { Link } from "react-router-dom";
import { BenefitsSection } from "./BenefitsSection";
import { FaqSection } from "./FaqSection";
import { HeroSection } from "./HeroSection";
import { ListingsSection } from "./ListingsSection";

export const Home = () => {
  return (
    <div className="pt-16 xl:pt-0">
      <HeroSection />
      <BenefitsSection />
      <ListingsSection />
      <FaqSection />
      <div className="md:  container mx-auto mt-40 rounded-lg bg-primary-500 px-6 py-5 ">
        <div className="flex w-full flex-wrap items-center justify-center gap-y-6 md:justify-between ">
          <p className="text-xl font-semibold text-white">
            Looking to find your next home?
          </p>
          <Link
            className="rounded-3xl bg-white px-7 py-3 transition hover:bg-gray-100"
            to="/search"
          >
            <span className="text-primary-500">Find your next home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
