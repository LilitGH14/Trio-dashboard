export interface User {}

export interface IAuthContext {
  permissions: string[];
  setUserPermissions: (permission: string[]) => void;
  resetUserPermissions: () => void;
}
