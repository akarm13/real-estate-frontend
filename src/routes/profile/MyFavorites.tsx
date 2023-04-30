import { motion } from "framer-motion";

export const MyFavorites = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h1>My Favorites Page</h1>
    </motion.div>
  );
};
