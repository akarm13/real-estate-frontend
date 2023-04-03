import { NavLink, useNavigate } from "react-router-dom";

import { ReactComponent as LogoIcon } from "../../assets/icons/listing/logo.svg";

import { ReactComponent as LoginIllustration } from "../../assets/illustrations/login-illustration.svg";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button";
import { LoginPayload } from "../../types/listing";
import { useLoginMutation } from "../../api/endpoints/auth";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";

export const Login = () => {
  const schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().min(5).max(20).required(),
  });

  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm<LoginPayload>({
    resolver: yupResolver(schema),
  });

  const [loginUser, { data, isLoading, isError }] = useLoginMutation();

  const navigate = useNavigate();

  useEffect(() => {
    console.log(data);

    if (data?.token) {
      localStorage.setItem("token", data?.token);
      navigate("/");
    }
  }, [data]);
  const onSubmit = (data: LoginPayload) => {
    loginUser(data);
  };

  return (
    <div className="h-screen">
      <div className="md:flex h-full">
        <div className="flex-1 md:bg-primary-background ">
          <NavLink
            to="/"
            className="flex pl-4 pt-10  items-center gap-x-1 md:pl-32  md:pt-6"
          >
            <span>
              <LogoIcon />
            </span>
            <span className="text-primary-900 text-xl text-bold font-bold">
              Hêlane
            </span>
          </NavLink>

          <div className="hidden md:flex justify-center items-center w-3/5 mx-auto pt-10">
            <LoginIllustration className="w-full" />
          </div>
        </div>
        <div className="flex-1  justify-center items-center">
          {/* login and sign up section */}
          <div className="flex flex-col   gap-14 my-16 md:my-20 md:mx-12  mx-5">
            <div className="flex flex-col gap-y-4">
              <p className="lg:text-2xl text-xl font-medium  text-primaryText">
                Welcome to Hêlane
              </p>
              <h3 className="lg:text-4xl text-2xl font-bold text-primaryText">
                Login to your account
              </h3>
            </div>
            <div className="">
              <form
                className="my-5 flex flex-col gap-4 max-w-[550px] md:w-[592px]"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div className="flex flex-col  gap-4">
                  <label
                    htmlFor="email"
                    className="font-bold text-base text-primaryText "
                  >
                    Email address
                  </label>
                  <input
                    {...register("email")}
                    className="bg-white border border-primary-background  h-14 ring-0    focus:outline-none focus:border-primary-500 font-bold  text-secondaryText  rounded-lg"
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
                    className="font-bold text-base text-primaryText"
                  >
                    Password
                  </label>
                  <input
                    {...register("password")}
                    className="bg-white border border-primary-background  h-14 ring-0    focus:outline-none focus:border-primary-500 font-bold  text-secondaryText  rounded-lg"
                    type="password"
                    name="password"
                    id="password"
                  />
                  <p className="text-sm text-red-700">
                    {errors.password?.message?.toString()}
                  </p>
                </div>
                <div className="flex flex-col  gap-2">
                  {isError && (
                    <span className="text-sm text-red-700">
                      {" "}
                      this email does not exit or the password may be wrong
                    </span>
                  )}
                </div>
                <div className="flex flex-col  my-2 ">
                  <Button
                    onClick={() => console.log("primary")}
                    variant="primary"
                  >
                    {isLoading ? (
                      <ClipLoader
                        color="#36d7b7"
                        aria-label="Loading Spinner"
                        data-testid="loader"
                      />
                    ) : (
                      "Login"
                    )}
                  </Button>
                </div>
              </form>

              <p className=" ">
                <span className="text-secondaryText text-base  font-normal pr-1.5 leading-6">
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
