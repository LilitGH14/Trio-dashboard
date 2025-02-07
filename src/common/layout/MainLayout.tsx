import React from "react";
import { Sidebar } from "./SideBar/index.tsx";
import { Header } from "./Header/index.tsx";
import "./styles.scss";

export const MainLayout = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="layout-content">
        <Header />
        <main className="page-wrapper">{children}</main>
      </div>
    </div>
  );
};
