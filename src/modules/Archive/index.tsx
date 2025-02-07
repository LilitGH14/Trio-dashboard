import React, { lazy } from "react";

const Archive = lazy(() => import("./Archive.tsx"));

const component = {
  routeProps: {
    path: "/archive",
    element: <Archive />,
  },
  name: "Archive",
};

export default component;
