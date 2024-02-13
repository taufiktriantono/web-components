import { classNames } from "../../../utils/css";

import styles from "./Label.module.scss";

export interface LabelProps {
  label: string;
}

export function Label({ label = "Example", ...props }: LabelProps) {
  const className = classNames(styles.Label);
  return (
    <label className={className} {...props}>
      {label}
    </label>
  );
}
