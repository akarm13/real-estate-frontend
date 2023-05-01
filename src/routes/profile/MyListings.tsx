import { motion } from "framer-motion";

export const MyListings = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <h1 className="text-2xl font-semibold text-primaryText">My Listings</h1>
    </motion.div>
  );
};
