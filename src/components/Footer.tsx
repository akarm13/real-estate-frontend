import { ReactComponent as LocationIcon } from "../assets/icons/listing/location.svg";
import { ReactComponent as EmailIcon } from "../assets/icons/listing/email.svg";
import { ReactComponent as TelephoneIcon } from "../assets/icons/listing/telephone.svg";
import { ReactComponent as LogoIcon } from "../assets/icons/listing/logo.svg";


export const Footer = () => {
  return (
    <footer className="  w-full     ">
      <div className="flex justify-around flex-wrap ">
        <div className="">
          <div className="flex space-x-3 w-30">
            <span>
              <LogoIcon />
            </span>
            <span className="text-primary-500 text-xl text-bold font-bold">
              Hêlane
            </span>

          </div>

          <p className="text-secondaryText text-base  pt-2 max-w-sm ">
            Hêlane is a modern and easy-to-use platform for buying, selling, and
            renting properties. With a wide range of listings and verified
            agents, we make it simple to find your next home or investment.
          </p>

          <div className="my-7 flex flex-col  ">
            <div className="flex">
              <div className="bg-primary-background p-4 flex items-center justify-center rounded-2xl">
                <TelephoneIcon />
              </div>
              <div>
                <h5 className="text-secondaryText font-sans text-base mx-2">Tel</h5>
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
                <h5 className="text-secondaryText font-sans text-base mx-2">Email</h5>
                <h3 className="text-primary-500 font-bold mx-2 ">
                  support@withhelane.com
                </h3>
              </div>
            </div>

            <div className="flex mt-3 ">
              <div className="bg-primary-background p-4 flex items-center justify-center rounded-2xl ">
                <LocationIcon />
              </div>
              <div>
                <h5 className="text-secondaryText font-sans text-base mx-2">Address</h5>
                <h3 className="text-primary-500 font-bold mx-2 ">
                  Aqary Street, Opposite of City Star, Sulaymaniyah
                </h3>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-baseline  gap-10 flex-wrap ">
          <div className="flex flex-col w-full lg:w-auto">
            <h3 className="font-bold font-sans text-lg m-1 text-primary-900">Explore</h3>
            <h5 className="text-secondaryText text-base m-1">Home</h5>
            <h5 className="text-secondaryText text-base m-1">Search</h5>
            <h5 className="text-secondaryText text-base m-1">Agents</h5>
          </div>

          <div className="flex flex-col  w-full lg:w-auto ">
            <h3 className="font-bold font-sans text-lg m-1 text-primary-900">Listings</h3>
            <h5 className="text-secondaryText text-base m-1">List your property</h5>
          </div>

          <div className="flex flex-col mx-2 w-full lg:w-auto">
            <h3 className="font-bold font-sans text-lg m-1 text-primary-900">Support</h3>
            <h5 className="text-secondaryText text-base m-1">Contact us</h5>
            <h5 className="text-secondaryText text-base m-1">FAQ</h5>
            <h5 className="text-secondaryText text-base m-1">Privacy Policy</h5>
            <h5 className="text-secondaryText text-base m-1">Terms of use</h5>
          </div>
        </div>
      </div>

      <h5 className="text-secondaryText text-base m-3 text-center">
        © 2022, All Rights Reserved
      </h5>
    </footer>
  );
};
