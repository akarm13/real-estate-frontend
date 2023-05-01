import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../../store/slices/auth";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../DropdownMenu";

import {
  ListMinus,
  LogOut,
  Settings,
  Star,
  User as UserIcon,
  UserCog,
  ChevronDown,
  Plus,
} from "lucide-react";
import { Button } from "../Button";
import { selectIsGetMeLoading } from "../../api/endpoints/user";
import { Skeleton } from "../skeleton/Skeleton";
import { User } from "../../types/auth";
import { LinkButton } from "../LinkButton";
import { Notifications } from "../notifications/Notifications";

type Props = {
  user: User | null;
};

export const UserActionsMenu = ({ user }: Props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const routeHandler = (change: String) => {
    if (change === "primary") {
      navigate("/login");
    } else if (change === "secondary") {
      navigate("/register");
    } else if (change == "logout") {
      localStorage.removeItem("token");
      dispatch(logout());
      navigate("/login");
    }
  };

  const ref = useRef(null);

  const isGetMeLoading = useSelector(selectIsGetMeLoading);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isGetMeLoading !== undefined) {
      setIsLoading(isGetMeLoading);
    }
  });

  if (isLoading && !user)
    return (
      <div className="relative hidden min-w-[176px] gap-x-2 md:flex" ref={ref}>
        <Skeleton className="h-11 w-36 rounded-lg" />
      </div>
    );

  return (
    <div className="relative hidden min-w-[176px] gap-x-2 md:flex" ref={ref}>
      {user ? (
        <div className="flex items-center gap-x-8">
          <Notifications />
          <LinkButton
            variant="primary"
            className="flex items-center gap-x-2"
            to="/listings/create"
          >
            <Plus className="h-6 w-6" />
          </LinkButton>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="flex items-center outline-none">
              <img
                src={user?.avatar}
                height={44}
                width={44}
                className="mr-2 rounded-full object-cover"
              />
              <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent
              side="bottom"
              align="end"
              alignOffset={-24}
              sideOffset={8}
            >
              <DropdownMenuItem
                onSelect={() => navigate("/profile")}
                className="cursor-pointer px-4 py-2 text-base text-gray-800 hover:text-primaryText focus:bg-primary-50"
              >
                <UserIcon className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onSelect={() => navigate("/profile/edit")}
                className="cursor-pointer px-4 py-2 text-base text-gray-800 hover:text-primaryText focus:bg-primary-50"
              >
                <UserCog className="mr-2 h-4 w-4" />
                <span>Edit profile</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onSelect={() => navigate("/profile/listings")}
                className="cursor-pointer px-4 py-2 text-base text-gray-800 hover:text-primaryText focus:bg-primary-50"
              >
                <ListMinus className="mr-2 h-4 w-4" />
                <span>My listings</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => navigate("/profile/favorites")}
                className="cursor-pointer px-4 py-2 text-base text-gray-800 hover:text-primaryText focus:bg-primary-50"
              >
                <Star className="mr-2 h-4 w-4" />
                <span>My favorites</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onSelect={() => navigate("/profile/settings")}
                className="cursor-pointer px-4 py-2 text-base text-gray-800 hover:text-primaryText focus:bg-primary-50"
              >
                <Settings className="mr-2 h-4 w-4" />
                <span>Account Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onSelect={() => routeHandler("logout")}
                className="cursor-pointer px-4 py-2 text-base text-gray-800 hover:text-primaryText focus:bg-primary-50"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      ) : (
        user === null &&
        isGetMeLoading === false && (
          <>
            <Button onClick={() => routeHandler("primary")} variant="primary">
              Login
            </Button>

            <Button
              onClick={() => routeHandler("secondary")}
              variant="secondary"
            >
              Sign up
            </Button>
          </>
        )
      )}
    </div>
  );
};
