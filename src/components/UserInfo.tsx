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


        <div className="dropdown inline-block relative pr-10">
            <button className=" text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1  w-10 h-10 rounded-full ">
                    <img src={data?.avatar} className="w-full h-full" alt="" />
                </span>
                <DropDown onClick={() => setBool(!bool)} />
            </button>
            <ul className={`dropdown-menu absolute  ${bool ? 'block' : 'hidden'} text-gray-700   pt-1`}>
                <li className=""><span>Profile</span></li>
                <li className=""><span>Edit profile</span></li>
                <li className=""><span>My listings</span></li>
                <li className=""><span>My favorites</span></li>
                <li className=""><span>Account Settings</span></li>

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