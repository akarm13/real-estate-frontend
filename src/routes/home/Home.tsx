import { HeroSection } from "./HeroSection";
import { FaqSection } from "./FaqSection";
import { BenefitsSection } from "./BenefitsSection";
import { Footer } from "../../components/Footer";
import { ListingsSection } from "./ListingsSection";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="pt-7 ">
      <HeroSection />
      <BenefitsSection />
      <ListingsSection />
      <FaqSection />
      <div className="w-5/6  md: bg-primary-500 px-6 py-5 mx-auto mt-40 rounded-lg ">
        <div className="w-full flex justify-center md:justify-between items-center flex-wrap gap-y-6 ">
          <p className="text-white font-semibold text-xl">
            Looking to find your next home?
          </p>
          <Link
            className="rounded-3xl px-7 py-3 bg-white hover:bg-gray-100 transition"
            to="/search"
          >
            <span className="text-primary-500">Find your next home</span>
          </Link>
        </div>
      </div>
    </div>
  );
};
