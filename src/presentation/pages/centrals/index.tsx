"use client";

import { Button } from "@components/core/button";
import Dialog from "@components/core/dialog";

import {
  useGetCentrals,
  useGetModels,
  useDeleteCentral,
} from "@core/hooks/use-centrals";

import React, { useState } from "react";
import { Central } from "@domain/central/models/central";
import { useCentralStore } from "../../store/central-store";

import { toast } from "react-toastify";
import { useRestoreCentral } from "@core/hooks/use-restore-central";
import { Toast } from "@components/core/toast";
import { useRouter } from "next/navigation";
import { Centrals } from "./components";

export const CentralsPage = () => {
  // Hooks
  const router = useRouter();
  const { data: centrals = [], isLoading } = useGetCentrals();
  const { data: models = [] } = useGetModels();
  const deleteCentral = useDeleteCentral();
  const restoreCentral = useRestoreCentral();
  const setTotal = useCentralStore((state) => state.setTotal);

  // Local State
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [centralName, setCentralName] = useState("");
  const [modelName, setModelName] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [centralToDelete, setCentralToDelete] = useState<Central | null>(null);
  const [orderBy, setOrderBy] = useState<string>("Crescente");

  // Local Const
  const pageSizeOptions = [10, 20, 30, 40, 50];

  const filteredCentrals = centrals.filter((central) => {
    const matchesCentralName = central.name
      .toLowerCase()
      .includes(centralName.toLowerCase());

    const model = models.find((model) => model.id === central.modelId);
    const modelDisplayName = model?.name || "";

    const matchesModelName = modelDisplayName
      .toLowerCase()
      .includes(modelName.toLowerCase());

    return matchesCentralName && matchesModelName;
  });

  const sortedCentrals = [...filteredCentrals].sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (orderBy === "Crescente") return nameA.localeCompare(nameB);
    return nameB.localeCompare(nameA);
  });

  const paginatedCentrals = sortedCentrals.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handlers
  const handleDelete = () => {
    if (!centralToDelete) return;

    const deletedCentral = centralToDelete;

    deleteCentral.mutate(deletedCentral.id, {
      onSuccess: () => {
        setDialogOpen(false);

        toast.success(({ closeToast }) => (
          <Toast.Root>
            <Toast.Text>
              Central <strong>"{deletedCentral.name}"</strong> excluída.
            </Toast.Text>

            <Button
              onClick={() => {
                closeToast();
                restoreCentral.mutate(deletedCentral);
              }}
            >
              Desfazer
            </Button>
          </Toast.Root>
        ));
      },
    });
  };

  const handleEdit = (central: Central) => {
    const query = new URLSearchParams({
      id: central.id,
      name: central.name,
      mac: central.mac,
      modelId: central.modelId.toString(),
    }).toString();
    router.push(`/centrals/edit?${query}`);
  };

  React.useEffect(() => {
    setTotal(centrals.length);
  }, [centrals, setTotal]);

  if (isLoading) return <div>Carregando...</div>;

  return (
    <Centrals.Root>
      <Centrals.Title>Dados das centrais</Centrals.Title>

      <Centrals.Export
        centrals={filteredCentrals}
        models={models}
      />
      <Centrals.Filters
        centralName={centralName}
        modelName={modelName}
        orderBy={orderBy}
        handleCentralName={(e) => setCentralName(e)}
        handleModelName={(e) => setModelName(e)}
        handleOrdeyBy={(e) => setOrderBy(e)}
      />
      <Centrals.Table
        paginatedCentrals={paginatedCentrals}
        models={models}
        handleEdit={handleEdit}
        handleDialogOpen={(e) => setDialogOpen(e)}
        handleDelete={(e) => setCentralToDelete(e)}
      />
      <Centrals.Pagination
        filteredCentrals={filteredCentrals}
        pageSizeOptions={pageSizeOptions}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        handleCurrentPage={(e) => setCurrentPage(e)}
        handleItemsPerPage={(e) => setItemsPerPage(e)}
      />

      <Dialog
        message={`Tem certeza que deseja excluir "${centralToDelete?.name}"?`}
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onConfirm={handleDelete}
      />
    </Centrals.Root>
  );
};
