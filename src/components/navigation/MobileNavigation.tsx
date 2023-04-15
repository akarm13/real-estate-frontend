import { useSelector } from "react-redux";
import { selectAuth, selectIsAuthenticated } from "../../store/slices/auth";

type Props = {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
};

export const MobileNavigation = ({ isMenuOpen, setIsMenuOpen }: Props) => {
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const { user } = useSelector(selectAuth);

  return (
    <div
      className={`min-h-screen fixed top-[74px] md:hidden z-20 overflow-y-hidden bg-white w-full flex flex-col gap-y-10 items-baseline px-4 py-8  ${
        isMenuOpen ? "left-0" : "-left-full"
      }`}
    >
      {/* <UserActionsMenu user={user} /> */}
    </div>
  );
};
