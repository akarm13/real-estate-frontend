import { useSelector } from "react-redux";
import { selectAuth, selectIsAuthenticated } from "../../store/slices/auth";
import { AuthButtons } from "./AuthButtons";
import { NavigationLinks } from "./NavigationLinks";
import { UserInfo } from "./UserInfo";

export const DesktopNavigation = () => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { user } = useSelector(selectAuth);

  return (
    <div className="hidden md:flex md:flex-row md:gap-x-6 md:justify-between md:items-center w-full">
      <div className="flex-grow"></div>
      <NavigationLinks />
      <div className="flex-grow"></div>
      {isAuthenticated ? <UserInfo data={user} /> : <AuthButtons />}
    </div>
  );
};
