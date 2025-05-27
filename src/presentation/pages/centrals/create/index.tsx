"use client";

import { Title } from "@components/core/title";
import { CreateCentralForm } from "@components/forms/create-central-form";

import * as styles from "../styles/central-page.css";
import { useGetCentrals } from "@core/hooks/use-centrals";

export const CreateCentralPage = () => {
  useGetCentrals();
  return (
    <div className={styles.centralPageContainerStyle}>
      <Title.Root size="medium">
        <Title.Text>Criar central</Title.Text>
      </Title.Root>

      <CreateCentralForm />
    </div>
  );
};
