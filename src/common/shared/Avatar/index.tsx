import React from "react";
import "./styles.scss";

interface IAvatarProps {
  src: string;
  name: string;
}

const Avatar = ({ src, name }: IAvatarProps) => {
  return (
    <div className="avatar-wrapper">
      <img src={src} alt={name} />
    </div>
  );
};
export default Avatar;
