import { motion } from "framer-motion";

export const EditProfile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="flex flex-col"
    >
      <h1 className="text-2xl font-semibold text-primaryText">Edit Profile</h1>
    </motion.div>
  );
};
