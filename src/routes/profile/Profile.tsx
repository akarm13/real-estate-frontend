import { Link, Outlet } from "react-router-dom";

export const Profile = () => {
  return (
    <div className="w-full pt-24">
      <div className="container mx-auto flex w-full flex-col">
        <h1>Profile Page</h1>
        <nav>
          <ul className="flex items-center gap-x-4">
            <li>
              <Link to="edit">Edit Profile</Link>
            </li>
            <li>
              <Link to="listings">My Listings</Link>
            </li>
            <li>
              <Link to="favorites">My Favorites</Link>
            </li>
            <li>
              <Link to="settings">Account Settings</Link>
            </li>
          </ul>
        </nav>

        <div className="mt-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
