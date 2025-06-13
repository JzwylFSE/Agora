// src/context/AuthContext.js
"use client";

import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [isAuthenticated, setIsAuthenticated] = useState(undefined);

  useEffect(() => {
    // Check for existing token on initial load (client-side only)
    const token =
      typeof window !== "undefined" ? localStorage.getItem("access") : null;
    setIsAuthenticated(!!token);
  }, []);

  if (isAuthenticated === undefined) {
    // Optionally show a loading spinner or nothing until auth state is known
    return null;
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
