import { Route,Routes } from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import WelcomePage from "./pages/welcome-page";
import PrivateRoute from "./components/private-route";
  
const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/"
          element={
            <PrivateRoute>
              <WelcomePage />
            </PrivateRoute>
          }
        />
      </Routes>
    );
  };

export default AppRoutes;
