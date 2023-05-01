import { ListMinus, Settings, Star, UserCog, UserIcon } from "lucide-react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { selectAuth } from "../../store/slices/auth";

export const Profile = () => {
  const getActiveClassName = ({ isActive }: any) =>
    isActive
      ? "text-primary-500 border-b-2 border-primary-500 flex items-center gap-x-4 pb-2"
      : "text-gray-600 hover:text-primary-500 flex items-center gap-x-4 border-b-3 border-gray-300 pb-2";

  const navigate = useNavigate();

  const location = useLocation();
  // Automatically redirect to the edit profile page
  useEffect(() => {
    if (location.pathname === "/profile") navigate("/profile/edit");
  }, [navigate, location.pathname]);

  const { user } = useSelector(selectAuth);

  return (
    <div className="w-full pt-32">
      <div className="container mx-auto flex flex-col">
        <div className="flex items-center gap-x-4 mb-8 lg:w-3/4 xl:w-4/6 mx-auto mt-8">
          <img
            src={user?.avatar || "/path/to/default/avatar.png"}
            alt="User Avatar"
            className="h-16 w-16 rounded-full object-cover"
          />
          <div className="text-lg">
            <h1 className="font-semibold">{user?.fullName}</h1>
            <p className="text-gray-500 capitalize">{user?.role}</p>
          </div>
        </div>
        <nav className="flex items-center gap-x-8 mb-8 lg:w-3/4 xl:w-4/6 mx-auto mt-8 border-gray-100 overflow-x-scroll">
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

        <div className="w-full lg:w-3/4 xl:w-4/6 mx-auto mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
