import type { Order } from "../../Orders/types";

// Generate mock orders for a specific customer
export const generateCustomerOrders = (
  customerId: string,
  customerName: string,
  numberOfOrders: number
): Order[] => {
  const orderTypes: Order["orderType"][] = [
    "online",
    "in-store",
    "pickup",
    "delivery",
  ];
  const statuses: Order["status"][] = [
    "pending",
    "processing",
    "shipped",
    "delivered",
    "cancelled",
  ];
  const paymentMethods: Order["paymentMethod"][] = [
    "credit-card",
    "debit-card",
    "paypal",
    "cash",
    "bank-transfer",
  ];

  const orders: Order[] = [];

  for (let i = 0; i < numberOfOrders; i++) {
    // Generate a random date within the last 180 days
    const daysAgo = Math.floor(Math.random() * 180);
    const orderDate = new Date();
    orderDate.setDate(orderDate.getDate() - daysAgo);
    orderDate.setHours(
      Math.floor(Math.random() * 24),
      Math.floor(Math.random() * 60),
      Math.floor(Math.random() * 60)
    );

    const orderType = orderTypes[Math.floor(Math.random() * orderTypes.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const paymentMethod =
      paymentMethods[Math.floor(Math.random() * paymentMethods.length)];

    // Generate order total (between 50,000 and 1,000,000 COP)
    const orderTotal =
      Math.floor(Math.random() * (1000000 - 50000 + 1)) + 50000;

    const order: Order = {
      id: `ORD-${customerId}-${String(i + 1).padStart(4, "0")}`,
      customerName,
      orderDate: orderDate.toISOString(),
      orderType,
      trackingId: `TRK-${Date.now()}-${Math.random()
        .toString(36)
        .substring(2, 9)
        .toUpperCase()}`,
      orderTotal,
      paymentMethod,
      status,
    };

    orders.push(order);
  }

  return orders.sort(
    (a, b) => new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()
  );
};

// Calculate customer statistics from orders
export const calculateCustomerStats = (orders: Order[]) => {
  const totalOrders = orders.length;
  const totalRevenue = orders.reduce((sum, order) => sum + order.orderTotal, 0);
  const averageOrderValue = totalOrders > 0 ? totalRevenue / totalOrders : 0;

  const lastOrder = orders[0]; // Orders are already sorted by date desc
  const lastOrderDate = lastOrder ? lastOrder.orderDate : null;

  // Count orders by status
  const ordersByStatus = orders.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return {
    totalOrders,
    totalRevenue,
    averageOrderValue,
    lastOrderDate,
    ordersByStatus,
  };
};
