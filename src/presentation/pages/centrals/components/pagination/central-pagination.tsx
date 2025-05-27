import { Pagination } from "@components/core/pagination";
import { Select } from "@components/core/select";
import { FC } from "react";
import { CentralsPaginationProps } from "./types";

export const CentralPagePagination: FC<CentralsPaginationProps> = ({
  filteredCentrals,
  itemsPerPage,
  pageSizeOptions,
  currentPage,
  handleCurrentPage,
  handleItemsPerPage,
}) => {
  return (
    <>
      {filteredCentrals.length ? (
        <Pagination.Root>
          <Select.Field<number>
            id="pageSize"
            label="Itens por página"
            options={pageSizeOptions}
            withPlaceholder={false}
            value={itemsPerPage}
            itemsPerPage={itemsPerPage}
            getOptionValue={(opt) => opt}
            getOptionLabel={(opt) => opt.toString()}
            onSelectChange={(value) => {
              handleItemsPerPage(value);
              handleCurrentPage(1);
            }}
          />
          <Pagination.Pages
            pageSize={pageSizeOptions}
            currentPage={currentPage}
            totalPages={Math.ceil(filteredCentrals.length / itemsPerPage)}
            onPageChange={handleCurrentPage}
            itemsPerPage={itemsPerPage}
          />
        </Pagination.Root>
      ) : (
        <></>
      )}
    </>
  );
};
