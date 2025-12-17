// Datos dummy para órdenes asociadas al producto
export interface ProductOrder {
  id: string;
  orderDate: string;
  orderType: "online" | "in-store" | "pickup" | "delivery";
  unitPrice: number;
  quantity: number;
  discount: number;
  orderTotal: number;
  status: "pending" | "processing" | "shipped" | "delivered" | "cancelled";
}

// Generar órdenes dummy para un producto
export const generateProductOrders = (
  _productId: string,
  productPrice: number
): ProductOrder[] => {
  const orderTypes: Array<"online" | "in-store" | "pickup" | "delivery"> = [
    "online",
    "in-store",
    "pickup",
    "delivery",
  ];
  const statuses: Array<
    "pending" | "processing" | "shipped" | "delivered" | "cancelled"
  > = ["pending", "processing", "shipped", "delivered", "cancelled"];

  const orderCount = Math.floor(Math.random() * 15) + 5; // 5-20 órdenes

  return Array.from({ length: orderCount }, (_, i) => {
    const daysAgo = Math.floor(Math.random() * 90); // Últimos 90 días
    const orderDate = new Date(Date.now() - daysAgo * 24 * 60 * 60 * 1000);
    orderDate.setHours(
      Math.floor(Math.random() * 24),
      Math.floor(Math.random() * 60),
      Math.floor(Math.random() * 60)
    );

    const quantity = Math.floor(Math.random() * 5) + 1; // 1-5 unidades
    const discount = [0, 0, 0, 5, 10, 15][Math.floor(Math.random() * 6)];
    const subtotal = productPrice * quantity;
    const orderTotal = subtotal * (1 - discount / 100);

    return {
      id: `ORD-${String(i + 1).padStart(4, "0")}`,
      orderDate: orderDate.toISOString(),
      orderType: orderTypes[Math.floor(Math.random() * orderTypes.length)],
      unitPrice: productPrice,
      quantity,
      discount,
      orderTotal,
      status: statuses[Math.floor(Math.random() * statuses.length)],
    };
  });
};

// Calcular estadísticas del producto
export const calculateProductStats = (orders: ProductOrder[]) => {
  const totalUnitsSold = orders.reduce((sum, order) => sum + order.quantity, 0);
  const totalRevenue = orders.reduce((sum, order) => sum + order.orderTotal, 0);
  const lastOrder =
    orders.length > 0
      ? orders.reduce((latest, order) =>
          new Date(order.orderDate) > new Date(latest.orderDate)
            ? order
            : latest
        )
      : null;

  return {
    totalOrders: orders.length,
    totalUnitsSold,
    totalRevenue,
    lastOrderDate: lastOrder?.orderDate || null,
  };
};
