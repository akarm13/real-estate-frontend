import { Navigate, Outlet, RouteProps } from "react-router-dom";

type GuestRouteProps = RouteProps;

export const GuestRoute: React.FC<GuestRouteProps> = ({ ...routeProps }) => {
  const isAuthenticated = localStorage.getItem("token");
  if (!isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};
