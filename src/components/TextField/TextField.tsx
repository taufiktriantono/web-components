import { HTMLInputTypeAttribute } from "react";
import { classNames } from "../../utils/css";

import { Label } from "./components/Label";

import styles from "./TextField.module.scss";

export interface TextFieldProps {
  label: string;

  type: HTMLInputTypeAttribute;

  placeholder?: string;

  onClick?: () => void;
}

export function TextField({
  label,
  type,
  placeholder,
  onClick = () => {},
  ...props
}: TextFieldProps) {
  const className = classNames(styles.TextField);

  return (
    <>
      <Label label={label} />
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
