import { EmptyState } from "@components/core/empty-state";
import { ScrollArea } from "@components/core/scroll-area";
import { Table } from "@components/core/table";
import { PenIcon } from "@components/icons/pen";
import { TrashIcon } from "@components/icons/trash";
import { FC } from "react";
import { CentralsTableProps } from "./types";

export const CentralsPageTable: FC<CentralsTableProps> = ({
  paginatedCentrals,
  models,
  handleEdit,
  handleDelete,
  handleDialogOpen,
}) => {
  return (
    <>
      {paginatedCentrals.length > 0 ? (
        <ScrollArea size="small">
          <Table.Root>
            <Table.Body>
              <Table.Row>
                <Table.Header>Nome</Table.Header>
                <Table.Header>MAC</Table.Header>
                <Table.Header>Model ID</Table.Header>
                <Table.Header>Nome do modelo</Table.Header>
                <Table.Header>Ações</Table.Header>
              </Table.Row>
              {paginatedCentrals.map((central) => (
                <Table.Row key={central.id}>
                  <Table.Item>{central.name}</Table.Item>
                  <Table.Item>{central.mac}</Table.Item>
                  <Table.Item>{central.modelId}</Table.Item>
                  <Table.Item>
                    {models.find((m) => m.id === central.modelId)?.name}
                  </Table.Item>
                  <Table.Item>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        justifyContent: "center",
                      }}
                    >
                      <TrashIcon
                        cursor="pointer"
                        customSize="1.5rem"
                        onClick={() => {
                          handleDelete(central);
                          handleDialogOpen(true);
                        }}
                      />
                      <PenIcon
                        cursor="pointer"
                        customSize="1.5rem"
                        onClick={() => handleEdit(central)}
                      />
                    </div>
                  </Table.Item>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Root>
        </ScrollArea>
      ) : (
        <EmptyState.Root>
          <EmptyState.Title>Nao temos resultados</EmptyState.Title>
        </EmptyState.Root>
      )}
    </>
  );
};
