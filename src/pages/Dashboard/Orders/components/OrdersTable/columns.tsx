import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Order } from "../../types";
import { CustomerNameCell } from "./CustomerNameCell";

export const useOrderColumns = (): ColumnDef<Order>[] => {
  const { t } = useTranslation();

  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label={t("orders.selectAll")}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label={t("orders.selectRow")}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "customerName",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {t("orders.customerName")}
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        );
      },
      cell: ({ row }) => (
        <CustomerNameCell
          orderId={row.original.id}
          name={row.getValue("customerName")}
        />
      ),
    },
    {
      accessorKey: "orderType",
      header: t("orders.orderType"),
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("orderType")}</div>
      ),
    },
    {
      accessorKey: "status",
      header: t("orders.status"),
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return <div className="capitalize">{t(`status.${status}`)}</div>;
      },
    },
    {
      accessorKey: "orderTotal",
      header: () => <div className="text-right">{t("orders.total")}</div>,
      cell: ({ row }) => {
        const amount = parseFloat(row.getValue("orderTotal"));
        const formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(amount);
        return <div className="text-right font-medium">{formatted}</div>;
      },
    },
    {
      accessorKey: "orderDate",
      header: t("orders.orderDate"),
      cell: ({ row }) => {
        const date = new Date(row.getValue("orderDate"));
        const formatted = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit",
        }).format(date);
        return <div>{formatted}</div>;
      },
    },
    {
      accessorKey: "trackingId",
      header: t("orders.trackingId"),
    },
  ];
};
