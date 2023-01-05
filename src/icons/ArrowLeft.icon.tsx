import classNames from "classnames";
import React from "react";
import { IconProps } from "../models/icon";

const ArrowLeft: React.FC<IconProps> = (props) => {
  const classes = classNames("repos-icon", props.className);
  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="31"
      viewBox="0 0 30 31"
    >
      <path d="M20.3054 27.8382L7.96722 15.5L20.3054 3.16187L22.0327 4.92005L11.4528 15.5L22.0327 26.08L20.3054 27.8382Z" />
    </svg>
  );
};

export default ArrowLeft;
