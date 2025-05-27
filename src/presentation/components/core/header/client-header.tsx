'use client';

import { Header } from "@components/core/header";
import { Title } from "@components/core/title";
import { useCentralStore } from "../../../store/central-store";
import { CircleCheckIcon } from "@components/icons/circle-check";

export const ClientHeader = () => {
  const total = useCentralStore((state) => state.total);

  return (
    <Header.Root>
      <Header.LeftGroup>
        <Title.Root size="medium">
          <Title.Text>Centrais</Title.Text>
        </Title.Root>
      </Header.LeftGroup>
      <Header.RightGroup>
        <Title.Root size="medium">
          <Title.Text>Centrais totais: {total}</Title.Text>
            <CircleCheckIcon customSize={'1.5rem'}></CircleCheckIcon>
        </Title.Root>
      </Header.RightGroup>
    </Header.Root>
  );
};
