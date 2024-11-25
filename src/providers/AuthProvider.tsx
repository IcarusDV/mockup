import React from "react";
import { createContext, ReactNode, useState } from "react";

interface Props {
  children: ReactNode;
}

interface IAuthContext {
  userToken: string | null;
  login: (token: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<IAuthContext>({
  login: () => {},
  logout: () => {},
  userToken: null,
});

export default function AuthProvider({ children }: Props) {
  const [userToken, setUserToken] = useState<string | null>(null);

  function login(token: string) {
    setUserToken(token);
  }

  function logout() {
    setUserToken(null);
  }

  return (
    <AuthContext.Provider value={{ userToken, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
