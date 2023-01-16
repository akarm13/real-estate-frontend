import { ReactComponent as LocationIcon } from "../assets/icons/listing/location.svg";
import { ReactComponent as EmailIcon } from "../assets/icons/listing/email.svg";
import { ReactComponent as TelephoneIcon } from "../assets/icons/listing/telephone.svg";
import { ReactComponent as LogoIcon } from "../assets/icons/listing/logo.svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="w-full pt-16 pb-4 shadow-footer">
      <div className="flex max-w-7xl m-auto justify-between">
        <div className="">
          <div className="flex space-x-2 w-30">
            <LogoIcon />
            <span className="text-primary-500 text-xl text-bold font-bold">
              Hêlane
            </span>
          </div>

          <p className="text-secondaryText text-base max-w-lg mt-4">
            Hêlane is a modern and easy-to-use platform for buying, selling, and
            renting properties. With a wide range of listings and verified
            agents, we make it simple to find your next home or investment.
          </p>

          <div className="my-7 flex flex-col space-y-6">
            <div className="flex">
              <div className="bg-primary-background p-4 flex items-center justify-center rounded-2xl">
                <TelephoneIcon />
              </div>
              <div>
                <h5 className="text-secondaryText font-sans text-base mx-2">
                  Tel
                </h5>
                <h3 className="text-primary-500 font-bold mx-2 ">
                  0750-317-4475
                </h3>
              </div>
            </div>

            <div className="flex mt-3">
              <div className="bg-primary-background p-4 flex items-center justify-center rounded-2xl">
                <EmailIcon />
              </div>
              <div>
                <h5 className="text-secondaryText font-sans text-base mx-2">
                  Email
                </h5>
                <h3 className="text-primary-500 font-bold mx-2 ">
                  support@withhelane.com
                </h3>
              </div>
            </div>

            <div className="flex mt-3 ">
              <div className="bg-primary-background p-4 flex items-center justify-center rounded-2xl">
                <LocationIcon />
              </div>
              <div>
                <h5 className="text-secondaryText font-sans text-base mx-2">
                  Address
                </h5>
                <h3 className="text-primary-500 font-bold mx-2 ">
                  Aqary Street, Opposite of City Star, Sulaymaniyah
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between w-100 gap-10">
          <div className="flex flex-col">
            <h3 className="font-bold font-sans text-lg m-1 text-primary-900">
              Explore
            </h3>
            <Link
              className="text-secondaryText text-base m-1 hover:underline"
              to="/"
            >
              Home
            </Link>
            <Link
              className="text-secondaryText text-base m-1 hover:underline"
              to="/"
            >
              Search
            </Link>
            <Link
              className="text-secondaryText text-base m-1 hover:underline"
              to="/"
            >
              Agents
            </Link>
          </div>

          <div className="flex flex-col ml-4  ">
            <h3 className="font-bold font-sans text-lg m-1 text-primary-900">
              Listings
            </h3>
            <Link
              className="text-secondaryText text-base m-1 hover:underline"
              to="/"
            >
              List your property
            </Link>
          </div>

          <div className="flex flex-col mx-2">
            <h3 className="font-bold font-sans text-lg m-1 text-primary-900">
              Support
            </h3>
            <Link
              className="text-secondaryText text-base m-1 hover:underline"
              to="/"
            >
              Contact us
            </Link>
            <Link
              className="text-secondaryText text-base m-1 hover:underline"
              to="/"
            >
              FAQ
            </Link>
            <Link
              className="text-secondaryText text-base m-1 hover:underline"
              to="/"
            >
              Privacy Policy
            </Link>
            <Link
              className="text-secondaryText text-base m-1 hover:underline"
              to="/"
            >
              Terms of use
            </Link>
          </div>
        </div>
      </div>

      <h5 className="text-secondaryText text-base m-3 text-center">
        © 2022, All Rights Reserved
      </h5>
    </footer>
  );
};
