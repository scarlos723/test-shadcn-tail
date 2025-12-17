import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface OrderProduct {
  id: string;
  productName: string;
  unitPrice: number;
  quantity: number;
  discount: number; // porcentaje
  status: "in-stock" | "out-of-stock" | "pre-order";
}

// Datos de prueba con 3 productos
const mockProducts: OrderProduct[] = [
  {
    id: "1",
    productName: "Wireless Headphones",
    unitPrice: 89.99,
    quantity: 2,
    discount: 10,
    status: "in-stock",
  },
  {
    id: "2",
    productName: "USB-C Cable",
    unitPrice: 12.99,
    quantity: 3,
    discount: 0,
    status: "in-stock",
  },
  {
    id: "3",
    productName: "Laptop Stand",
    unitPrice: 45.5,
    quantity: 1,
    discount: 15,
    status: "pre-order",
  },
];

export const OrderProducts = () => {
  // Calcular el total de cada producto
  const calculateProductTotal = (product: OrderProduct) => {
    const subtotal = product.unitPrice * product.quantity;
    const discountAmount = subtotal * (product.discount / 100);
    return subtotal - discountAmount;
  };

  // Calcular el total de la orden
  const orderTotal = mockProducts.reduce((total, product) => {
    return total + calculateProductTotal(product);
  }, 0);

  // Mapeo de estados a variantes de badge
  const statusVariants = {
    "in-stock": "default" as const,
    "out-of-stock": "destructive" as const,
    "pre-order": "secondary" as const,
  };

  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Product Name</TableHead>
            <TableHead className="text-right">Unit Price</TableHead>
            <TableHead className="text-center">Quantity</TableHead>
            <TableHead className="text-center">Discount</TableHead>
            <TableHead className="text-right">Total Price</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {mockProducts.map((product) => (
            <TableRow key={product.id}>
              <TableCell className="font-medium">
                {product.productName}
              </TableCell>
              <TableCell className="text-right">
                ${product.unitPrice.toFixed(2)}
              </TableCell>
              <TableCell className="text-center">{product.quantity}</TableCell>
              <TableCell className="text-center">
                {product.discount > 0 ? `${product.discount}%` : "-"}
              </TableCell>
              <TableCell className="text-right font-medium">
                ${calculateProductTotal(product).toFixed(2)}
              </TableCell>
              <TableCell className="text-center">
                <Badge variant={statusVariants[product.status]}>
                  {product.status.replace("-", " ").toUpperCase()}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={4} className="text-right font-semibold">
              Order Total
            </TableCell>
            <TableCell className="text-right font-bold text-lg">
              ${orderTotal.toFixed(2)}
            </TableCell>
            <TableCell />
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
};
