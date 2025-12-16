export type Customer = {
  id: string;
  customerName: string;
  email: string;
  countryCode: string;
  phone: string;
  numberOfOrders: number;
  totalOrders: number; // Valor total en COP
  customerSince: string;
  status: "active" | "inactive" | "pending";
  updatedAt: string;
};
