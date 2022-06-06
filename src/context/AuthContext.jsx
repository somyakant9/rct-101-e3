import React, { createContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

  const [isAuth , setIsAuth] = React.useState(false);

  
  return <AuthContext.Provider>{children}</AuthContext.Provider>;
};
