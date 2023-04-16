import { Menu, Plus, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as LogoWithText } from "../assets/logo-with-text.svg";
import { selectAuth } from "../store/slices/auth";
import { Button } from "./Button";
import { MobileNavigation } from "./navigation/MobileNavigation";
import { NavigationLinks } from "./navigation/NavigationLinks";
import { UserActionsMenu } from "./navigation/UserActionsMenu";
import { selectIsGetMeLoading } from "../api/endpoints/user";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { user } = useSelector(selectAuth);
  const [isLoading, setIsLoading] = useState(true);

  const isGetMeLoading = useSelector(selectIsGetMeLoading);

  useEffect(() => {
    if (isGetMeLoading !== undefined) {
      setIsLoading(isGetMeLoading);
    }
  }, [isGetMeLoading, isLoading]);

  const handleAddClick = () => {
    console.log("Add");
  };
  return (
    <>
      <nav className="lg:mx-auto pt-4 border border-b-primary-background pb-4 fixed bg-white w-full z-20">
        <div className="flex justify-between items-center md:flex md:justify-between md:items-center md:w-[calc(100%-4rem)] px-4 mx-auto">
          <div className="flex items-center justify-between w-full md:w-auto">
            <Button
              variant="none"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <XIcon /> : <Menu />}
            </Button>
            <div className="flex justify-center md:w-auto">
              <NavLink to="/" className="flex items-center gap-x-1">
                <LogoWithText className="h-8 sm:h-12" />
              </NavLink>
            </div>
            {user ? (
              <Button
                variant="primary"
                className="mr-4 md:hidden items-center py-[6px] px-2"
                onClick={handleAddClick}
              >
                <Plus className="text-white" />
              </Button>
            ) : (
              <Link
                to="/login"
                className="px-2 py[6px] items-center md:hidden mr-4 text-secondaryText"
              >
                Sign in
              </Link>
            )}
          </div>
          <NavigationLinks />
          <UserActionsMenu user={user} />
          <MobileNavigation
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>
      </nav>
    </>
  );
};
