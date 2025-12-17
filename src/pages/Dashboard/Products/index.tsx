import { KpiCard } from "@/components/KpiCard";
import { FolderArchive } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CreateNewProduct } from "./components/CreateNewProduct";
import { ProductsTable } from "./components/ProductsTable";

export const Products = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="flex justify-between mb-4">
        <p>
          <b>{t("productsPage.products")}</b>
        </p>
        <CreateNewProduct />
      </div>
      <div>
        <KpiCard
          items={[
            {
              label: t("productsPage.allProducts"),
              value: "45",
            },
            {
              label: t("productsPage.stockProducts"),
              value: "35",
            },
            {
              label: t("productsPage.outOfStock"),
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
