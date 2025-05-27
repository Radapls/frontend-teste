import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { v4 as uuid } from "uuid";

export const macRegex = /^([0-9A-Fa-f]{2}([:])){5}([0-9A-Fa-f]{2})$/;

export const createCentralSchema = z.object({
  id: z.string().uuid().optional(),
  name: z.string().min(3, "O nome deve ter ao menos 3 caracteres"),
  mac: z
    .string()
    .min(1, "O endereço MAC é obrigatório")
    .superRefine((value, ctx) => {
      if (!/^[0-9A-Fa-f:-]+$/.test(value)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "O endereço MAC deve conter apenas letras (A-F)",
        });
      } else if (!macRegex.test(value)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message:
            "Formato inválido. Use XX:XX:XX:XX:XX:XX",
        });
      }
    }),
  modelId: z.string().min(1, "Modelo é obrigatório"),
});

export type CreateCentralData = z.infer<typeof createCentralSchema>;

export const useCreateCentralForm = (
  defaultValues?: Partial<CreateCentralData>
) => {
  return useForm<CreateCentralData>({
    resolver: zodResolver(createCentralSchema),
    defaultValues: {
      id: uuid(),
      name: "",
      mac: "",
      modelId: "",
      ...defaultValues,
    },
  });
};
