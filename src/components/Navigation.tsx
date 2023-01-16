import { NavLink } from "react-router-dom";
import { Button } from "./Button";
import { ReactComponent as LogoIcon } from "../assets/icons/listing/logo.svg";

export const Navigation = () => {
  const activeClasses =
    "bg-primary-background text-primary-500 px-5 py-3 rounded-md";
  const inactiveClasses = "bg-white text-secondaryText px-5 py-3 rounded-md";

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
      <ul className="flex justify-around items-center w-1/3 ">
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
      <div className="flex gap-x-6">
        <Button onClick={() => console.log("login")} variant="primary">
          Login
        </Button>
        <Button onClick={() => console.log("sign up")} variant="secondary">
          Sign up
        </Button>
      </div>
    </nav>
  );
};
