import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./app-routes";
import AuthProvider from "./context/auth-provider";
import * as Sentry from "@sentry/react";

function App() {
  return (
    <BrowserRouter>
      <Sentry.ErrorBoundary fallback={<>An error has occurred</>}>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </Sentry.ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
