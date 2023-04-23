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
      <nav className="fixed z-20 w-full border border-b-primary-background bg-white pt-4 pb-4 lg:mx-auto">
        <div className="mx-auto flex items-center justify-between px-4 md:container md:flex md:items-center md:justify-between">
          <div className="flex w-full items-center justify-between md:w-auto">
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
                className="mr-4 items-center py-[6px] px-2 md:hidden"
                onClick={handleAddClick}
              >
                <Plus className="text-white" />
              </Button>
            ) : (
              <Link
                to="/login"
                className="py[6px] mr-4 items-center px-2 text-secondaryText md:hidden"
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
