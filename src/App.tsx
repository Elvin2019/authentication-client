import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app-routes";
import AuthProvider from "./context/auth-provider";
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
