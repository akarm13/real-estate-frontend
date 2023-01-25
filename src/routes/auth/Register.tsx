import { NavLink, useLocation, useNavigate } from "react-router-dom";

import { ReactComponent as LogoIcon } from "../../assets/icons/listing/logo.svg";

import { ReactComponent as LoginIllustration } from "../../assets/illustrations/login-illustration.svg";
import { ReactComponent as SignIllustration } from "../../assets/illustrations/signup-illustration.svg";

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup'

export const Register = ({ setUser }: any) => {
  const location = useLocation();
  const navigate = useNavigate();


  const schema = yup.object().shape({
    fullname: yup.string().required(),
    email: yup.string().email().required(),
    agent: yup.string().required(),
    password: yup.string().min(5).max(20).required()
  })


  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });


  const onsubmit = (data: any) => {


    setUser(data);

    navigate('/login')


  }

  return (
    <div className="h-screen ">
      <div className="md:flex h-full">
        <div className="flex-1 md:bg-primary-background ">
          <NavLink to="/" className="flex pl-4 pt-10  items-center gap-x-1 md:pl-32  md:pt-6">
            <span>
              <LogoIcon />
            </span>
            <span className="text-primary-900 text-xl text-bold font-bold">
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

            <p className="md:text-2xl text-xl font-medium text-primary-900">Welcome to Hêlane</p>
            <h3 className="md:text-4xl text-2xl font-bold text-primary-900">New account</h3>

            <form className="my-5 flex  flex-col gap-4" onSubmit={handleSubmit(onsubmit)}>
              <div className="flex flex-col max-w-[550px] md:max-w-[592px] gap-2">

                <label htmlFor="fullname" className="font-bold text-base" >Full name</label>
                <input {...register("fullname")} className="bg-white border  px-3   py-[10px] focus:outline-primary-400  text-secondaryText font-bold  rounded-lg" type="text" name="fullname" id="fullname" />
                <p className="text-sm text-red-700">{errors.fullname?.message?.toString()}</p>
              </div>



              <div className="flex  flex-col max-w-[550px] md:max-w-[592px] gap-2">

                <label htmlFor="email" className="font-bold text-base" >Email address</label>
                <input {...register("email")} className="bg-white border  px-3   py-[10px] focus:outline-primary-400  text-secondaryText font-bold   rounded-lg" type="email" name="email" id="email" />
                <p className="text-sm text-red-700">{errors.email?.message?.toString()}</p>
              </div>

              <div className="flex flex-col max-w-[550px] md:max-w-[592px] gap-2">

                <label htmlFor="agent" className="font-bold text-base" >Are you an agent?</label>
                <input {...register("agent")} className="bg-white border  px-3   py-[10px] focus:outline-primary-400  text-secondaryText font-bold  rounded-lg" type="text" name="agent" id="agent" />
                <p className="text-sm text-red-700">{errors.agent?.message?.toString()}</p>
              </div>

              <div className="flex flex-col max-w-[550px] md:max-w-[592px] gap-2">

                <label htmlFor="password" className="font-bold text-base" >Password</label>
                <input {...register("password")} className="bg-white border  px-3   py-[10px] focus:outline-primary-400  text-secondaryText font-bold  rounded-lg" type="password" name="password" id="password" />
                <p className="text-sm text-red-700">{errors.password?.message?.toString()}</p>
              </div>


              <div className="flex flex-col max-w-[550px] md:max-w-[592px] my-5 ">

                <button type="submit" className="bg-primary-500 text-white py-2 rounded-lg">Create account</button>

              </div>




            </form>

            <p className="text-secondaryText text-xs md:text-base ">
              Already have an account?

              <NavLink to="/login" className="text-primary-600">

                Sing in

              </NavLink>
            </p>




          </div>
        </div>
      </div>
    </div>
  );
};
