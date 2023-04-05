import { useState } from "react";
import { ReactComponent as DropDown } from "../assets/icons/dropdown.svg";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";


export const UserInfo = ({ data }: any) => {
    const [bool, setBool] = useState<boolean>(false)
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(
        localStorage.getItem("token")
    );
    const routeHandler = (change: String) => {
        if (change === "primary") {
            navigate("/login");
        } else if (change === "secondary") {
            navigate("/register");
        } else if (change == "logout") {
            localStorage.removeItem("token");
            navigate('/')
            setBool(false)
            setToken("");
        }
    };

    return (


        <div className="dropdown inline-block relative pr-12">
            <button className=" text-gray-700  font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1  w-10 h-10 rounded-full ">
                    <img src={data?.avatar} className="w-full h-full" alt="" />
                </span>
                <DropDown onClick={() => setBool(!bool)} />
            </button>
            <ul className={`dropdown-menu absolute right-0 ${bool ? 'block' : 'hidden'} cursor-pointer w-60 flex flex-col gap-3 text-gray-700 bg-[#FEFEFF] py-10 px-5  pt-0 `}>
                <li className="hover:bg-slate-50 p-[3px]"><span>Profile</span></li>
                <hr></hr>
                <li className="hover:bg-slate-50 p-[3px]"><span>Edit profile</span></li>
                <hr></hr>
                <li className="hover:bg-slate-50 p-[3px]"><span>My listings</span></li>
                <li className="hover:bg-slate-50 p-[3px]"><span>My favorites</span></li>
                <hr></hr>
                <li className="hover:bg-slate-50 p-[3px]"><span>Account Settings</span></li>
                <hr></hr>

                <li className="">  <Button
                    onClick={() => routeHandler("logout")}
                    variant="secondary"
                >
                    Logout
                </Button></li>
            </ul>
        </div>


    )
}