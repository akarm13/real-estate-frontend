import { motion } from "framer-motion";

export const AccountSettings = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>Account Settings Page</h1>
    </motion.div>
  );
};
