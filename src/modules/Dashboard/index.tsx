import React, { lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard.tsx"));

const component = {
  routeProps: {
    path: "/dashboard",
    exact: true,
    element: <Dashboard />,
  },
  name: "Dashboard",
};

export default component;
