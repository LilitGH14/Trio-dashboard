import React from "react";
import IconButton from "../../shared/IconButton/index.tsx";
import Avatar from "../../shared/Avatar/index.tsx";
import SearchInput from "../../shared/SearchInput/index.tsx";
import "./styles.scss";

export const Header = () => {
  const handleChange = () => {};

  return (
    <div className="header-wrapper">
      {/* global search is not implemented */}
      <SearchInput
        handleChange={handleChange}
        handleBlur={handleChange}
        value={""}
        name={""}
        placeholder="Search..."
      />
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
  );
};
