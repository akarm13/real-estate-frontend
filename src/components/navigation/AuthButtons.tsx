import { useNavigate } from "react-router-dom";
import { Button } from "../Button";

export const AuthButtons = () => {
  const navigate = useNavigate();

  const routeHandler = (change: String) => {
    if (change === "primary") {
      navigate("/login");
    } else if (change === "secondary") {
      navigate("/register");
    } else if (change == "logout") {
      localStorage.removeItem("token");
      navigate("/");
    }
  };

  return (
    <div className="flex gap-x-2">
      <Button onClick={() => routeHandler("primary")} variant="primary">
        Login
      </Button>

      <Button onClick={() => routeHandler("secondary")} variant="secondary">
        Sign up
      </Button>
    </div>
  );
};
