import React, { ReactNode } from "react";
import classNames from "classnames";

import "./Button.styles.scss";

export type ButtonProps = {
  className?: string;
  styleType?: "solid" | "transparent-duke";
  iconPosition?: "left" | "right";
  icon?: ReactNode;
  onClick?: () => void;
} & React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

const Button: React.FC<ButtonProps> = (props) => {
  const {
    className,
    icon,
    iconPosition = "left",
    styleType = "solid",
    children,
    onClick,
    ...rest
  } = props;
  const classes = classNames(
    "repos-button",
    `repos-button--${styleType}`,
    `repos-button-icon--${iconPosition}`,
    className
  );

  return (
    <button {...rest} className={classes} onClick={onClick}>
      {icon && iconPosition === "left" && icon}
      {children && <p className="repos-button__label">{children}</p>}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};

export default Button;
