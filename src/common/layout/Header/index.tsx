import React from "react";
import IconButton from "../../shared/IconButton/index.tsx";
import Avatar from "../../shared/Avatar/index.tsx";
import SearchInput from "../../shared/SearchInput/index.tsx";
import { useDispatch } from "react-redux";
import { setOpenSidbar } from "../../redux/slices/generalSlice.ts";
import "./styles.scss";

export const Header = () => {
  const dispatch = useDispatch();

  return (
    <div className="header-wrapper">
      <div className="menu-btn-wrapper">
        <IconButton
          disabled={false}
          icon={"/assets/svg/general-icons/menu.svg"}
          name={"menu"}
          onClick={() => dispatch(setOpenSidbar())}
        />
      </div>
      <SearchInput
        handleChange={() => {}}
        handleBlur={() => {}}
        value={""}
        name={""}
        placeholder="Search..."
      />
      <div className="right-icons">
        <IconButton
          disabled={false}
          icon="/assets/svg/general-icons/bell.svg"
          name="Bell icon"
        />
        <Avatar
          src="https://i.pinimg.com/736x/f4/c7/1c/f4c71c4050c8b01d4ec39ab4185bd23a.jpg"
          name="User avatar"
        />
      </div>
    </div>
  );
};
