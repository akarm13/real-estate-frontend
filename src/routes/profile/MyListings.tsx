import { motion } from "framer-motion";

export const MyListings = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>My Listings Page</h1>
    </motion.div>
  );
};
