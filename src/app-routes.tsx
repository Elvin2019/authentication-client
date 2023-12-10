import { Route, Routes } from "react-router-dom";
import Login from "./pages/login.page";
import Register from "./pages/register.page";
import WelcomePage from "./pages/welcome.page";
import PrivateRoute from "./components/private-route";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<WelcomePage />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AppRoutes;
