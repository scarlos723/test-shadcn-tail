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
import { Package, ShoppingCart, TrendingUp } from "lucide-react";
import { useParams } from "react-router";
import { productsData } from "../data";
import { calculateProductStats, generateProductOrders } from "./mockData";

export const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();

  // Buscar el producto en la data
  const product = productsData.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="container mx-auto py-8 px-4">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">Product Not Found</h2>
          <p className="text-gray-500">
            The product with ID "{productId}" could not be found.
          </p>
        </div>
      </div>
    );
  }

  // Generar órdenes dummy para este producto
  const orders = generateProductOrders(product.id, product.unitPrice);
  const stats = calculateProductStats(orders);

  // Solo mostrar las últimas 10 órdenes en la tabla
  const recentOrders = [...orders]
    .sort(
      (a, b) =>
        new Date(b.orderDate).getTime() - new Date(a.orderDate).getTime()
    )
    .slice(0, 10);

  const statusColors = {
    pending: "default",
    processing: "secondary",
    shipped: "outline",
    delivered: "default",
    cancelled: "destructive",
  } as const;

  const statusProductColors = {
    active: "default",
    inactive: "secondary",
    "out-of-stock": "destructive",
  } as const;

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">{product.productName}</h1>
            <p className="text-gray-500">Product ID: {product.id}</p>
          </div>
          <Badge variant={statusProductColors[product.status]}>
            {product.status.toUpperCase()}
          </Badge>
        </div>

        {/* First Row - Images and Product Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Product Images Card */}
          <Card>
            <div className="p-4 grid lg:grid-cols-[2fr_1fr] gap-4">
              {/* Main Image */}
              <div className="aspect-square bg-gray-100 rounded-lg flex items-center justify-center border-2 border-gray-200">
                <div className="text-center">
                  <Package className="size-24 text-gray-400 mx-auto mb-2" />
                  <p className="text-sm text-gray-500">Main Product Image</p>
                  <p className="text-xs text-gray-400">{product.productName}</p>
                </div>
              </div>

              {/* Additional Images */}
              <div className="grid min-h-40 grid-cols-2 lg:grid-cols-1 gap-4">
                <div className=" bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200">
                  <div className="text-center">
                    <Package className="h-12 w-12 text-gray-300 mx-auto" />
                    <p className="text-xs text-gray-400 mt-1">Image 2</p>
                  </div>
                </div>
                <div className=" bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200">
                  <div className="text-center">
                    <Package className="h-12 w-12 text-gray-300 mx-auto" />
                    <p className="text-xs text-gray-400 mt-1">Image 3</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Product Info Card */}
          <Card>
            <CardHeader>
              <CardTitle>Product Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-gray-500">Category</p>
                  <p className="font-medium text-lg">{product.category}</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Unit Price</p>
                  <p className="font-medium text-lg">
                    ${product.unitPrice.toFixed(2)}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Stock Available</p>
                  <p className="font-medium text-lg">{product.inStock} units</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Discount</p>
                  <p className="font-medium text-lg">{product.discount}%</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Date Added</p>
                  <p className="font-medium text-lg">
                    {new Date(product.dateAdded).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Last Order</p>
                  <p className="font-medium text-lg">
                    {stats.lastOrderDate
                      ? new Date(stats.lastOrderDate).toLocaleDateString()
                      : "No orders"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Orders
              </CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalOrders}</div>
              <p className="text-xs text-muted-foreground">
                Total orders for this product
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">Units Sold</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalUnitsSold}</div>
              <p className="text-xs text-muted-foreground">Total units sold</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${stats.totalRevenue.toFixed(2)}
              </div>
              <p className="text-xs text-muted-foreground">
                Revenue generated from this product
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Recent Orders Table */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order Date</TableHead>
                    <TableHead>Order Type</TableHead>
                    <TableHead className="text-right">Unit Price</TableHead>
                    <TableHead className="text-center">Quantity</TableHead>
                    <TableHead className="text-center">Discount</TableHead>
                    <TableHead className="text-right">Order Total</TableHead>
                    <TableHead className="text-center">Status</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentOrders.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell>
                        {new Date(order.orderDate).toLocaleString()}
                      </TableCell>
                      <TableCell className="capitalize">
                        {order.orderType}
                      </TableCell>
                      <TableCell className="text-right">
                        ${order.unitPrice.toFixed(2)}
                      </TableCell>
                      <TableCell className="text-center">
                        {order.quantity}
                      </TableCell>
                      <TableCell className="text-center">
                        {order.discount > 0 ? `${order.discount}%` : "-"}
                      </TableCell>
                      <TableCell className="text-right font-medium">
                        ${order.orderTotal.toFixed(2)}
                      </TableCell>
                      <TableCell className="text-center">
                        <Badge variant={statusColors[order.status]}>
                          {order.status.toUpperCase()}
                        </Badge>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
