import { KpiCard } from "@/components/KpiCard";
import { BaggageClaim } from "lucide-react";
import { CreateNewOrderForm } from "./components/CreateNewOrderForm/index.tsx";
import { OrdersTable } from "./components/OrdersTable/index.tsx";

export const Orders = () => {
  return (
    <div>
      <div className="pb-4 flex justify-between">
        <p>
          <b> Orders summary</b>
        </p>
        <CreateNewOrderForm />
      </div>
      <KpiCard
        icon={<BaggageClaim />}
        items={[
          { label: "Total Sales", value: "$25,000" },
          { label: "New Customers", value: "150" },
          { label: "Returning Customers", value: "75" },
        ]}
      />
      <OrdersTable></OrdersTable>
    </div>
  );
};
