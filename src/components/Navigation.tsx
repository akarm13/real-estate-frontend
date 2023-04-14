import { useState } from "react";
import { useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { NavLink, useNavigate } from "react-router-dom";
import { ReactComponent as CloseIcon } from "../assets/icons/close.svg";
import { ReactComponent as HamburgerIcon } from "../assets/icons/hamburger-icon.svg";
import { ReactComponent as LogoIcon } from "../assets/icons/listing/logo.svg";
import { queries } from "../devices";
import { Button } from "./Button";
import { UserInfo } from "./navigation/UserInfo";

import { selectAuth, selectIsAuthenticated } from "../store/slices/auth";

export const Navigation = () => {
  const navigate = useNavigate();

  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { user } = useSelector(selectAuth);

  const activeClasses =
    "md:bg-primary-background md:text-primary-500 md:px-4 md:py-2 md:my-0 md:mx-0 md:rounded-lg font-medium";
  const inactiveClasses =
    "md:bg-white text-secondaryText md:px-4 md:py-2 md:my-0 md:mx-0 rounded-lg";

  const routeHandler = (change: String) => {
    if (change === "primary") {
      navigate("/login");
    } else if (change === "secondary") {
      navigate("/register");
    } else if (change == "logout") {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  const isMedium = useMediaQuery({ query: queries.md });

  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <nav className=" lg:mx-auto pt-4 lg:border-b-primary-background lg:border pb-4">
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
          <ul className="hidden md:flex md:justify-between"></ul>

          <div className="hidden md:flex md:gap-x-6">
            {isAuthenticated ? (
              <>
                <UserInfo data={user} />
              </>
            ) : (
              <div className="flex gap-x-2">
                <Button
                  onClick={() => routeHandler("primary")}
                  variant="primary"
                >
                  Login
                </Button>

                <Button
                  onClick={() => routeHandler("secondary")}
                  variant="secondary"
                >
                  Sign up
                </Button>
              </div>
            )}
          </div>
          <div className="md:hidden block">
            <HamburgerIcon onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>
        {/* for mobile */}
      </nav>
      <div
        className={`min-h-screen fixed top-0 md:hidden z-[10000] overflow-y-hidden bg-white  w-full flex flex-col gap-y-10 py-2  items-baseline px-4 duration-300  ease-in  ${
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
        <ul className=" flex flex-col  items-start  h-[300px] justify-between ">
          <li className="">
            <NavLink
              to="/"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
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
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={({ isActive }) => {
                return isActive ? activeClasses : inactiveClasses;
              }}
            >
              Search
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/agents"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={({ isActive }) => {
                return isActive ? activeClasses : inactiveClasses;
              }}
            >
              Agents
            </NavLink>
          </li>
          {isAuthenticated ? (
            <Button onClick={() => routeHandler("logout")} variant="secondary">
              Logout
            </Button>
          ) : (
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
          )}
        </ul>
      </div>
    </>
  );
};
