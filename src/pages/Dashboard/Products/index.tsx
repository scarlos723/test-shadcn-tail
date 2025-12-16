import { KpiCard } from "@/components/KpiCard";
import { FolderArchive } from "lucide-react";
import { CreateNewProduct } from "./components/CreateNewProduct";
import { ProductsTable } from "./components/ProductsTable";

export const Products = () => {
  return (
    <div>
      <div className="flex justify-between mb-4">
        <p>
          <b>Products</b>
        </p>
        <CreateNewProduct />
      </div>
      <div>
        <KpiCard
          items={[
            {
              label: "All Products",
              value: "45",
            },
            {
              label: "Stock Products",
              value: "35",
            },
            {
              label: "Out of Stock",
              value: "8",
            },
          ]}
          icon={<FolderArchive />}
        />
        <ProductsTable />
      </div>
    </div>
  );
};
