import { NavLink, useLocation } from "react-router-dom";

import { ReactComponent as LogoIcon } from "../../assets/icons/listing/logo.svg";

import { ReactComponent as LoginIllustration } from "../../assets/illustrations/login-illustration.svg";
import { ReactComponent as SignIllustration } from "../../assets/illustrations/signup-illustration.svg";

export const Register = () => {
  const location = useLocation();
  return (
    <div className="h-screen">
      <div className="flex h-full">
        <div className="flex-1 bg-primary-background ">
          <NavLink to="/" className="flex items-center gap-x-1 pl-32  pt-6">
            <span>
              <LogoIcon />
            </span>
            <span className="text-primary-900 text-xl text-bold font-bold">
              Hêlane
            </span>
          </NavLink>

          <div className="flex justify-center items-center w-3/5 mx-auto pt-10">

            <SignIllustration className="w-full" />

          </div>
        </div>
        <div className="flex-1  justify-center items-center">
          {/* login and sign up section */}
        </div>
      </div>
    </div>
  );
};
