import React, { createContext, useContext, useEffect } from "react";
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
    console.log({auth})
    if(auth.token){
       AuthRepository.me().then((me)=>{
         setUserInfo(me);
         navigate("/");
       })
    } else {
      setUserInfo(undefined);
    }
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
        // isLoggingOut,
        login: handleLogin,
        logout: handleLogout,
        userInfo,
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
 