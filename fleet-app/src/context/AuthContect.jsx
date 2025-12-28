import { createContext, useState } from "react";

export const AuthContect = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <AuthContect.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContect.Provider>
  );
};
