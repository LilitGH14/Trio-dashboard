import React from "react";
import MobileFilters from "./components/mobile/index.tsx";
import DesktopFilters from "./components/desktop/index.tsx";
import "./styles.scss";

const Filters = () => {
  if (window.innerWidth > 768) {
    return <DesktopFilters />;
  }

  return <MobileFilters />;
};

export default Filters;
