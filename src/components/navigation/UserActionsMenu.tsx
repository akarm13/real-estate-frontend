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
      <div className="hidden md:flex relative gap-x-2 min-w-[176px]" ref={ref}>
        <Skeleton className="h-11 w-36 rounded-lg" />
      </div>
    );

  return (
    <div className="hidden md:flex relative gap-x-2 min-w-[176px]" ref={ref}>
      {user ? (
        <div className="flex items-center gap-x-8">
          <Button
            variant="primary"
            className="flex items-center gap-x-2"
            onClick={() => console.log("TODO: Add listing")}
          >
            <Plus className="h-6 w-6" />
          </Button>
          <DropdownMenu modal={false}>
            <DropdownMenuTrigger className="flex items-center outline-none">
              <img
                src={user?.avatar}
                height={44}
                width={44}
                className="object-cover rounded-full mr-2"
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
                onSelect={() => console.log("Profile")}
                className="cursor-pointer text-base text-gray-800 hover:text-primaryText focus:bg-primary-50 px-4 py-2"
              >
                <UserIcon className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onSelect={() => console.log("Edit profile")}
                className="cursor-pointer text-base text-gray-800 hover:text-primaryText focus:bg-primary-50 px-4 py-2"
              >
                <UserCog className="mr-2 h-4 w-4" />
                <span>Edit profile</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onSelect={() => console.log("My listings")}
                className="cursor-pointer text-base text-gray-800 hover:text-primaryText focus:bg-primary-50 px-4 py-2"
              >
                <ListMinus className="mr-2 h-4 w-4" />
                <span>My listings</span>
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => console.log("My favorites")}
                className="cursor-pointer text-base text-gray-800 hover:text-primaryText focus:bg-primary-50 px-4 py-2"
              >
                <Star className="mr-2 h-4 w-4" />
                <span>My favorites</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onSelect={() => console.log("Account Settings")}
                className="cursor-pointer text-base text-gray-800 hover:text-primaryText focus:bg-primary-50 px-4 py-2"
              >
                <Settings className="mr-2 h-4 w-4" />
                <span>Account Settings</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onSelect={() => routeHandler("logout")}
                className="cursor-pointer text-base text-gray-800 hover:text-primaryText focus:bg-primary-50 px-4 py-2"
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
