import { yupResolver } from "@hookform/resolvers/yup";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { EditUserFormData } from "../../types/users";
import * as yup from "yup";
import { LoginPayload } from "../../types/listing";
import { Input } from "../../components/Input";
import { ErrorMessage } from "../../components/ErrorMessage";
import { useSelector } from "react-redux";
import { selectAuth } from "../../store/slices/auth";
import { Textarea } from "../../components/Textarea";
import { ChangeEvent, useEffect, useState } from "react";
import { Button } from "../../components/Button";
import { useUploadMutation } from "../../api/rtk-api";
import { useEditMeMutation } from "../../api/endpoints/user";
import { toast } from "react-hot-toast";
import { useSetUserFromLocalStorage } from "../../hooks/useSetUserFromLocalStorage";

const schema = yup.object().shape({
  fullName: yup.string().required("Full name is required"),
  bio: yup.string().optional(),
  avatar: yup
    .mixed()
    .test(
      "file-type",
      "Unsupported Format",
      (value) =>
        !value || ["image/jpg", "image/jpeg", "image/png"].includes(value.type)
    )
    .optional(),
});

type FileState = {
  preview: string | null;
  name: string;
};
export const EditProfile = () => {
  const navigate = useNavigate();

  const { user } = useSelector(selectAuth);

  const [currentAvatar, setCurrentAvatar] = useState<string>("");

  const [upload, { isLoading: isUploading }] = useUploadMutation();
  const [editMe, { isLoading: isUpdating }] = useEditMeMutation();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<EditUserFormData>({
    resolver: yupResolver(schema),
  });

  const [file, setFile] = useState<FileState>({
    preview: null,
    name: "",
  });

  const onSubmit = async (payload: EditUserFormData) => {
    if (!payload.avatar) {
      // Remove the avatar field from the payload if it's not present
      delete payload.avatar;
    }

    if (!payload.bio) {
      delete payload.bio;
    }

    if (!payload.fullName) {
      delete payload.fullName;
    }

    if (payload.avatar) {
      // Upload the avatar
      const formData = new FormData();

      formData.append("images", payload.avatar as Blob);

      const { urls } = await upload(formData).unwrap();

      // Set the avatar field to the first image url
      if (urls) {
        payload.avatar = urls[0];
      }
    }

    // Update the user
    const updatedUser = await editMe(payload).unwrap();

    toast.success("Profile updated successfully");
    if (updatedUser) {
      window.location.reload();
    }
  };

  useEffect(() => {
    if (user && user?.avatar && user?.avatar !== file.preview) {
      // Set the file preview
      setCurrentAvatar(user.avatar);
      setFile({
        preview: user.avatar,
        name: "",
      });
    }
  }, [user?.avatar]);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileList = event.target.files;
    if (!fileList) return;

    const newFile = Object.assign(fileList[0], {
      preview: URL.createObjectURL(fileList[0]),
    });

    setFile(newFile);
    setValue("avatar", newFile);
  };

  useEffect(() => {
    register("avatar");
  }, [register]);

  // Populate the form with the user data
  useEffect(() => {
    if (user) {
      setValue("fullName", user.fullName);
      setValue("bio", user.bio);
    }
  }, [user]);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="flex flex-col"
    >
      <div className="flex flex-col gap-y-2">
        <h3 className="text-2xl font-semibold text-primaryText">
          Edit Profile
        </h3>
        <h4 className="text-lg text-gray-600">
          Change your avatar, bio, and full name.
        </h4>
      </div>
      <form
        className="my-5 flex max-w-[550px] flex-col gap-y-2 md:w-[592px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-y-2">
          <label htmlFor="title" className="font-semibold text-primaryText">
            Full Name
          </label>
          <Input
            {...register("fullName")}
            id="title"
            defaultValue={user?.fullName}
          />
          <div className="min-h-[24px]">
            {errors.fullName && (
              <ErrorMessage>{errors.fullName?.message}</ErrorMessage>
            )}
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="bio" className="font-semibold text-primaryText">
            Bio
          </label>
          <Textarea {...register("bio")} id="bio" defaultValue={user?.bio} />
          <div className="min-h-[24px]">
            {errors.bio && <ErrorMessage>{errors.bio?.message}</ErrorMessage>}
          </div>
        </div>

        {/* Label for the avatar */}
        <div className="flex flex-col gap-y-2">
          <label htmlFor="avatar" className="font-semibold text-primaryText">
            Avatar
          </label>
        </div>

        <div className="flex items-center">
          <label className="avatar-container relative w-16 h-16 md:w-32 md:h-32 border border-gray-100 rounded-lg flex justify-center items-center cursor-pointer hover:border-primary-500 transition">
            <input
              type="file"
              className="hidden"
              accept="image/png, image/jpeg, image/webp"
              id="avatar"
              onChange={(e) => handleChange(e)}
            />
            {file.preview && (
              <>
                <img
                  src={file.preview}
                  className="img w-full h-full object-cover rounded-lg"
                  alt={file.name}
                />
              </>
            )}
          </label>
          <ErrorMessage>{errors.avatar?.message}</ErrorMessage>
        </div>
        <div className="mt-4">
          <Button
            type="submit"
            variant="primary"
            isLoading={isUploading || isUpdating}
          >
            Save Changes
          </Button>
        </div>
      </form>
    </motion.div>
  );
};
