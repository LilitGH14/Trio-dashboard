import { createContext, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";
import { IAuthContext } from "../models/user.ts";

export const AuthContext = createContext<IAuthContext>({
  permissions: [],
  setUserPermissions: () => {},
  resetUserPermissions: () => {},
});

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const redirectPath = location.state?.path || "/dashboard";

  const [permissions, setPermissions] = useState<string[]>([]);

  const setUserPermissions = (permissions: string[]): void => {
    if (!!permissions) {
      setPermissions(permissions);
    } else {
      setPermissions(["dashboard"]);
    }

    navigate(redirectPath, { replace: true });
  };

  const resetUserPermissions = (): void => {
    setPermissions([]);
  };

  return (
    <AuthContext.Provider value={{ permissions, setUserPermissions, resetUserPermissions }}>
      {children}
    </AuthContext.Provider>
  );
};
