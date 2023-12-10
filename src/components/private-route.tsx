import { RouteProps, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/auth-provider";

const PrivateRoute: React.FC<RouteProps> = ({ element, ...rest }) => {
  const { userInfo } = useAuth();
  return userInfo ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;