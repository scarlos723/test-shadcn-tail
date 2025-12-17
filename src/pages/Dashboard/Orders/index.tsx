import { KpiCard } from "@/components/KpiCard";
import { BaggageClaim } from "lucide-react";
import { useTranslation } from "react-i18next";
import { CreateNewOrderForm } from "./components/CreateNewOrderForm/index.tsx";
import { OrdersTable } from "./components/OrdersTable/index.tsx";

export const Orders = () => {
  const { t } = useTranslation();

  return (
    <div>
      <div className="pb-4 flex justify-between">
        <p>
          <b>{t("ordersPage.ordersSummary")}</b>
        </p>
        <CreateNewOrderForm />
      </div>
      <KpiCard
        icon={<BaggageClaim />}
        items={[
          { label: t("ordersPage.totalSales"), value: "$25,000" },
          { label: t("ordersPage.newCustomers"), value: "150" },
          { label: t("ordersPage.returningCustomers"), value: "75" },
        ]}
      />
      <OrdersTable></OrdersTable>
    </div>
  );
};
