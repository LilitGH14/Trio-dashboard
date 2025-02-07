import React, { useEffect, useState } from "react";
import modules from "../../../modules/index.tsx";
import { NAVIGATION_ICONS } from "../../constants/navigationIcons.tsx";
import { IRoute } from "../../models/route.ts";
import NavItem from "./NavItem.tsx";
import { useLocation } from "react-router-dom";
import "./styles.scss";

export const Sidebar = () => {
  const location = useLocation();

  const [currentTab, setCurrentTab] = useState("/dashboard");
  const [openedNavItem, setOpenedNavItem] = useState("dashboard");

  const openMenu = (navItem: string) => {
    setOpenedNavItem((prevVal) =>
      prevVal === navItem ? "dashboard" : navItem
    );
  };

  useEffect(() => {
    setCurrentTab(location.pathname ?? "/dashboard");
  }, []);

  return (
    <aside className="sidebar-wrapper">
      <div className="header">
        <img src="/assets/svg/logo/lg-logo.svg" alt="Logo" />
      </div>
      <nav className="navigation">
        {modules.map((module: IRoute) =>
          module.routeProps.children ? (
            <div key={module.name + "haschildren"}>
              <div
                className={`nav-item ${
                  currentTab === module.name ? "active" : ""
                }`}
              >
                <div
                  className="link"
                  onClick={() =>
                    openMenu(module.routeProps.path.replace("/", ""))
                  }
                  role="button"
                >
                  {NAVIGATION_ICONS[module.routeProps.path.replace("/", "")]}
                  {module.name}
                  <img
                    src="/assets/svg/general-icons/arrow.svg"
                    alt="Arrow"
                    className={`arrow ${
                      openedNavItem === module.routeProps.path.replace("/", "")
                        ? "active"
                        : ""
                    }`}
                  />
                </div>
              </div>
              <div
                className={`nav-dropdown ${
                  openedNavItem === module.routeProps.path.replace("/", "")
                    ? "active"
                    : ""
                }`}
              >
                {module.routeProps.children.map((m) => (
                  <NavItem
                    key={m.name + "routeProps"}
                    hasIcon={false}
                    name={m.name}
                    path={`${module.routeProps.path}${m.path}`}
                    currentTab={currentTab}
                    setCurrentTab={setCurrentTab}
                  />
                ))}
              </div>
            </div>
          ) : (
            <NavItem
              key={module.name + "unique"}
              hasIcon={true}
              name={module.name}
              path={module.routeProps.path}
              currentTab={currentTab}
              setCurrentTab={setCurrentTab}
            />
          )
        )}
      </nav>
    </aside>
  );
};
