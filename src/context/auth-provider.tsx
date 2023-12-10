import React, { createContext, useEffect } from "react";
import { useLocalStorage } from "../hooks/use-local-storage";
import { Auth, UserInfo } from "../models/auth.model";
import AuthRepository from "../repositories/auth.repository";
import { useNavigate } from "react-router-dom";

interface AuthContextInterface {
  login: (email: string, password: string) => Promise<any>;
  logout: () => Promise<any>;
  userInfo?: UserInfo;
  isLoggingIn: boolean;
}

export const AuthContext = createContext({} as AuthContextInterface);

type AuthProviderProps = {
  children?: React.ReactNode;
};
const initialValue = {
  refreshToken: null,
  token: null,
};
const AuthProvider = ({ children }: AuthProviderProps) => {
  const [auth, setAuth] = useLocalStorage<Auth>("auth", initialValue);
  const [userInfo, setUserInfo] = useLocalStorage<UserInfo | undefined>("me", undefined);
  const [isLoggingIn, setIsLoggingIn] = React.useState(false);
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    setIsLoggingIn(true);
    try {
      const response = await AuthRepository.login({ email, password });
      setAuth(response);
    }
    catch(error:any){
      if(error.response.data.message){
        alert(error.response.data.message);
      }
    }
    setIsLoggingIn(false);
  };

  useEffect(()=>{
    if(auth.token){
       AuthRepository.me().then((me)=>{
         setUserInfo(me);
         navigate("/");
       })
    } else {
      setUserInfo(undefined);
    }
    // eslint-disable-next-line
  }, [auth])


  const handleLogout = async () => {
    const response = await AuthRepository.logout();
    setAuth(initialValue);
    return response;
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggingIn,
        login: handleLogin,
        logout: handleLogout,
        userInfo,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
