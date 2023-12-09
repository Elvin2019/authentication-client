import { Route, Routes } from "react-router-dom";
import Login from "./login";
import Register from "./register";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Routes>
  );

};

export default AppRoutes;
