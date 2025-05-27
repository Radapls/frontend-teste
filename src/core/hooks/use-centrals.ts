import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Central, Model } from "@domain/central/models/central";
import { CreateCentralData } from "@core/forms/useCreateCentralForm";
import * as api from "@infra/api/central.service";
import { useCentralStore } from "../../presentation/store/central-store";

export const useGetCentrals = () => {
  const setTotal = useCentralStore((state) => state.setTotal);
  return useQuery<Central[]>({
    queryKey: ["centrals"],
    queryFn: api.getCentrals,
    staleTime: 1000 * 60 * 5,
    onSuccess: (data) => {
      setTotal(data.length);
    },
  });
};

export const useCreateCentral = () => {
  const queryClient = useQueryClient();
  return useMutation<Central, Error, CreateCentralData>({
    mutationFn: api.createCentral,
    onSuccess: () => {
      queryClient.invalidateQueries(["centrals"]);
      useCentralStore.getState().setTotal(useCentralStore.getState().total + 1);
    },
  });
};

export const useDeleteCentral = () => {
  const queryClient = useQueryClient();
  return useMutation<void, Error, string>({
    mutationFn: api.deleteCentral,
    onSuccess: () => {
      queryClient.invalidateQueries(["centrals"]);
      useCentralStore.getState().setTotal(useCentralStore.getState().total - 1);
    },
  });
};

export const useEditCentral = () => {
  const queryClient = useQueryClient();

  return useMutation<void, Error, CreateCentralData & { id: string }>({
    mutationFn: api.editCentral,
    onSuccess: () => {
      queryClient.invalidateQueries(["centrals"]);
    },
  });
};

export const useGetModels = () => {
  return useQuery<Model[]>({
    queryKey: ["models"],
    queryFn: api.getModels,
    staleTime: 1000 * 60 * 5,
  });
};
