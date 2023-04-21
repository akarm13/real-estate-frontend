import { useDispatch, useSelector } from "react-redux";
import {
  logout,
  selectAuth,
  selectIsAuthenticated,
} from "../../store/slices/auth";
import { Link, NavLink } from "react-router-dom";
import { activeClasses, inactiveClasses } from "./NavigationLinks";
import { cn, toggleBodyOverflow } from "../../utils/common";
import {
  ListMinus,
  LogOut,
  Settings,
  Star,
  UserCog,
  UserIcon,
} from "lucide-react";
import { useEffect } from "react";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
};

export const MobileNavigation = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { user } = useSelector(selectAuth);
  const dispatch = useDispatch();

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    closeMenu();
    dispatch(logout());
    localStorage.removeItem("token");
  };

  useEffect(() => {
    toggleBodyOverflow(isMenuOpen);
  }, [isMenuOpen]);
  return (
    <div
      className={`fixed top-[74px] z-20 flex min-h-screen w-full flex-col items-start gap-y-8 bg-white px-8 py-8 md:hidden  ${
        isMenuOpen ? "left-0" : "-left-full"
      }`}
    >
      <div className="flex flex-col gap-y-4">
        <NavigationItem to="/" onClick={closeMenu}>
          Home
        </NavigationItem>
        <NavigationItem to="/search" onClick={closeMenu}>
          Search Listings
        </NavigationItem>
        <NavigationItem to="/agents" onClick={closeMenu}>
          Browse Agents
        </NavigationItem>
      </div>
      <hr className="w-full border-gray-100" />
      {isAuthenticated && (
        <div className="flex w-full flex-col gap-y-8">
          <div className="flex items-center gap-x-3">
            <img
              src={user?.avatar}
              height={40}
              width={40}
              className="mr-2 rounded-full object-cover"
            />
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold">{user?.fullName}</span>
            </div>
          </div>
          <Link
            to="/profile"
            className="flex items-center gap-x-2 font-medium text-gray-600"
            onClick={closeMenu}
          >
            <UserIcon className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </Link>
          <Link
            to="/profile"
            className="flex items-center gap-x-2 font-medium text-gray-600"
            onClick={closeMenu}
          >
            <UserCog className="mr-2 h-4 w-4" />
            <span>Edit Profile</span>
          </Link>
          <Link
            to="/profile"
            className="flex items-center gap-x-2 font-medium text-gray-600"
            onClick={closeMenu}
          >
            <ListMinus className="mr-2 h-4 w-4" />
            <span>My Listings</span>
          </Link>
          <Link
            to="/profile"
            className="flex items-center gap-x-2 font-medium text-gray-600"
            onClick={closeMenu}
          >
            <Star className="mr-2 h-4 w-4" />
            <span>My favorites</span>
          </Link>
          <Link
            to="/profile"
            className="flex items-center gap-x-2 font-medium text-gray-600"
            onClick={closeMenu}
          >
            <Settings className="mr-2 h-4 w-4" />
            <span>Account Settings</span>
          </Link>

          <hr className="w-full border-gray-100" />
          <Link
            to="/profile"
            className="flex items-center gap-x-2 font-medium text-gray-600"
            onClick={handleLogout}
          >
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </Link>
        </div>
      )}
    </div>
  );
};

type NavigationItemProps = {
  children: React.ReactNode;
  to: string;
  onClick?: () => void;
};

const NavigationItem = ({ children, to, onClick }: NavigationItemProps) => {
  return (
    <NavLink
      onClick={onClick}
      to={to}
      className={({ isActive }) => {
        return isActive
          ? cn(activeClasses, "text-lg font-bold")
          : cn(inactiveClasses, "text-lg font-bold text-gray-600");
      }}
    >
      {children}
    </NavLink>
  );
};
