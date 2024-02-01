import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(null);

  const login = (userData) => {
    
    setUserProfile(userData);
    
  };

  const logout = () => {
   
    setUserProfile(null);
    
  };

  return (
    <AuthContext.Provider value={{ userProfile, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
