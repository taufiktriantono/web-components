import { ReactNode } from "react";
import { classNames } from "../../utils/css";

import styles from "./Button.module.scss";

export interface ButtonProps {
  primary?: boolean;

  label: string;

  backgroundColor?: string;

  boxShadow?: boolean;

  onClick?: () => void;

  children?: ReactNode;
}

export function Button({
  primary = true,
  label = "Button",
  backgroundColor = "#10b981",
  boxShadow = true,
  onClick = () => {},
  children,
  ...props
}: ButtonProps) {
  const className = classNames(styles.Button);

  return (
    <button
      type="button"
      className={className}
      style={{
        backgroundColor: primary ? backgroundColor : "#fff",
        boxShadow: boxShadow
          ? "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)"
          : "",
      }}
      onClick={onClick}
      {...props}
    >
      {children ? children : label}
    </button>
  );
}
