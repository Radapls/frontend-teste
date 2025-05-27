import { Central, Model } from "@domain/central/models/central";

export interface CentralsTableProps {
  paginatedCentrals: Central[];
  models: Model[];
  handleDelete: (data: Central) => void;
  handleDialogOpen: (data: boolean) => void;
  handleEdit: (data: Central) => void;
}