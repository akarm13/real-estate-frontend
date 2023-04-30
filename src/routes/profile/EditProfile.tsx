import { motion } from "framer-motion";

export const EditProfile = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Edit Profile Page</h1>
    </motion.div>
  );
};
