import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as LogoIcon } from "../../assets/icons/listing/logo.svg";

import { ReactComponent as LoginIllustration } from "../../assets/illustrations/login-illustration.svg";
import { ReactComponent as SignIllustration } from "../../assets/illustrations/signup-illustration.svg";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button } from "../../components/Button";
import { RegisterPayload } from "../../types/listing";
import { useRegisterMutation } from "../../api/endpoints/auth";
import { useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";
export const Register = () => {
  const textStyle = "font-bold text-base text-primaryText";

  const [createUser, { data, isLoading, isError }] = useRegisterMutation();

  console.log(useRegisterMutation());

  const navigate = useNavigate();

  const schema = yup.object().shape({
    fullName: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.string().required(),
    role: yup.string().required(),
    password: yup.string().min(5).max(20).required(),
  });

  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm<RegisterPayload>({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (data?.token) {
      localStorage.setItem("token", data?.token);
      navigate("/");
    }
  }, [data]);
  const onsubmit = async (user: RegisterPayload) => {
    if (user.role === "YES") {
      user.role = "agent";

      createUser(user);
    } else {
      user.role = "user";
      createUser(user);
    }
  };

  return (
    <div className="h-screen ">
      <div className="h-full md:flex">
        <div className="flex-1 md:bg-primary-background ">
          <NavLink
            to="/"
            className="flex items-center gap-x-1  pl-4 pt-10 md:pl-32  md:pt-6"
          >
            <span>
              <LogoIcon />
            </span>
            <span className="text-bold text-xl font-bold text-primaryText">
              Hêlane
            </span>
          </NavLink>

          <div className=" mx-auto hidden w-3/5 items-center justify-center pt-10 md:flex">
            <SignIllustration className="w-full" />
          </div>
        </div>

        <div className="h-full   flex-1 items-center  justify-center bg-[#FEFEFF]">
          {/* login and sign up section */}
          <div className="my-16 mx-5   flex flex-col gap-1 md:my-10  md:mx-12  ">
            <p className="text-xl font-medium text-primaryText md:text-2xl">
              Welcome to Hêlane
            </p>
            <h3 className="text-2xl font-bold text-primaryText md:text-4xl">
              New account
            </h3>

            <form
              className="my-5 flex  max-w-[550px] flex-col gap-4 md:max-w-[592px]"
              onSubmit={handleSubmit(onsubmit)}
            >
              <div className="flex flex-col  gap-2">
                <label htmlFor="fullName" className={textStyle}>
                  Full name
                </label>
                <input
                  {...register("fullName")}
                  className="h-14 rounded-lg border  border-primary-background bg-white    font-bold text-secondaryText ring-0  focus:border-primary-500  focus:outline-none"
                  type="text"
                  name="fullName"
                  id="fullName"
                />
                <p className="text-sm text-red-700">
                  {errors.fullName?.message?.toString()}
                </p>
              </div>

              <div className="flex  flex-col  gap-2">
                <label htmlFor="email" className={textStyle}>
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
              <div className="flex  flex-col  gap-2">
                <label htmlFor="phone" className={textStyle}>
                  Phone Number
                </label>
                <input
                  {...register("phone")}
                  className="h-14 rounded-lg border  border-primary-background bg-white    font-bold text-secondaryText ring-0  focus:border-primary-500  focus:outline-none"
                  type="text"
                  name="phone"
                  id="phone"
                />
                <p className="text-sm text-red-700">
                  {errors.phone?.message?.toString()}
                </p>
              </div>

              <div className="flex flex-col  gap-2">
                <label htmlFor="agent" className={textStyle}>
                  Are you an agent?
                </label>

                <select
                  {...register("role")}
                  className="h-14 rounded-lg border  border-primary-background bg-white px-2    font-bold text-secondaryText ring-0  focus:border-primary-500  focus:outline-none"
                  name="role"
                  id="agent"
                >
                  <option className="capitalize">YES</option>
                  <option className="capitalize">NO</option>
                </select>

                <p className="text-sm text-red-700">
                  {errors.agent?.message?.toString()}
                </p>
              </div>

              <div className="flex flex-col  gap-2">
                <label htmlFor="password" className={textStyle}>
                  Password
                </label>
                <input
                  {...register("password")}
                  className="h-14 rounded-lg border  border-primary-background bg-white   font-bold text-secondaryText ring-0  focus:border-primary-500  focus:outline-none"
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
                    User with this email or phone already exists
                  </span>
                )}
              </div>
              <div className="my-2 flex  flex-col ">
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
                    "Create account"
                  )}
                </Button>
              </div>
            </form>

            <p className=" ">
              <span className="pr-1.5 text-base  font-normal leading-6 text-secondaryText">
                Don’t have a Hêlane account yet?
              </span>
              <NavLink to="/login" className="text-primaryText">
                Login
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
