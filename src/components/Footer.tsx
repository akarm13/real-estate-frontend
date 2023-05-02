import { ReactComponent as LocationIcon } from "../assets/icons/listing/location.svg";
import { ReactComponent as EmailIcon } from "../assets/icons/listing/email.svg";
import { ReactComponent as TelephoneIcon } from "../assets/icons/listing/telephone.svg";
import { ReactComponent as LogoIcon } from "../assets/icons/listing/logo.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="mt-16 border border-t-primary-background pt-16">
      <div className="container mx-auto flex flex-wrap justify-between md:w-full">
        <div className="">
          <div className="w-30 flex space-x-3">
            <span>
              <LogoIcon />
            </span>
            <span className="text-bold text-xl font-bold text-primary-500">
              Hêlane
            </span>
          </div>

          <p className="max-w-sm pt-2 text-sm  text-secondaryText md:text-base ">
            Hêlane is a modern and easy-to-use platform for buying, selling, and
            renting properties. With a wide range of listings and verified
            agents, we make it simple to find your next home or investment.
          </p>

          <div className="my-7 flex flex-col  ">
            <div className="flex">
              <div className="flex items-center justify-center self-start rounded-2xl bg-primary-background p-4">
                <TelephoneIcon />
              </div>
              <div>
                <h5 className="mx-2 font-sans text-base text-secondaryText">
                  Tel
                </h5>
                <h3 className="mx-2 text-sm font-bold text-primary-500 md:text-base ">
                  0750-317-4475
                </h3>
              </div>
            </div>

            <div className="mt-3 flex">
              <div className="flex items-center justify-center self-start rounded-2xl bg-primary-background p-4">
                <EmailIcon />
              </div>
              <div>
                <h5 className="mx-2 font-sans text-base text-secondaryText">
                  Email
                </h5>
                <h3 className="mx-2  text-sm font-bold text-primary-500 md:text-base ">
                  support@withhelane.com
                </h3>
              </div>
            </div>

            <div className="mt-3 flex ">
              <div className="flex items-center justify-center self-start rounded-2xl bg-primary-background p-4 ">
                <LocationIcon />
              </div>
              <div>
                <h5 className="mx-2 font-sans text-base text-secondaryText">
                  Address
                </h5>
                <h3 className="mx-2 text-sm font-bold text-primary-500 md:text-base ">
                  Aqary Street, Opposite of City Star, Sulaymaniyah
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-baseline  justify-between gap-10 ">
          <div className="flex w-full flex-col lg:w-auto">
            <h3 className="m-1 font-sans text-lg font-bold text-primary-900">
              Explore
            </h3>
            <Link
              to="/"
              className="m-1 text-base text-secondaryText hover:text-primaryText hover:underline"
            >
              Home
            </Link>
            <Link
              to="/search"
              className="m-1 text-base text-secondaryText hover:text-primaryText hover:underline"
            >
              Search
            </Link>
            <Link
              to="/agents"
              className="m-1 text-base text-secondaryText hover:text-primaryText hover:underline"
            >
              Agents
            </Link>
          </div>

          <div className="flex w-full  flex-col lg:w-auto ">
            <h3 className="m-1 font-sans text-lg font-bold text-primary-900">
              Listings
            </h3>
            <Link
              to="/listings/create"
              className="m-1 text-base text-secondaryText hover:text-primaryText hover:underline"
            >
              List your property
            </Link>
          </div>

          <div className="flex w-full  flex-col lg:w-auto">
            <h3 className="m-1 font-sans text-lg font-bold text-primary-900">
              Support
            </h3>
            <h5 className="m-1 text-base text-secondaryText">Contact us</h5>
            <h5 className="m-1 text-base text-secondaryText">FAQ</h5>
            <h5 className="m-1 text-base text-secondaryText">Privacy Policy</h5>
            <h5 className="m-1 text-base text-secondaryText">Terms of use</h5>
          </div>
        </div>
      </div>

      <h5 className="mx-3 my-4 text-center text-base text-secondaryText">
        © {new Date().getFullYear()} Hêlane. All rights reserved.
      </h5>
    </footer>
  );
};
