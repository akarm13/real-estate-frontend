import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectAuth } from "../../store/slices/auth";

export const EditProfile = () => {
  const { user } = useSelector(selectAuth);

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <div className="flex items-center gap-x-4">
        <img
          src={user?.avatar || "/path/to/default/avatar.png"}
          alt="User Avatar"
          className="h-16 w-16 rounded-full object-cover"
        />
        <div className="text-lg">
          <h1 className="font-semibold">{user?.fullName}</h1>
          <p className="text-gray-500 capitalize">{user?.role}</p>
        </div>
      </div>
    </motion.div>
  );
};
