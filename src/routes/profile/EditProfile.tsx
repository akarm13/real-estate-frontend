import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectAuth } from "../../store/slices/auth";

export const EditProfile = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      className="flex flex-col"
    >
      Edit profile
    </motion.div>
  );
};
