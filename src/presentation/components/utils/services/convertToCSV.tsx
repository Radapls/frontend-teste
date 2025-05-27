import { Central, Model } from "@domain/central/models/central";

export const convertToCSV = (centrals: Central[], models: Model[]) => {
  const headers = ["Nome", "MAC", "Modelo"];
  const rows = centrals.map((central) => {
    const modelName = models.find((m: { id: string; }) => m.id === central.modelId)?.name || "";
    return [central.name, central.mac, modelName];
  });

  return [headers.join(","), ...rows.map((r: string[]) => r.join(","))].join("\n");
}