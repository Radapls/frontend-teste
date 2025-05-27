import { CentralsPageFilters } from "./filters/central-filters";
import { CentralPagePagination } from "./pagination/central-pagination";
import { CentralsPageTable } from "./table/centrals-table";
import { CentralsPageRoot } from "./root/centrals-root";
import { CentralsTitle } from "./title";
import { CentralsExportCSV } from "./export-csv";

export const Centrals = {
    Root: CentralsPageRoot,
    Title: CentralsTitle,
    Filters: CentralsPageFilters,
    Table: CentralsPageTable,
    Pagination: CentralPagePagination,
    Export: CentralsExportCSV
}