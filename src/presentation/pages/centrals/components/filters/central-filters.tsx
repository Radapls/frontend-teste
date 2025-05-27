import { Input } from "@components/core/input";
import { Select } from "@components/core/select";
import { CentralFiltersProps } from "./types";
import { Label } from "@components/core/label";
import * as styles from "./styles/central-filters.css";
import { Button } from "@components/core/button";
import { useRouter } from "next/navigation";
import { FC } from "react";

export const CentralsPageFilters: FC<CentralFiltersProps> = ({
  centralName,
  modelName,
  orderBy,
  handleCentralName,
  handleModelName,
  handleOrdeyBy,
}) => {
  const orderOptions = ["Crescente", "Descrescente"];
  const router = useRouter();

  return (
    <div className={styles.centralFiltersStyle}>
      <Select.Root>
        <Label id="orderBy">Ordenar por</Label>
        <Select.Field<string>
          id="orderBy"
          label="Ordenar por:"
          options={orderOptions}
          getOptionValue={(opt) => opt}
          getOptionLabel={(opt) => opt}
          value={orderBy}
          onSelectChange={handleOrdeyBy}
        />
      </Select.Root>

      <Input.Root id="central-name" placeholder="Digite o nome">
        <Label>Nome da Central</Label>
        <Input.Field
          value={centralName}
          onChange={(e) => handleCentralName(e.target.value)}
        />
      </Input.Root>

      <Input.Root id="model-name" placeholder="Digite o nome">
        <Label>Nome do Modelo</Label>
        <Input.Field
          value={modelName}
          onChange={(e) => handleModelName(e.target.value)}
        />
      </Input.Root>

      <Button onClick={() => router.push("/centrals/create")}>
        Criar uma nova Central
      </Button>
    </div>
  );
};
