import { ReactNode } from "react";
import * as styles from "./styles.css";

export default function CentralLayout({ children }: { children: ReactNode }) {
  return (
    <main className={styles.centralsLayoutStyle}>
        {children}
    </main>
  );
}
