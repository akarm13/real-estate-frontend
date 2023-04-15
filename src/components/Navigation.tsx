import { Menu, XIcon } from "lucide-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as LogoIcon } from "../assets/icons/listing/logo.svg";
import { Button } from "./Button";
import { MobileNavigation } from "./navigation/MobileNavigation";
import { NavigationLinks } from "./navigation/NavigationLinks";
import { useSelector } from "react-redux";
import { selectAuth, selectIsAuthenticated } from "../store/slices/auth";
import { UserActionsMenu } from "./navigation/UserActionsMenu";

export const Navigation = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { user } = useSelector(selectAuth);
  return (
    <>
      <nav className="lg:mx-auto pt-4 border border-b-primary-background lg:border pb-4 fixed bg-white w-full z-20">
        {/* for laptop and tablet */}
        {/* Full width - 32px */}

        <div className="flex justify-between items-center md:flex md:justify-between md:items-center w-[calc(100%-4rem)] mx-auto">
          <div className="flex items-center justify-between w-full md:w-auto">
            <NavLink to="/" className="flex items-center gap-x-1">
              <span>
                <LogoIcon />
              </span>
              <span className="text-primary-500 text-xl text-bold font-bold md:block">
                Hêlane
              </span>
            </NavLink>
            <Button
              variant="none"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XIcon /> : <Menu />}
            </Button>
          </div>
          <NavigationLinks />
          <UserActionsMenu user={user} />
          <MobileNavigation
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </nav>
    </>
  );
};
