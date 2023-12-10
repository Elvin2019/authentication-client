import { RouteProps, Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/use-auth";

const PrivateRoute: React.FC<RouteProps> = () => {
  const { userInfo } = useAuth();
  return userInfo ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;