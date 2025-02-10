import React from "react";

const UserManagement = () => <div>User Management Module</div>;

const compnent = {
  routeProps: {
    path: "/user_management",
    element: <UserManagement />,
  },
  name: "User Management",
};

export default compnent;
