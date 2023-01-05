import classNames from "classnames";
import React from "react";
import { IconProps } from "../models/icon";

const ArrowRight: React.FC<IconProps> = (props) => {
  const classes = classNames("repos-icon", props.className);
  return (
    <svg
      className={classes}
      xmlns="http://www.w3.org/2000/svg"
      width="30"
      height="31"
      viewBox="0 0 30 31"
    >
      <path d="M9.69462 3.16189L22.0328 15.5L9.69462 27.8382L7.96728 26.08L18.5472 15.5L7.96728 4.92007L9.69462 3.16189Z" />
    </svg>
  );
};

export default ArrowRight;
