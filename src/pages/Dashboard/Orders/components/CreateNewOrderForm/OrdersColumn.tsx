import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Search, ShoppingBag, Trash2 } from "lucide-react";
import type { OrderProduct } from ".";

export const OrdersColumn = (props: {
  productSearch: string;
  setProductSearch: (value: string) => void;
  filteredProducts: {
    id: string;
    name: string;
    price: number;
    stock: number;
    quantity?: number;
  }[];
  addProduct: (product: {
    id: string;
    name: string;
    price: number;
    stock: number;
  }) => void;
  selectedProducts: OrderProduct[];
  updateQuantity: (productId: string, quantity: number) => void;
  removeProduct: (productId: string) => void;
  calculateTotal: () => number;
}) => {
  const {
    productSearch,
    setProductSearch,
    filteredProducts,
    addProduct,
    selectedProducts,
    updateQuantity,
    removeProduct,
    calculateTotal,
  } = props;
  return (
    <>
      {/* Segunda columna - Productos */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Products</h3>

        {/* Buscador de productos */}
        <div className="relative">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search products..."
            value={productSearch}
            onChange={(e) => setProductSearch(e.target.value)}
            className="pl-9"
          />
        </div>

        {/* Lista de productos disponibles */}
        <div className="border rounded-lg p-4 max-h-[300px] overflow-y-auto">
          <div className="space-y-2">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-2 hover:bg-accent rounded-md cursor-pointer"
                  onClick={() => addProduct(product)}
                >
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">
                      ${product.price.toFixed(2)} - Stock: {product.stock}
                    </p>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground py-4">
                No products found
              </p>
            )}
          </div>
        </div>

        {/* Productos seleccionados */}
        <div className="border rounded-lg p-4">
          <h4 className="font-semibold mb-3">Selected Products</h4>
          <div className="space-y-3">
            {selectedProducts.length > 0 ? (
              <>
                {selectedProducts.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-2 border rounded"
                  >
                    <div className="flex-1">
                      <p className="font-medium">{product.name}</p>
                      <p className="text-sm text-muted-foreground">
                        ${product.price.toFixed(2)} each
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Input
                        type="number"
                        min="1"
                        value={product.quantity}
                        onChange={(e) =>
                          updateQuantity(
                            product.id,
                            parseInt(e.target.value) || 0
                          )
                        }
                        className="w-16 h-8"
                      />
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => removeProduct(product.id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                ))}
                <div className="pt-3 border-t">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-lg">Total:</span>
                    <span className="font-bold text-xl">
                      ${calculateTotal().toFixed(2)}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <div className="text-center text-muted-foreground py-4">
                <div className="border rounded-full aspect-square bg-gray-100 w-20 flex justify-center items-center mx-auto">
                  <ShoppingBag />
                </div>
                <p>
                  <b>Add Products to Your Order</b>
                </p>
                <p>Search and add products to this order.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
