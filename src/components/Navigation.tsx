import { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as HamburgerIcon } from "../assets/icons/hamburger-icon.svg";
import { ReactComponent as LogoIcon } from "../assets/icons/listing/logo.svg";
import { Button } from "./Button";
import { DesktopNavigation } from "./navigation/DesktopNavigation";
import { MobileNavigation } from "./navigation/MobileNavigation";

export const Navigation = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav className="lg:mx-auto pt-4 lg:border-b-primary-background lg:border pb-4">
        {/* for laptop and tablet */}
        <div className="px-4 md:px-0 flex justify-between items-center md:flex md:justify-between md:items-center container">
          <NavLink to="/" className="flex items-center gap-x-1">
            <span>
              <LogoIcon />
            </span>
            <span className="text-primary-500 text-xl text-bold font-bold">
              Hêlane
            </span>
          </NavLink>
          <DesktopNavigation />
          {/* for mobile */}
          <div className="md:hidden block">
            <HamburgerIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>
      </nav>
      <MobileNavigation />
    </>
  );
};
