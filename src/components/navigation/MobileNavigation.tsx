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
import { Menu, XIcon } from "lucide-react";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
};

export const MobileNavigation = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { user } = useSelector(selectAuth);

  return (
    <div
      className={`min-h-screen fixed top-[74px] md:hidden z-20 overflow-y-hidden bg-white w-full flex flex-col gap-y-10 items-baseline px-4 py-8  ${
        isMenuOpen ? "left-0" : "-left-full"
      }`}
    >
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
