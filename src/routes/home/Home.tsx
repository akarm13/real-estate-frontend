import { Hero } from "../../components/Hero";
import { FaqSection } from "./FaqSection";
import { BenefitsSection } from "./BenefitsSection";
import { Footer } from "../../components/Footer";
import { ListingsSection } from "./ListingsSection";

export const Home = () => {
  return (
    <div className="pt-7 ">
      <Hero />
      <BenefitsSection />
      <ListingsSection />
      <FaqSection />
      <div className="max-w-7xl bg-primary-500 px-6 py-5 mx-auto mt-40 rounded-md ">
        <div className="w-full flex justify-between items-center">
          <p className="text-white font-semibold text-xl">
            Looking to find your next home?
          </p>
          <div className="rounded-3xl px-7 py-3 bg-white">
            <p className="text-primary-500">Find your next home</p>
          </div>
        </div>
      </div>
      <div className="pt-28">
        <Footer />
      </div>
    </div>
  );
};
