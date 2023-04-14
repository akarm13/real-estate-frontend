import { useState } from "react";
import { ReactComponent as DropDown } from "../../assets/icons/dropdown.svg";
import { Button } from "../Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/auth";

export const UserInfo = ({ data }: any) => {
  const [isNavigationOpen, setIsNavigationOpen] = useState<boolean>(false);

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

  return (
    <div className="dropdown inline-block relative pr-12">
      <button
        className=" text-gray-700  font-semibold py-2 px-4 rounded inline-flex items-center"
        onClick={() => setIsNavigationOpen(!isNavigationOpen)}
      >
        <span className="mr-1  w-10 h-10 rounded-full ">
          <img src={data?.avatar} className="w-full h-full" alt="" />
        </span>
        <DropDown />
      </button>
      <ul
        className={`dropdown-menu absolute right-0 ${
          isNavigationOpen ? "block" : "hidden"
        } cursor-pointer w-60 flex flex-col gap-3 text-primary-500 font-medium z-10 bg-white  shadow-xl py-4 px-5  pt-0 `}
      >
        <li className="hover:bg-slate-50 p-[7px] ">
          <span className="">Profile</span>
        </li>
        <hr></hr>
        <li className="hover:bg-slate-50 p-[3px]">
          <span className="">Edit profile</span>
        </li>
        <hr></hr>
        <li className="hover:bg-slate-50 p-[3px]">
          <span className="">My listings</span>
        </li>
        <li className="hover:bg-slate-50 p-[3px]">
          <span className="">My favorites</span>
        </li>
        <hr></hr>
        <li className="hover:bg-slate-50 p-[3px]">
          <span className="">Account Settings</span>
        </li>
        <hr></hr>

        <li className="">
          <Button onClick={() => routeHandler("logout")} variant="secondary">
            Logout
          </Button>
        </li>
      </ul>
    </div>
  );
};
