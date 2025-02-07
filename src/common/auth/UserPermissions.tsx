import { ReactNode } from "react";

interface IUserPermissionsProps {
  children: ReactNode;
  route: string;
  permissions: string[];
}

const UserPermissions = ({
  route,
  children,
  permissions,
}: IUserPermissionsProps) => {
  const isAllowed = permissions.includes(route);

  return isAllowed ? children : "Not allowed";
};

export default UserPermissions;
