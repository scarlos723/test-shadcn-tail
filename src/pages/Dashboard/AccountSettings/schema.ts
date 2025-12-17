import { z } from "zod";

export const accountSettingsSchema = z.object({
  firstName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
  documentId: z
    .string()
    .min(5, "El documento debe tener al menos 5 caracteres"),
  email: z.string().email("Email inválido"),
  countryCode: z.string().min(1, "Selecciona un código de país"),
  phoneNumber: z
    .string()
    .min(7, "El número de teléfono debe tener al menos 7 dígitos")
    .regex(/^\d+$/, "Solo se permiten números"),
  address: z.string().min(5, "La dirección debe tener al menos 5 caracteres"),
  city: z.string().min(2, "La ciudad debe tener al menos 2 caracteres"),
  profileImage: z.instanceof(File).optional(),
});

export type AccountSettingsFormData = z.infer<typeof accountSettingsSchema>;
