export type Order = {
  id: string;
  customerName: string;
  orderDate: string;
  orderType: "online" | "in-store" | "pickup" | "delivery";
  trackingId: string;
  orderTotal: number;
  paymentMethod:
    | "credit-card"
    | "debit-card"
    | "paypal"
    | "cash"
    | "bank-transfer";
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
};

export type Payment = Order;
