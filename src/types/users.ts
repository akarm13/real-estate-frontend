export type EditUserFormData = {
  fullName?: string;
  email?: string;
  phone?: string;
  role?: string;
  avatar?: File | string;
  bio?: string;
  password?: string;
};

export type ChangePasswordFormData = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};
