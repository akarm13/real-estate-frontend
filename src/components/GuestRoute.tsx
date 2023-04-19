import { Navigate, Outlet, Route, RouteProps } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth } from "../store/slices/auth";
import { isValidToken } from "../utils/auth";

type GuestRouteProps = RouteProps;

export const GuestRoute: React.FC<GuestRouteProps> = ({ ...routeProps }) => {
  const isAuthenticated = localStorage.getItem("token");
  if (!isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};
