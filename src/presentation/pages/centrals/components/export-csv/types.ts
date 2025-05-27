import { Central, Model } from "@domain/central/models/central";

export interface CentralExportCSVProps {
  centrals: Central[];
  models: Model[];
}
