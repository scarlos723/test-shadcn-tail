export type Product = {
  id: string;
  productName: string;
  category: string;
  unitPrice: number;
  inStock: number;
  discount: number; // Percentage
  totalValue: number;
  status: "active" | "inactive" | "out-of-stock";
};
