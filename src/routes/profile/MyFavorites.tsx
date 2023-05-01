import { motion } from "framer-motion";

export const MyFavorites = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <h1 className="text-2xl font-semibold text-primaryText">My Favorites</h1>
    </motion.div>
  );
};
