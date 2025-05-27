"use client";

import { Button } from "@components/core/button";
import {
  CreateCentralData,
  useCreateCentralForm,
} from "@core/forms/useCreateCentralForm";
import {
  useCreateCentral,
  useEditCentral,
  useGetModels,
} from "@core/hooks/use-centrals";
import { Controller } from "react-hook-form";
import * as styles from "./styles/create-central-from.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Overlay } from "@components/core/overlay";
import { SuccessAnimation } from "@components/animations/success";
import { Input } from "@components/core/input";
import { Label } from "@components/core/label";
import { Select } from "@components/core/select";
import { Model } from "@domain/central/models/central";
import { toast } from "react-toastify";
import { Toast } from "@components/core/toast";

export const CreateCentralForm = ({
  defaultValues,
  isEditMode = false,
}: {
  defaultValues?: Partial<CreateCentralData>;
  isEditMode?: boolean;
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    control,
  } = useCreateCentralForm(defaultValues);

  useEffect(() => {
    if (defaultValues) {
      reset(defaultValues);
    }
  }, [defaultValues, reset]);

  const router = useRouter();

  const { mutateAsync: createAsync } = useCreateCentral();
  const { mutateAsync: editAsync } = useEditCentral();
  const { data: models } = useGetModels();

  const [showSuccess, setShowSuccess] = useState(false);

  const onSubmit = async (formData: CreateCentralData) => {
    try {
      if (isEditMode && defaultValues?.id) {
        await editAsync({ ...formData, id: defaultValues.id });
        setTimeout(() => {
          toast.success(() => (
            <Toast.Root>
              <Toast.Text>Central atualizada com sucesso!</Toast.Text>
            </Toast.Root>
          ));
        }, 2000);
      } else {
        await createAsync(formData);
        setTimeout(() => {
          toast.success(() => (
            <Toast.Root>
              <Toast.Text>Central criada com sucesso!</Toast.Text>
            </Toast.Root>
          ));
        }, 2000);
      }
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        router.push("/centrals");
      }, 2000);
      reset();
    } catch (error) {
      alert("Erro ao salvar central");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.createCentralFormStyles}
      >
        <Input.Root id="name">
          <Label hasError={!!errors.name}>Nome</Label>
          <Input.Field
            {...register("name")}
            hasError={!!errors.name}
            placeholder="Digite o nome da central"
          />
          {errors.name && <Input.Error>{errors.name.message}</Input.Error>}
        </Input.Root>

        <Input.Root id="mac">
          <Label hasError={!!errors.mac}>Endereço MAC</Label>
          <Input.Field
            {...register("mac")}
            defaultValue={defaultValues?.mac}
            autoComplete="mac"
            mask="**:**:**:**:**:**"
            maskChar={null}
            hasError={!!errors.mac}
            placeholder="Digite o Endereço MAC"
          />
          {errors.mac && <Input.Error>{errors.mac.message}</Input.Error>}
        </Input.Root>

        <Controller
          name="modelId"
          control={control}
          render={({ field }) => (
            <Select.Root>
              <Label id="select-model" hasError={!!errors.modelId}>
                Modelo
              </Label>
              <Select.Field<Model>
                hasError={!!errors.modelId}
                id="select-model"
                label="Modelo"
                options={models || []}
                getOptionValue={(option: Model) => option.id}
                getOptionLabel={(option: Model) => option.name}
                value={field.value ?? ""}
                onSelectChange={field.onChange}
              />
              {errors.modelId && (
                <Input.Error>{errors.modelId.message}</Input.Error>
              )}
            </Select.Root>
          )}
        />

        <Button
          label={isEditMode ? "Salvar Alterações" : "Criar Central"}
          type="submit"
        />
      </form>
      {showSuccess && (
        <Overlay.Root onClose={() => setShowSuccess(false)}>
          <SuccessAnimation style={{ width: 200, height: 200 }} loop={false} />
        </Overlay.Root>
      )}
    </>
  );
};
