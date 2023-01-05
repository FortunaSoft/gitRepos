import classNames from "classnames";
import React from "react";
import { IconProps } from "../models/icon";

const StarsIcon: React.FC<IconProps> = (props) => {
  const classes = classNames("repos-icon", props.className);
  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="30"
      viewBox="0 0 30 30"
    >
      <path d="M12 22.75L9.03125 16.2188L2.5 13.25L9.03125 10.2813L12 3.75L14.9688 10.2813L21.5 13.25L14.9688 16.2188L12 22.75ZM22.75 26.25L21.2812 22.9688L18 21.5L21.2812 20L22.75 16.75L24.25 20L27.5 21.5L24.25 22.9688L22.75 26.25Z" />
    </svg>
  );
};

export default StarsIcon;
