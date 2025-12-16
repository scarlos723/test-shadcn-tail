import { z } from "zod";

export const createProductSchema = z
  .object({
    productName: z.string().min(2, {
      message: "Product name must be at least 2 characters.",
    }),
    category: z.string().min(1, {
      message: "Please select a category.",
    }),
    billingPrice: z.coerce.number().min(0.01, {
      message: "Billing price must be greater than 0.",
    }),
    costPrice: z.coerce.number().min(0.01, {
      message: "Cost price must be greater than 0.",
    }),
    quantityInStock: z.coerce.number().int().min(0, {
      message: "Quantity must be 0 or greater.",
    }),
    description: z.string().optional(),
    orderType: z.string().min(1, {
      message: "Please select an order type.",
    }),
    dateAdded: z.date({
      message: "Please select a date.",
    }),
    timeAdded: z.string().regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, {
      message: "Please enter a valid time (HH:MM).",
    }),
    hasDiscount: z.boolean().default(false),
    discountType: z.string().optional(),
    discountValue: z.coerce.number().optional(),
    hasExpireDate: z.boolean().default(false),
    expireDate: z.date().optional(),
    mainImage: z.array(z.instanceof(File)).min(1, {
      message: "Please upload at least one main image.",
    }),
    additionalImage1: z.array(z.instanceof(File)).optional(),
    additionalImage2: z.array(z.instanceof(File)).optional(),
  })
  .refine(
    (data) => {
      if (data.hasDiscount) {
        return data.discountType && data.discountValue !== undefined;
      }
      return true;
    },
    {
      message: "Discount type and value are required when discount is enabled.",
      path: ["discountType"],
    }
  )
  .refine(
    (data) => {
      if (data.hasExpireDate) {
        return data.expireDate !== undefined;
      }
      return true;
    },
    {
      message: "Expire date is required when expire date is enabled.",
      path: ["expireDate"],
    }
  );

export type CreateProductFormData = z.infer<typeof createProductSchema>;
