import React, { FC } from "react";
import * as styles from "./styles/card-root.css";
import { CardContentProps } from "./types";

export const CardContent: FC<CardContentProps> = ({ children }) => {
  return <div className={styles.cardContentStyle}>{children}</div>;
};
