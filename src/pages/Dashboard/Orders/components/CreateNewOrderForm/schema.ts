import * as z from "zod";

// Schema de validación
export const orderFormSchema = z
  .object({
    isNewClient: z.boolean(),
    customerId: z.string().optional(),
    // Campos para nuevo cliente
    newCustomerName: z.string().optional(),
    newCustomerEmail: z.union([z.string().email(), z.literal("")]).optional(),
    newCustomerCountryCode: z.string().optional(),
    newCustomerPhone: z.string().optional(),
    // Campos de orden
    paymentType: z.enum(["cash", "credit-card", "debit-card", "transfer"]),
    orderType: z.enum(["online", "in-store", "pickup", "delivery"]),
    orderDate: z.date({
      message: "Order date is required",
    }),
    orderTime: z.string().min(1, "Order time is required"),
    orderStatus: z.enum([
      "pending",
      "processing",
      "shipped",
      "delivered",
      "cancelled",
    ]),
    orderNote: z.string().optional(),
  })
  .superRefine((data, ctx) => {
    // Validación condicional
    if (!data.isNewClient && !data.customerId) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Please select a customer",
        path: ["customerId"],
      });
    }
    if (data.isNewClient) {
      if (!data.newCustomerName) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Customer name is required",
          path: ["newCustomerName"],
        });
      }
      if (!data.newCustomerEmail) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Email is required",
          path: ["newCustomerEmail"],
        });
      }
      if (!data.newCustomerCountryCode) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Country code is required",
          path: ["newCustomerCountryCode"],
        });
      }
      if (!data.newCustomerPhone) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Phone number is required",
          path: ["newCustomerPhone"],
        });
      }
    }
  });

export type OrderFormValues = z.infer<typeof orderFormSchema>;
