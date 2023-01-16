import { NavLink } from "react-router-dom";
import { Button } from "./Button";

export const Navigation = () => {
  const activeClasses =
    "bg-primary-background text-primary-500 px-5 py-3 rounded-md";
  const inactiveClasses = "bg-white text-secondaryText px-5 py-3 rounded-md";

  return (
    <nav className="flex justify-between items-center max-w-7xl m-auto py-6">
      <div className="">
        <NavLink to="/" className="flex items-center gap-x-1">
          <span>
            <svg
              width="26"
              height="26"
              viewBox="0 0 26 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M23.6324 21.9762L24.9642 13.931C25.1562 12.5526 24.5563 10.7101 23.6324 9.83806L15.3177 2.04604C14.0339 0.836453 11.9582 0.836453 10.6864 2.03198L2.37163 9.83806C1.43577 10.7101 0.835858 12.5526 1.03983 13.931L2.80354 23.3827C3.09149 25.3799 4.67525 25.1267 6.40299 25.1267H16.0015M10.3333 25.1371L15 20.4704M15 25.1371L17.6667 27.8038M14.3333 25.1371H21"
                stroke="#5B4DFF"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
          <span className="text-primary-500 text-xl text-bold font-bold">
            Hêlane
          </span>
        </NavLink>
      </div>
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
