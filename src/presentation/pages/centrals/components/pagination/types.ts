import { Central, Model } from "@domain/central/models/central";

export interface CentralsPaginationProps {
  filteredCentrals: Central[];
  pageSizeOptions: number[];
  itemsPerPage: number;
  currentPage: number;
  handleCurrentPage: (data: number) => void;
  handleItemsPerPage: (data: number) => void;
}
