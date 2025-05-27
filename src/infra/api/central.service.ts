import { Central, Model } from "@domain/central/models/central";
import { CreateCentralData } from "@core/forms/useCreateCentralForm";

const BASE_URL = "http://localhost:8080";

export const getCentrals = async (): Promise<Central[]> => {
  const res = await fetch(`${BASE_URL}/centrals`);
  if (!res.ok) throw new Error("Failed to fetch centrals");
  return res.json();
};

export const createCentral = async (data: CreateCentralData): Promise<Central> => {
  const res = await fetch(`${BASE_URL}/centrals`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Failed to create central");
  return res.json();
};

export const deleteCentral = async (id: Central["id"]): Promise<void> => {
  const res = await fetch(`${BASE_URL}/centrals/${id}`, {
    method: "DELETE",
  });
  if (!res.ok) throw new Error("Failed to delete central");
};

export const editCentral = async (data: CreateCentralData & { id: string }): Promise<void> => {
  const { id, ...payload } = data;
  const res = await fetch(`${BASE_URL}/centrals/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  if (!res.ok) throw new Error("Failed to update central");
};



export const getModels = async (): Promise<Model[]> => {
  const res = await fetch(`${BASE_URL}/models`);
  if (!res.ok) throw new Error("Failed to fetch models");
  return res.json();
};
