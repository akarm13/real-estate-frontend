import { motion } from "framer-motion";

export const MyFavorites = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
    >
      <h1>My Favorites Page</h1>
    </motion.div>
  );
};
