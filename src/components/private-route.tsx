import { Route, RouteProps, Navigate } from "react-router-dom";
import { useAuth } from "../context/auth-provider";

type PrivateRouteProps = {
  roles?: string[];
} & RouteProps;

const PrivateRoute = ({
  children,
  roles,
  ...routeProps
}: PrivateRouteProps) => {
  const { userInfo } = useAuth();

  if (!userInfo) {
    return <Navigate to="/login" replace />;
  }

  return <Route {...routeProps}>{children}</Route>;
};

export default PrivateRoute;