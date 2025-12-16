import { z } from "zod";

export const createCustomerSchema = z
  .object({
    customerName: z.string().min(2, {
      message: "Customer name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    countryCode: z.string().min(1, {
      message: "Please select a country code.",
    }),
    phone: z.string().min(7, {
      message: "Phone number must be at least 7 digits.",
    }),
    addAddress: z.boolean().default(false),
    buildingStreetAddress: z.string().optional(),
    city: z.string().optional(),
    country: z.string().optional(),
    state: z.string().optional(),
    sameAsBillingAddress: z.boolean().default(false),
  })
  .refine(
    (data) => {
      if (data.addAddress) {
        return (
          data.buildingStreetAddress && data.city && data.country && data.state
        );
      }
      return true;
    },
    {
      message: "All address fields are required when 'Add Address' is enabled.",
      path: ["buildingStreetAddress"],
    }
  );

export type CreateCustomerFormData = z.infer<typeof createCustomerSchema>;
