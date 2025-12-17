import { KpiCard } from "@/components/KpiCard";
import { UserIcon } from "lucide-react";
import { CreateCostumerForm } from "./components/CreateCostumerForm";
import { CustomersTable } from "./components/CustomersTable";

export const Customers = () => {
  return (
    <div>
      <div className="flex justify-between py-4">
        <p>Customers</p>
        <CreateCostumerForm />
      </div>
      <KpiCard
        items={[
          { label: "Total Customers", value: "1,200" },
          { label: "New Customers", value: "150" },
          { label: "Purchasing", value: "70 (-10%)" },
        ]}
        icon={<UserIcon></UserIcon>}
      />
      <CustomersTable />
    </div>
  );
};
