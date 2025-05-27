"use client";

import { CreateCentralForm } from "@components/forms/create-central-form";
import { useSearchParams } from "next/navigation";
import * as styles from "../styles/central-page.css";
import { Title } from "@components/core/title";
import { useGetCentrals } from "@core/hooks/use-centrals";

export const EditCentralPage = () => {
  useGetCentrals();

  const searchParams = useSearchParams();

  const id = searchParams.get("id") || "";
  const name = searchParams.get("name") || "";
  const mac = searchParams.get("mac") || "";
  const modelId = searchParams.get("modelId") || "";

  return (
    <div className={styles.centralPageContainerStyle}>
      <Title.Root size="medium">
        <Title.Text>Editar {name}</Title.Text>
      </Title.Root>
      <CreateCentralForm
        defaultValues={{ name, mac, modelId, id }}
        isEditMode
      />
    </div>
  );
};
