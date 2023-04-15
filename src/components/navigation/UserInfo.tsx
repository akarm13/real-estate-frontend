import { useRef } from "react";
import { useDispatch } from "react-redux";
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
  User,
  UserCog,
  ChevronDown,
} from "lucide-react";

export const UserInfo = ({ data }: any) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const routeHandler = (change: String) => {
    if (change === "primary") {
      navigate("/login");
    } else if (change === "secondary") {
      navigate("/register");
    } else if (change == "logout") {
      localStorage.removeItem("token");
      dispatch(logout);
      navigate("/login");
    }
  };

  const ref = useRef(null);

  return (
    <div className="relative pr-12" ref={ref}>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center outline-none">
          <img
            src={data?.avatar}
            height={44}
            width={44}
            className="object-cover rounded-full mr-2"
          />
          <ChevronDown className="h-4 w-4" />
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem
            onSelect={() => console.log("Profile")}
            className="cursor-pointer text-base text-gray-800 hover:text-primaryText focus:bg-primary-50 px-4 py-2"
          >
            <User className="mr-2 h-4 w-4" />
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
  );
};
