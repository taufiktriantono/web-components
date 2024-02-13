import { HTMLInputTypeAttribute } from "react";
import { classNames } from "../../utils/css";

import { Label } from "./components/Label";

import styles from "./TextField.module.scss";

export interface TextFieldProps {
  type: HTMLInputTypeAttribute;

  placeholder?: string;

  onClick?: () => void;
}

export function TextField({
  type = "email",
  placeholder = "Your email",
  onClick = () => {},
  ...props
}: TextFieldProps) {
  const className = classNames(styles.TextField);

  return (
    <>
      <Label label="Email" />
      <input
        type={type}
        placeholder={placeholder}
        className={className}
        onClick={onClick}
        {...props}
      />
    </>
  );
}
