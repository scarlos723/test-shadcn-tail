import { KpiCard } from "@/components/KpiCard";
import { BaggageClaim, Users2 } from "lucide-react";
import { MarketingChart } from "./MarketingChart";
import { RecentOrders } from "./RecentOrders";
import { SumaryChart } from "./SumaryChart";

const gridClass = " grid lg:grid-cols-2 gap-2";
export const Resume = () => {
  return (
    <div className="grid gap-4">
      <div className="grid lg:grid-cols-[2fr_1fr] gap-2">
        <div className="grid gap-4">
          <div className={gridClass}>
            <KpiCard
              icon={<BaggageClaim />}
              items={[
                { label: "Sales", value: "$25,000" },
                { label: "Volume", value: "150" },
              ]}
            />
            <KpiCard
              icon={<Users2 />}
              items={[{ label: "Customers", value: "12" }]}
            />
          </div>
          <div className={gridClass}>
            <MarketingChart />

            <div className="grid gap-4">
              <KpiCard
                icon={<BaggageClaim />}
                items={[
                  { label: "All products", value: "23" },
                  { label: "Stock products", value: "150" },
                ]}
              />
              <KpiCard
                icon={<BaggageClaim />}
                items={[
                  { label: "All orders", value: "1" },
                  { label: "Pending", value: "0" },
                  { label: "Complete", value: "7" },
                ]}
              />
            </div>
          </div>
        </div>
        <RecentOrders
          orderItems={[
            {
              id: "1",
              customer: "John Doe",
              date: "2024-06-01",
              amount: "$100",
              status: "shipped",
            },
            {
              id: "2",
              customer: "Jane Smith",
              date: "2024-06-02",
              amount: "$150",
              status: "shipped",
            },
            {
              id: "3",
              customer: "Alice Johnson",
              date: "2024-06-03",
              amount: "$200",
              status: "shipped",
            },
          ]}
        />
      </div>
      <SumaryChart />
    </div>
  );
};
