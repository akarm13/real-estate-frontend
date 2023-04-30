import { HeroSection } from "./HeroSection";
import { FaqSection } from "./FaqSection";
import { BenefitsSection } from "./BenefitsSection";
import { Footer } from "../../components/Footer";
import { ListingsSection } from "./ListingsSection";
import { Link } from "react-router-dom";
import NotificationComponent from "../../components/notification/Notification";

export const Home = () => {
  return (
    <div className="pt-16 xl:pt-0">
      <NotificationComponent />
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
