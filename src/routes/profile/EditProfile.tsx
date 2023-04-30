import { motion } from "framer-motion";

export const EditProfile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <h1>Edit Profile Page</h1>
    </motion.div>
  );
};
