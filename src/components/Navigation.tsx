import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { ReactComponent as LogoIcon } from "../assets/icons/listing/logo.svg";
import { ReactComponent as HamburgerIcon } from "../assets/icons/hamburger-icon.svg";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import { useMediaQuery } from "react-responsive";
import { queries } from "../devices";
import { useState } from "react";

export const Navigation = () => {
  const navigate = useNavigate();
  const activeClasses =
    "md:bg-primary-background  md:text-primary-500 md:px-5 md:py-3 md:my-0 md:mx-0      md:rounded-md";
  const inactiveClasses =
    "md:bg-white text-secondaryText md:px-5 md:py-3 md:my-0 md:mx-0   rounded-md";
  const routeHandler = (change: String) => {
    if (change === "primary") {
      navigate("/login");
    } else if (change === "secondary") {
      navigate("/register");
    }
  };

  const isMedium = useMediaQuery({ query: queries.md });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-5/6 md:max-w-7xl mx-auto pt-8">
      {/* for laptop and tablet */}
      <div className="px-4 md:px-0 flex justify-between items-center  md:flex md:justify-between md:items-center">
        <NavLink to="/" className="flex items-center gap-x-1">
          <span>
            <LogoIcon />
          </span>
          <span className="text-primary-500 text-xl text-bold font-bold">
            Hêlane
          </span>
        </NavLink>
        <ul className="hidden md:flex md:justify-between">
          <li className="">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? activeClasses : inactiveClasses;
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) => {
                return isActive ? activeClasses : inactiveClasses;
              }}
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listings"
              className={({ isActive }) => {
                return isActive ? activeClasses : inactiveClasses;
              }}
            >
              Listings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/agents"
              className={({ isActive }) => {
                return isActive ? activeClasses : inactiveClasses;
              }}
            >
              Agents
            </NavLink>
          </li>
        </ul>

        <div className="hidden md:flex md:gap-x-6">
          <div className="flex gap-x-2">
            <Button onClick={() => routeHandler("primary")} variant="primary">
              Login
            </Button>

            <Button
              onClick={() => routeHandler("secondary")}
              variant="secondary"
            >
              Sign up
            </Button>
          </div>
        </div>
        <div className="md:hidden block">
          <HamburgerIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
        </div>
      </div>
      {/* for mobile */}
      <div
        className={`min-h-screen fixed top-0 md:hidden z-[10000] overflow-y-hidden bg-white w-full flex justify-between py-[30px] items-baseline px-4 duration-300  ease-in  ${
          isMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <ul className=" flex flex-col gap-y-16 items-start justify-start ">
          <li className="">
            <NavLink
              to="/"
              className={({ isActive }) => {
                return isActive ? activeClasses : inactiveClasses;
              }}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/search"
              className={({ isActive }) => {
                return isActive ? activeClasses : inactiveClasses;
              }}
            >
              Search
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/listings"
              className={({ isActive }) => {
                return isActive ? activeClasses : inactiveClasses;
              }}
            >
              Listings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/agents"
              className={({ isActive }) => {
                return isActive ? activeClasses : inactiveClasses;
              }}
            >
              Agents
            </NavLink>
          </li>
          <Button onClick={() => routeHandler("primary")} variant="primary">
            Login
          </Button>

          <Button onClick={() => routeHandler("secondary")} variant="secondary">
            Sign up
          </Button>
        </ul>

        <CloseIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
      </div>
    </nav>
  );
};
