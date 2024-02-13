import { ReactNode } from "react";

import styles from "./Card.module.scss";

export interface CartProps {
  children: ReactNode;
}

export function Card({ children, ...props }: CartProps) {
  return (
    <div className={styles.Card} {...props}>
      {children}
    </div>
  );
}
