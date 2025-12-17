import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import type { Customer } from "../../types";
import { CustomerNameCell } from "./CustomerNameCell";

export const useCustomerColumns = (): ColumnDef<Customer>[] => {
  const { t } = useTranslation();

  return [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={table.getIsAllPageRowsSelected()}
          onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
          aria-label={t("customers.selectAll")}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          checked={row.getIsSelected()}
          onCheckedChange={(value) => row.toggleSelected(!!value)}
          aria-label={t("customers.selectRow")}
        />
      ),
      enableSorting: false,
      enableHiding: false,
    },
    {
      accessorKey: "customerName",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {t("customers.customerName")}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    cell: ({ row }) => (
      <CustomerNameCell
        customerId={row.original.id}
        name={row.original.customerName}
      />
    ),
    },
    {
      accessorKey: "email",
      header: t("customers.email"),
    },
    {
      accessorKey: "phone",
      header: t("customers.phone"),
      cell: ({ row }) => (
        <div>
          {row.original.countryCode} {row.getValue("phone")}
        </div>
      ),
    },
    {
      accessorKey: "numberOfOrders",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {t("customers.orders")}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    },
    {
      accessorKey: "totalOrders",
      header: ({ column }) => (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          {t("customers.total")}
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      ),
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("totalOrders"));
      const formatted = new Intl.NumberFormat("es-CO", {
        style: "currency",
        currency: "COP",
        minimumFractionDigits: 0,
      }).format(amount);
      return <div className="font-medium">{formatted}</div>;
    },
    },
    {
      accessorKey: "status",
      header: t("customers.status"),
      cell: ({ row }) => {
        const status = row.getValue("status") as string;
        return (
          <Badge
            variant={
              status === "active"
                ? "default"
                : status === "inactive"
                ? "secondary"
                : "outline"
            }
          >
            {t(`status.${status}`)}
          </Badge>
        );
      },
    },
    {
      accessorKey: "customerSince",
      header: t("customers.customerSince"),
    },
    {
      accessorKey: "updatedAt",
      header: t("customers.updatedAt"),
    },
  ];
};
