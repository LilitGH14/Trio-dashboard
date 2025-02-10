import React, { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { MainLayout } from "../layout/MainLayout.tsx";
import UserPermissions from "./UserPermissions.tsx";
import { useAppSelector } from "../hooks/useAppSelector.tsx";

interface IAuthenticationProps {
  children: ReactNode;
  route: string;
}
const Authentication = ({ children, route }: IAuthenticationProps) => {
  const { user } = useAppSelector((state) => state.general);

  if (!user?.permissions) {
    return <Navigate to="/login" />;
  }

  return (
    <MainLayout>
      <UserPermissions
        permissions={user.permissions}
        route={route}
        children={children}
      />
    </MainLayout>
  );
};

export default Authentication;
