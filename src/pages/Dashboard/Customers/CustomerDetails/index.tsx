import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { customerList } from "@/pages/Dashboard/Customers/data";
import {
  Calendar,
  CreditCard,
  Mail,
  MapPin,
  Phone,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";
import { useParams } from "react-router";
import { calculateCustomerStats, generateCustomerOrders } from "./mockData";

export const CustomerDetails = () => {
  const { customerId } = useParams<{ customerId: string }>();

  // Find the customer by ID
  const customer = customerList.find((c) => c.id === customerId);

  if (!customer) {
    return (
      <div className="flex items-center justify-center h-96">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Cliente no encontrado
          </h2>
          <p className="text-gray-500 mt-2">
            El cliente con ID {customerId} no existe.
          </p>
        </div>
      </div>
    );
  }

  // Generate mock orders for this customer
  const orders = generateCustomerOrders(
    customer.id,
    customer.customerName,
    customer.numberOfOrders
  );

  // Calculate customer statistics
  const stats = calculateCustomerStats(orders);

  // Format currency
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    }).format(value);
  };

  // Format date
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("es-CO", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  // Get status badge variant
  const getStatusVariant = (
    status: string
  ): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case "active":
        return "default";
      case "inactive":
        return "secondary";
      case "pending":
        return "outline";
      default:
        return "default";
    }
  };

  // Get order status badge variant
  const getOrderStatusVariant = (
    status: string
  ): "default" | "secondary" | "destructive" | "outline" => {
    switch (status) {
      case "delivered":
        return "default";
      case "shipped":
        return "secondary";
      case "processing":
        return "outline";
      case "pending":
        return "outline";
      case "cancelled":
        return "destructive";
      default:
        return "default";
    }
  };

  return (
    <div className="container mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            {customer.customerName}
          </h1>
          <p className="text-gray-500 mt-1">ID: {customer.id}</p>
        </div>
        <Badge variant={getStatusVariant(customer.status)} className="text-lg">
          {customer.status}
        </Badge>
      </div>

      {/* Customer Information Card */}
      <Card>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <Mail className="h-5 w-5 text-gray-500 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium">{customer.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-gray-500 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Teléfono</p>
                <p className="font-medium">
                  {customer.countryCode} {customer.phone}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-gray-500 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Cliente desde</p>
                <p className="font-medium">
                  {formatDate(customer.customerSince)}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <ShoppingBag className="h-5 w-5 text-gray-500 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Número de Órdenes</p>
                <p className="font-medium">{customer.numberOfOrders}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CreditCard className="h-5 w-5 text-gray-500 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Total Gastado</p>
                <p className="font-medium">
                  {formatCurrency(customer.totalOrders)}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
              <div>
                <p className="text-sm text-gray-500">Última actualización</p>
                <p className="font-medium">{formatDate(customer.updatedAt)}</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Órdenes</CardTitle>
            <ShoppingBag className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalOrders}</div>
            <p className="text-xs text-muted-foreground mt-1">
              Órdenes completadas y pendientes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Ingresos Totales
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(stats.totalRevenue)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Valor total de todas las órdenes
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Valor Promedio
            </CardTitle>
            <CreditCard className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatCurrency(stats.averageOrderValue)}
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              Promedio por orden
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Orders Table */}
      <Card>
        <CardHeader>
          <CardTitle>Órdenes del Cliente</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fecha de Orden</TableHead>
                <TableHead>Tipo de Orden</TableHead>
                <TableHead>Tracking ID</TableHead>
                <TableHead className="text-right">Total de Orden</TableHead>
                <TableHead>Estado</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className="font-medium">
                    {formatDate(order.orderDate)}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className="capitalize">
                      {order.orderType}
                    </Badge>
                  </TableCell>
                  <TableCell className="font-mono text-sm">
                    {order.trackingId}
                  </TableCell>
                  <TableCell className="text-right font-semibold">
                    {formatCurrency(order.orderTotal)}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={getOrderStatusVariant(order.status)}
                      className="capitalize"
                    >
                      {order.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};
