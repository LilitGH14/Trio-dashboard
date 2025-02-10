import React, { useEffect, useState } from "react";
import modules from "../../../modules/index.tsx";
import { NAVIGATION_ICONS } from "../../constants/navigationIcons.tsx";
import { IRoute } from "../../models/route.ts";
import NavItem from "./NavItem.tsx";
import { useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/useAppSelector.tsx";
import IconButton from "../../shared/IconButton/index.tsx";
import { useDispatch } from "react-redux";
import { setOpenSidbar } from "../../redux/slices/generalSlice.ts";
import "./styles.scss";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const { openSidebar } = useAppSelector((state) => state.general);

  const [currentTab, setCurrentTab] = useState("");
  const [openedNavItem, setOpenedNavItem] = useState("dashboard");

  const openMenu = (navItem: string) => {
    setOpenedNavItem((prevVal) =>
      prevVal === navItem ? "dashboard" : navItem
    );

    dispatch(setOpenSidbar());
  };

  const selectNavItem = (tab: string) => {
    setCurrentTab(tab);
    dispatch(setOpenSidbar());
  };

  useEffect(() => {
    setCurrentTab(location.pathname ?? "/dashboard");
  }, []);

  return (
    <aside className={`sidebar-wrapper ${openSidebar ? "open" : "closed"}`}>
      <div className="header">
        <img src="/assets/svg/logo/lg-logo.svg" alt="Logo" />
        <div className="menu-btn-wrapper">
          <IconButton
            disabled={false}
            icon={"/assets/svg/general-icons/menu.svg"}
            name={"menu"}
            onClick={() => dispatch(setOpenSidbar())}
          />
        </div>
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
                    setCurrentTab={selectNavItem}
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
              setCurrentTab={selectNavItem}
            />
          )
        )}
      </nav>
    </aside>
  );
};
