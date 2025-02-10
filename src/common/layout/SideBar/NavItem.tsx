import React from "react";
import { Link } from "react-router-dom";
import { NAVIGATION_ICONS } from "../../constants/navigationIcons.tsx";

interface INavItemProps {
  path: string;
  name: string;
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  hasIcon: boolean;
}

const NavItem = ({
  path,
  name,
  currentTab,
  setCurrentTab,
  hasIcon,
}: INavItemProps) => {
  return (
    <div
      className={`nav-item ${currentTab === path ? "active" : ""}`}
      onClick={() => setCurrentTab(path)}
      role="button"
    >
      <Link className="link" to={path}>
        {hasIcon &&
          NAVIGATION_ICONS[name.toLocaleLowerCase().replace(" ", "_")]}
        {name}
      </Link>
    </div>
  );
};
export default NavItem;
