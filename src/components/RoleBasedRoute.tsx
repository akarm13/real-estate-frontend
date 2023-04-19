import { Route, Navigate, RouteProps, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { isValidToken } from "../utils/auth";
import { selectAuth } from "../store/slices/auth";
import { Role } from "../types/auth";

type RoleBasedRouteProps = RouteProps & {
  allowedRoles: Role[];
};

export const RoleBasedRoute: React.FC<RoleBasedRouteProps> = ({
  allowedRoles,
  ...routeProps
}) => {
  const { user, token } = useSelector(selectAuth);
  const isAuthenticated = isValidToken(token);

  if (isAuthenticated && user && allowedRoles.includes(user.role)) {
    return <Outlet />;
  } else {
    return <Navigate to="/login" />;
  }
};
