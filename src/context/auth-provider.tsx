import React, { createContext, useContext } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";
import { LoginResponse, UserInfo } from "../models/auth.model";
import { localStorageData } from "../config/storage";
import AuthRepository from "../repositories/auth.respository";

interface AuthContextInterface {
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<any>;
  userInfo?: UserInfo;
}

export const AuthContext = createContext({} as AuthContextInterface);

type AuthProviderProps = {
  children?: React.ReactNode;
};
const initialValue = {
  refreshToken: null,
  token: null,
  maxAge: null,
};
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useLocalStorage<LoginResponse>("auth", initialValue);
  const activationToken = localStorageData.loadData('activation-token', '');
  // const { data: userInfo, refetch } = useUserInfo(activationToken ? activationToken : auth.token);
  // const { isLoggingIn, login } = useLogin();
  // const { isLoggingOut } = useLogout();

  const hasRole = (roles?: string[]) => {
    if (!roles || roles.length === 0) {
      return true;
    }
    // return roles.includes(userInfo.role);
    return true;
  };
  const handleLogin = async (email: string, password: string) => {
    const response = await AuthRepository.login({ email, password });
    setAuth(response);
    return response;
  };

  const handleLogout = async () => {
    setAuth(initialValue);
    const response = await AuthRepository.logout();
    return response;
  };

  return (
    <AuthContext.Provider
      value={{
        // isLoggingIn,
        // isLoggingOut,
        login: handleLogin,
        logout: handleLogout,
        // userInfo,
        // refetch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  return useContext(AuthContext);
}

export default AuthProvider;
 