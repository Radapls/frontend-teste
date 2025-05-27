import { FC } from "react";
import { Button } from "../button";
import { PaginationPagesProps } from "./types";
import * as styles from './styles/pagination-root.css'

export const PaginationPages: FC<PaginationPagesProps> = ({onPageChange, currentPage, totalPages}) => {
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    if (totalPages === 0 ) return <></>
  return (
    <div className={styles.pagination}>
      <Button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Anterior
      </Button>

      {pages.map((page) => (
        <Button
          key={page}
          onClick={() => onPageChange(page)}
          disabled={page === currentPage}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </Button>
      ))}

      <Button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Proxima
      </Button>
    </div>
  );
};
