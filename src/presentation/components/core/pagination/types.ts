export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {}


export interface PaginationPagesProps extends React.HTMLAttributes<HTMLDivElement> {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemsPerPage: number;
  pageSize: number[]
}
