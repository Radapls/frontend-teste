import { PaginationProps } from "./types";
import * as styles from "./styles/pagination-root.css";

export const PaginationRoot: React.FC<PaginationProps> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <div className={styles.paginationContainer} {...rest}>
      {children}
    </div>
  );
};
