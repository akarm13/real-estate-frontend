import { ListMinus, Settings, Star, UserCog, UserIcon } from "lucide-react";
import { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export const Profile = () => {
  const getActiveClassName = ({ isActive }: any) =>
    isActive
      ? "text-primary-500 border-b-3 border-primary-500 flex items-center gap-x-4 mx-auto border-b pb-2"
      : "text-gray-600 hover:text-primary-500 flex items-center gap-x-4 mx-auto border-b-3 border-gray-300 pb-2";

  const navigate = useNavigate();

  // Automatically redirect to the edit profile page
  useEffect(() => {
    navigate("/profile/edit");
  }, [navigate]);
  return (
    <div className="w-full pt-32">
      <div className="container mx-auto flex w-full flex-col">
        <nav className="flex items-center gap-x-8 mx-auto border-b border-gray-100">
          <NavLink to="edit" className={getActiveClassName}>
            <UserCog className="h-6 w-6" />
            <span>Edit Profile</span>
          </NavLink>
          <NavLink to="listings" className={getActiveClassName}>
            <ListMinus className="h-6 w-6" />
            <span>My Listings</span>
          </NavLink>
          <NavLink to="favorites" className={getActiveClassName}>
            <Star className="h-6 w-6" />
            <span>My Favorites</span>
          </NavLink>
          <NavLink to="settings" className={getActiveClassName}>
            <Settings className="h-6 w-6" />
            <span>Account Settings</span>
          </NavLink>
        </nav>

        <div className="mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
