import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectAuth, selectIsAuthenticated } from "../../store/slices/auth";
import { AuthButtons } from "./AuthButtons";
import { NavigationLinks } from "./NavigationLinks";
import { UserInfo } from "./UserInfo";

export const DesktopNavigation = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { user } = useSelector(selectAuth);

  return (
    <div className="hidden md:flex md:gap-x-6">
      {isAuthenticated ? (
        <>
          <UserInfo data={user} />
        </>
      ) : (
        <AuthButtons />
      )}
      <NavigationLinks />
    </div>
  );
};
