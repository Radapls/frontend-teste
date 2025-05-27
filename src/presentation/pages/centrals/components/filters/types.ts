export interface CentralFiltersProps {
  centralName: string;
  modelName: string;
  orderBy: string;
  handleCentralName: (data: string) => void;
  handleModelName: (data: string) => void;
  handleOrdeyBy: (data: string) => void;
}


export type OrderBy = "Crescente" | "Descrescente"