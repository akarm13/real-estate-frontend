import { ListMinus, Settings, Star, UserCog, UserIcon } from "lucide-react";
import { useEffect } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";

export const Profile = () => {
  const getActiveClassName = ({ isActive }: any) =>
    isActive
      ? "text-primary-500 border-b-3 border-primary-500 flex items-center gap-x-4 mx-auto border-b pb-2"
      : "text-gray-600 hover:text-primary-500 flex items-center gap-x-4 mx-auto border-b-3 border-gray-300 pb-2";

  const navigate = useNavigate();

  const location = useLocation();
  // Automatically redirect to the edit profile page
  useEffect(() => {
    if (location.pathname === "/profile") navigate("/profile/edit");
  }, [navigate, location.pathname]);
  return (
    <div className="w-full pt-32">
      <div className="container mx-auto flex flex-col">
        <nav className="flex items-center gap-x-8 mx-auto border-b border-gray-100 overflow-x-scroll w-full lg:w-auto flex-nowrap">
          <NavLink to="edit" className={getActiveClassName}>
            <UserCog className="h-6 w-6" />
            <span className="whitespace-nowrap">Edit Profile</span>
          </NavLink>
          <NavLink to="listings" className={getActiveClassName}>
            <ListMinus className="h-6 w-6" />
            <span className="whitespace-nowrap">My Listings</span>
          </NavLink>
          <NavLink to="favorites" className={getActiveClassName}>
            <Star className="h-6 w-6" />
            <span className="whitespace-nowrap">My Favorites</span>
          </NavLink>
          <NavLink to="settings" className={getActiveClassName}>
            <Settings className="h-6 w-6" />
            <span className="whitespace-nowrap">Account Settings</span>
          </NavLink>
        </nav>

        <div className="mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
