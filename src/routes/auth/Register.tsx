import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as LogoIcon } from "../../assets/icons/listing/logo.svg";

import { ReactComponent as LoginIllustration } from "../../assets/illustrations/login-illustration.svg";
import { ReactComponent as SignIllustration } from "../../assets/illustrations/signup-illustration.svg";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUser } from "../../types/property";
import { Button } from "../../components/Button";

export const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const textStyle = 'font-bold text-base text-primaryText'
  const schema = yup.object().shape({
    fullname: yup.string().required(),
    email: yup.string().email().required(),
    agent: yup.string().required(),
    password: yup.string().min(5).max(20).required(),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUser>({
    resolver: yupResolver(schema),
  });

  const onsubmit = (data: SignUser) => {
    console.log(data);
  };

  return (
    <div className="h-screen ">
      <div className="md:flex h-full">
        <div className="flex-1 md:bg-primary-background ">
          <NavLink
            to="/"
            className="flex pl-4 pt-10  items-center gap-x-1 md:pl-32  md:pt-6"
          >
            <span>
              <LogoIcon />
            </span>
            <span className="text-primaryText text-xl text-bold font-bold">
              Hêlane
            </span>
          </NavLink>

          <div className=" hidden md:flex justify-center items-center w-3/5 mx-auto pt-10">
            <SignIllustration className="w-full" />
          </div>
        </div>

        <div className="flex-1   h-full bg-[#FEFEFF]  justify-center items-center">
          {/* login and sign up section */}
          <div className="flex flex-col   gap-1 my-16 md:my-10 md:mx-12  mx-5  ">
            <p className="md:text-2xl text-xl font-medium text-primaryText">
              Welcome to Hêlane
            </p>
            <h3 className="md:text-4xl text-2xl font-bold text-primaryText">
              New account
            </h3>

            <form
              className="my-5 flex  flex-col gap-4 max-w-[550px] md:max-w-[592px]"
              onSubmit={handleSubmit(onsubmit)}
            >
              <div className="flex flex-col  gap-2">
                <label htmlFor="fullname" className={textStyle}>
                  Full name
                </label>
                <input
                  {...register("fullname")}
                  className="bg-white border border-primary-background  h-14 ring-0    focus:outline-none focus:border-primary-500 font-bold  text-secondaryText  rounded-lg"
                  type="text"
                  name="fullname"
                  id="fullname"
                />
                <p className="text-sm text-red-700">
                  {errors.fullname?.message?.toString()}
                </p>
              </div>

              <div className="flex  flex-col  gap-2">
                <label htmlFor="email" className={textStyle}>
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

              <div className="flex flex-col  gap-2">
                <label htmlFor="agent" className={textStyle}>
                  Are you an agent?
                </label>

                <select
                  {...register("agent")}
                  className="bg-white border border-primary-background  h-14 ring-0 px-2    focus:outline-none focus:border-primary-500 font-bold  text-secondaryText  rounded-lg"
                  name="agent"
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
                  className="bg-white border border-primary-background  h-14 ring-0   focus:outline-none focus:border-primary-500 font-bold  text-secondaryText  rounded-lg"
                  type="password"
                  name="password"
                  id="password"
                />
                <p className="text-sm text-red-700">
                  {errors.password?.message?.toString()}
                </p>
              </div>

              <div className="flex flex-col  my-2 ">
                <Button onClick={() => console.log("primary")} variant="primary">
                  Create account
                </Button>
              </div>
            </form>


            <p className=" ">
              <span className="text-secondaryText text-base  font-normal pr-1.5 leading-6">Don’t have a Hêlane account yet?</span>
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
