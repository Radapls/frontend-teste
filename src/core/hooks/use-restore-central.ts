import { Central } from '@domain/central/models/central';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import * as api from "@infra/api/central.service";

export const useRestoreCentral = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (central: Central) => {
      return api.createCentral(central);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['centrals']);
    },
  });
};
