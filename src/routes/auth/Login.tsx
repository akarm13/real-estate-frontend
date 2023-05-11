import {
  NavLink,
  Navigate,
  useNavigate,
  useNavigation,
} from "react-router-dom";

import { ReactComponent as LogoIcon } from "../../assets/icons/listing/logo.svg";

import { ReactComponent as LoginIllustration } from "../../assets/illustrations/login-illustration.svg";

import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";
import * as yup from "yup";
import { useLoginMutation } from "../../api/endpoints/auth";
import { useLazyGetMeQuery } from "../../api/endpoints/user";
import { Button } from "../../components/Button";
import { LoginPayload } from "../../types/listing";
import { setToken, setUser } from "../../store/slices/auth";
import { isValidToken } from "../../utils/auth";

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),

  password: yup
    .string()
    .required("Password is required")
    .min(5, "Password must be at least 5 characters long")
    .max(20),
});

export const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({
    resolver: yupResolver(schema),
  });

  const [login, { isLoading: isLoginLoading, isError: isLoginError }] =
    useLoginMutation();
  const [getMe, { isLoading: isGetMeLoading }] = useLazyGetMeQuery();

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const onSubmit = async (payload: LoginPayload) => {
    try {
      const response = await login(payload).unwrap();
      const token = response.token;
      const getMeResponse = await getMe(token).unwrap();

      if (getMeResponse && token) {
        localStorage.setItem("token", token);
        dispatch(setUser(getMeResponse));
        dispatch(setToken(token));

        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="h-screen">
      <div className="h-full md:flex">
        <div className="flex-1 md:bg-primary-background ">
          <NavLink
            to="/"
            className="flex items-center gap-x-1  pl-4 pt-10 md:pl-32  md:pt-6"
          >
            <span>
              <LogoIcon />
            </span>
            <span className="text-bold text-xl font-bold text-primary-900">
              Hêlane
            </span>
          </NavLink>

          <div className="mx-auto hidden w-3/5 items-center justify-center pt-10 md:flex">
            <LoginIllustration className="w-full" />
          </div>
        </div>
        <div className="flex-1  items-center justify-center">
          <div className="my-16 mx-5   flex flex-col gap-14 md:my-20  md:mx-12">
            <div className="flex flex-col gap-y-4">
              <p className="text-xl font-medium text-primaryText  lg:text-2xl">
                Welcome to Hêlane
              </p>
              <h3 className="text-2xl font-bold text-primaryText lg:text-4xl">
                Login to your account
              </h3>
            </div>
            <div className="">
              <form
                className="my-5 flex max-w-[550px] flex-col gap-4 md:w-[592px]"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col  gap-4">
                  <label
                    htmlFor="email"
                    className="text-base font-bold text-primaryText "
                  >
                    Email address
                  </label>
                  <input
                    {...register("email")}
                    className="h-14 rounded-lg border  border-primary-background bg-white    font-bold text-secondaryText ring-0  focus:border-primary-500  focus:outline-none"
                    type="email"
                    name="email"
                    id="email"
                  />
                  <p className="text-sm text-red-700">
                    {errors.email?.message?.toString()}
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <label
                    htmlFor="password"
                    className="text-base font-bold text-primaryText"
                  >
                    Password
                  </label>
                  <input
                    {...register("password")}
                    className="h-14 rounded-lg border  border-primary-background bg-white    font-bold text-secondaryText ring-0  focus:border-primary-500  focus:outline-none"
                    type="password"
                    name="password"
                    id="password"
                  />
                  <p className="text-sm text-red-700">
                    {errors.password?.message?.toString()}
                  </p>
                </div>
                <div className="flex flex-col  gap-2">
                  {isLoginError && (
                    <span className="text-sm text-red-700">
                      Invalid email or password
                    </span>
                  )}
                </div>
                <div className="my-2 flex  flex-col ">
                  <Button
                    onClick={() => console.log("primary")}
                    type="submit"
                    variant="primary"
                    isLoading={isLoginLoading || isGetMeLoading}
                  >
                    Login
                  </Button>
                </div>
              </form>

              <p className=" ">
                <span className="pr-1.5 text-base  font-normal leading-6 text-secondaryText">
                  Don’t have a Hêlane account yet?
                </span>
                <NavLink to="/register" className="text-primaryText">
                  Sign up
                </NavLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
