import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Copy } from "lucide-react";
import { useState } from "react";
import { useParams } from "react-router";
import { toast } from "sonner";
import { data } from "../data";
import { AddressCard } from "./AddressCard";
import { CustomerCard } from "./CustomerCard";
import { OrderProducts } from "./OrderProducts";
import { PaymentCard } from "./PaymentCard";

export const OrderDeatails = () => {
  const { orderId } = useParams<{ orderId: string }>();

  // Buscar la orden en la lista de datos
  const order = data.find((order) => order.id === orderId);

  // Estado local para el status de la orden
  const [orderStatus, setOrderStatus] = useState(order?.status || "pending");

  const handleStatusChange = (newStatus: string) => {
    setOrderStatus(newStatus as typeof orderStatus);
    toast.success("Order Status Updated", {
      description: `Order status changed to ${newStatus}`,
    });
  };

  const handleCopyTrackingId = () => {
    if (order?.trackingId) {
      navigator.clipboard.writeText(order.trackingId);
      toast.success("Copied to Clipboard", {
        description: `Tracking ID ${order.trackingId} copied successfully`,
      });
    }
  };

  // Si no se encuentra la orden
  if (!order) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Order Not Found</h2>
          <p className="text-gray-500">
            The order with ID "{orderId}" could not be found.
          </p>
        </div>
      </div>
    );
  }

  // Mapeo de estados a colores de badge
  const statusColors = {
    pending: "default",
    processing: "secondary",
    shipped: "outline",
    delivered: "default",
    cancelled: "destructive",
  } as const;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1 space-y-4">
          <div className="flex items-center justify-between">
            <div className="lg:flex gap-8">
              <div>
                <p className="font-medium text-lg">
                  Order Number{" "}
                  <span className="text-gray-500 ">{order.id}</span>
                </p>
              </div>

              <div>
                <p className="font-medium text-lg">
                  Order Date{" "}
                  <span className="text-gray-500">
                    {new Date(order.orderDate).toLocaleString()}
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-2">
                <p className="font-medium text-lg">
                  Tracking ID{" "}
                  <span className="text-gray-500">{order.trackingId}</span>
                </p>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleCopyTrackingId}
                  className="h-8 w-8"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="grid lg:flex gap-2">
              <Select value={orderStatus} onValueChange={handleStatusChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="processing">Processing</SelectItem>
                  <SelectItem value="shipped">Shipped</SelectItem>
                  <SelectItem value="delivered">Delivered</SelectItem>
                  <SelectItem value="cancelled">Cancelled</SelectItem>
                </SelectContent>
              </Select>
              <Badge variant={statusColors[orderStatus]} className="w-fit">
                {orderStatus.toUpperCase()}
              </Badge>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-4">
            <CustomerCard
              customer={{
                customerName: order.customerName,
                email: "carlitos@gmail.com",
                phone: "+32 123-456-7890",
                since: "21 March 2023",
              }}
            />
            <AddressCard
              homeAddress="123 Main St, Springfield, USA"
              billingAddress="456 Elm St, Springfield, USA"
            />
            <PaymentCard
              paymentMethod={order.paymentMethod}
              orderType={order.orderType}
            />
          </div>

          <OrderProducts />
        </div>
      </div>
    </div>
  );
};
