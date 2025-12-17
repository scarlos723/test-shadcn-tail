import { KpiCard } from "@/components/KpiCard";
import { BadgeDollarSign, Boxes, ShoppingBag, Users2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import { MarketingChart } from "./MarketingChart";
import { RecentOrders } from "./RecentOrders";
import { SumaryChart } from "./SumaryChart";

const gridClass = " grid lg:grid-cols-2 gap-2";
export const Resume = () => {
  const { t } = useTranslation();

  return (
    <div className="grid gap-4">
      <div className="grid lg:grid-cols-[2fr_1fr] gap-2">
        <div className="grid gap-4">
          <div className={gridClass}>
            <KpiCard
              icon={<BadgeDollarSign />}
              items={[
                { label: t("resumePage.sales"), value: "$25,000" },
                { label: t("resumePage.volume"), value: "150" },
              ]}
            />
            <KpiCard
              icon={<Users2 />}
              items={[{ label: t("resumePage.customers"), value: "12" }]}
            />
          </div>
          <div className={gridClass}>
            <MarketingChart />

            <div className="grid gap-4">
              <KpiCard
                icon={<Boxes />}
                items={[
                  { label: t("resumePage.allProducts"), value: "23" },
                  { label: t("resumePage.stockProducts"), value: "150" },
                ]}
              />
              <KpiCard
                icon={<ShoppingBag />}
                items={[
                  { label: t("resumePage.allOrders"), value: "1" },
                  { label: t("resumePage.pending"), value: "0" },
                  { label: t("resumePage.complete"), value: "7" },
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
