"use client";

import { useGetCentrals, useGetModels } from "@core/hooks/use-centrals";
import { Button } from "@components/core/button";
import * as styles from "../styles/main-page.css";
import { useRouter } from "next/navigation";
import { Title } from "@components/core/title";
import { CameraIcon } from "@components/icons/camera";
import { ShieldIcon } from "@components/icons/shield";
import { Card } from "@components/core/card";

export const HomePage = () => {
  const { data: centrals = [] } = useGetCentrals();
  const { data: models = [] } = useGetModels();
  const router = useRouter();

  return (
    <section className={styles.mainPageContainerStyle}>
      <Title.Root size="medium">
        <Title.Text>Bem-vindo ao painel de gestão</Title.Text>
      </Title.Root>
      <p className={styles.mainPageSubtitleStyle}>
        Aqui você pode gerenciar as suas centrais e modelos.
      </p>

      <div className={styles.mainCardGridStyle}>
        <Card.Root>
          <Card.Content>
            <ShieldIcon customSize={"2rem"} />
            <p>Centrais cadastradas</p>
            <strong>{centrals.length}</strong>
          </Card.Content>
        </Card.Root>

        <Card.Root>
          <Card.Content>
            <CameraIcon customSize={"2rem"} />
            <p>Modelos disponíveis</p>
            <strong>{models.length}</strong>
          </Card.Content>
        </Card.Root>
      </div>

      <Button onClick={() => router.push("/centrals/create")}>
        Criar nova Central
      </Button>
    </section>
  );
};
