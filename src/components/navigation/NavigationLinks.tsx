import { NavLink } from "react-router-dom";

export const activeClasses =
  "md:bg-primary-background md:text-primary-500 md:px-4 md:py-2 md:my-0 md:mx-0 md:rounded-lg font-medium";
export const inactiveClasses =
  "md:bg-white text-secondaryText md:px-4 md:py-2 md:my-0 md:mx-0 rounded-lg";

export const NavigationLinks = () => {
  return (
    <ul className="hidden md:flex  md:flex-row md:justify-center flex-grow">
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
          to="/agents"
          className={({ isActive }) => {
            return isActive ? activeClasses : inactiveClasses;
          }}
        >
          Agents
        </NavLink>
      </li>
    </ul>
  );
};
