import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../../assets/icons/close.svg";
import { selectAuth, selectIsAuthenticated } from "../../store/slices/auth";
import { AuthButtons } from "./AuthButtons";
import { NavigationLinks } from "./NavigationLinks";
import { UserInfo } from "./UserInfo";
import { useState } from "react";

import { ReactComponent as LogoIcon } from "../../assets/icons/listing/logo.svg";
import { Button } from "../Button";

export const MobileNavigation = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { user } = useSelector(selectAuth);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div
      className={`min-h-screen fixed top-0 md:hidden z-[10000] overflow-y-hidden bg-white w-full flex flex-col gap-y-10 py-2 items-baseline px-4 duration-300 ease-in ${
        isMenuOpen ? "left-0" : "-left-full"
      }`}
    >
      <div className="flex justify-between w-full py-4">
        <NavLink
          to="/"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex items-center gap-x-1"
        >
          <span>
            <LogoIcon />
          </span>
          <span className="text-primary-500 text-xl text-bold font-bold">
            Hêlane
          </span>
        </NavLink>
        <CloseIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
      <NavigationLinks />
      {isAuthenticated ? (
        <>
          <UserInfo data={user} />
          <Button variant="secondary" onClick={() => console.log("will fix")}>
            Logout
          </Button>
        </>
      ) : (
        <AuthButtons />
      )}
    </div>
  );
};
