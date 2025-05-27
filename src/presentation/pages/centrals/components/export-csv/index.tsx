import { Button } from "@components/core/button";
import { convertToCSV } from "@components/utils/services/convertToCSV";
import { FC } from "react";
import { CentralExportCSVProps } from "./types";

export const CentralsExportCSV: FC<CentralExportCSVProps> = ( {centrals, models}) => {
  const handleExport = () => {
    const csv = convertToCSV(centrals, models);
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = url;
    link.download = `centrals-export-${new Date().toISOString().split("T")[0]}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return <Button onClick={handleExport}>Exportar CSV</Button>;
};
