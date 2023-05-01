import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ErrorMessage } from "../../components/ErrorMessage";

import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectAuth } from "../../store/slices/auth";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangePasswordFormData } from "../../types/users";
import { useChangePasswordMutation } from "../../api/endpoints/user";
import { ErrorResponse } from "../../types/common";
import { toast } from "react-hot-toast";

const schema = yup.object().shape({
  currentPassword: yup.string().required("Current password is required"),
  newPassword: yup
    .string()
    .required("New password is required")
    .min(8, "New password must be at least 8 characters"),
  confirmNewPassword: yup
    .string()
    .required("Confirm password is required")
    .oneOf([yup.ref("newPassword")], "Passwords must match"),
});

export const AccountSettings = () => {
  const auth = useSelector(selectAuth);

  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm<ChangePasswordFormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: ChangePasswordFormData) => {
    try {
      await changePassword(data).unwrap();
      toast.success("Password changed successfully");

      setValue("currentPassword", "");
      setValue("newPassword", "");
      setValue("confirmNewPassword", "");
    } catch (error) {
      console.log(error);
      if ((error as ErrorResponse).data.statusCode === 401) {
        setError("currentPassword", {
          type: "manual",
          message: "Invalid current password",
        });
      } else {
        toast.error("Something went wrong");
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="flex flex-col"
    >
      <div className="flex flex-col gap-y-2">
        <h3 className="text-2xl font-semibold text-primaryText">
          Account Settings
        </h3>
        <h4 className="text-lg text-gray-600">Change your password.</h4>
      </div>

      <form
        className="my-5 flex max-w-[550px] flex-col gap-y-8 md:w-[592px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-y-2">
          <label htmlFor="email" className="font-semibold text-primaryText">
            Email
          </label>
          <Input id="email" value={auth.user?.email || ""} disabled />
          <p className="text-gray-600">You can't change your email.</p>
        </div>

        <div className="flex flex-col gap-y-2">
          <label htmlFor="phone" className="font-semibold text-primaryText">
            Phone Number
          </label>
          <Input id="phone" value={auth.user?.phone || ""} disabled />
          <p className="text-gray-600">You can't change your phone.</p>
        </div>

        <div className="flex flex-col gap-y-2">
          <label
            htmlFor="currentPassword"
            className="font-semibold text-primaryText"
          >
            Current Password
          </label>
          <Input
            {...register("currentPassword", {
              required: "Current password is required",
            })}
            id="currentPassword"
            type="password"
          />
          {errors.currentPassword && (
            <ErrorMessage>{errors.currentPassword.message}</ErrorMessage>
          )}
        </div>

        <div className="flex flex-col gap-y-2">
          <label
            htmlFor="newPassword"
            className="font-semibold text-primaryText"
          >
            New Password
          </label>
          <Input
            {...register("newPassword", {
              required: "New password is required",
            })}
            id="newPassword"
            type="password"
          />
          {errors.newPassword && (
            <ErrorMessage>{errors.newPassword.message}</ErrorMessage>
          )}
        </div>

        <div className="flex flex-col gap-y-2">
          <label
            htmlFor="confirmPassword"
            className="font-semibold text-primaryText"
          >
            Confirm Password
          </label>
          <Input
            {...register("confirmNewPassword", {
              required: "Confirm password is required",
            })}
            id="confirmPassword"
            type="password"
          />
          {errors.confirmNewPassword && (
            <ErrorMessage>{errors.confirmNewPassword.message}</ErrorMessage>
          )}
        </div>

        <div className="mt-4">
          <Button type="submit" variant="primary" isLoading={isLoading}>
            Change Password
          </Button>
        </div>
      </form>
    </motion.div>
  );
};
