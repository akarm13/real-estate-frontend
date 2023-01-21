import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button } from "./Button";
import { ReactComponent as LogoIcon } from "../assets/icons/listing/logo.svg";
import { ReactComponent as HamburgerIcon } from "../assets/icons/hamburger-icon.svg";
import { useMediaQuery } from "react-responsive";
import { queries } from "../devices";
import { useState } from "react";

export const Navigation = () => {
  const navigate = useNavigate();
  const activeClasses =
    "bg-primary-background text-primary-500 px-5 py-3 rounded-md";
  const inactiveClasses = "bg-white text-secondaryText px-5 py-3 rounded-md";
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
    <nav className="flex justify-between items-center max-w-7xl m-auto py-6">
      <NavLink to="/" className="flex items-center gap-x-1">
        <span>
          <LogoIcon />
        </span>
        <span className="text-primary-500 text-xl text-bold font-bold">
          Hêlane
        </span>
      </NavLink>
      <ul className="md:flex justify-around items-center w-1/3 hidden">
        <li>
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

      {/* Slide out navigation menu on mobile */}
      <div
        className={`flex flex-col gap-y-4 border-1 px-4 ${isMenuOpen ? "flex" : "hidden"
          }`}
      >
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-x-1">
            <span>
              <LogoIcon />
            </span>
            <span className="text-primary-500 text-xl text-bold font-bold">
              Hêlane
            </span>
          </NavLink>
        </div>
        <div className="flex flex-col gap-y-4">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? activeClasses : inactiveClasses;
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/search"
            className={({ isActive }) => {
              return isActive ? activeClasses : inactiveClasses;
            }}
          >
            Search
          </NavLink>
          <NavLink
            to="/listings"
            className={({ isActive }) => {
              return isActive ? activeClasses : inactiveClasses;
            }}
          >
            Listings
          </NavLink>
          <NavLink
            to="/agents"
            className={({ isActive }) => {
              return isActive ? activeClasses : inactiveClasses;
            }}
          >
            Agents
          </NavLink>
        </div>
      </div>

      <div className="flex gap-x-6">
        {isMedium ? (
          <>
            <Button onClick={() => routeHandler("primary")} variant="primary">
              Login
            </Button>

            <Button
              onClick={() => routeHandler("secondary")}
              variant="secondary"
            >
              Sign up
            </Button>
          </>
        ) : (
          <Button
            variant="secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <HamburgerIcon />
          </Button>
        )}
      </div>
    </nav>
  );
};
