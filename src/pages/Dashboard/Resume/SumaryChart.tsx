import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

// Datos de ejemplo para diferentes métricas y períodos
const weeklyData = {
  sales: [
    { name: "Mon", value: 4000 },
    { name: "Tue", value: 3000 },
    { name: "Wed", value: 2000 },
    { name: "Thu", value: 2780 },
    { name: "Fri", value: 1890 },
    { name: "Sat", value: 2390 },
    { name: "Sun", value: 3490 },
  ],
  customers: [
    { name: "Mon", value: 24 },
    { name: "Tue", value: 13 },
    { name: "Wed", value: 18 },
    { name: "Thu", value: 39 },
    { name: "Fri", value: 48 },
    { name: "Sat", value: 38 },
    { name: "Sun", value: 43 },
  ],
  products: [
    { name: "Mon", value: 120 },
    { name: "Tue", value: 98 },
    { name: "Wed", value: 86 },
    { name: "Thu", value: 150 },
    { name: "Fri", value: 130 },
    { name: "Sat", value: 140 },
    { name: "Sun", value: 160 },
  ],
};

const monthlyData = {
  sales: [
    { name: "Jan", value: 65000 },
    { name: "Feb", value: 59000 },
    { name: "Mar", value: 80000 },
    { name: "Apr", value: 81000 },
    { name: "May", value: 56000 },
    { name: "Jun", value: 55000 },
    { name: "Jul", value: 70000 },
    { name: "Aug", value: 85000 },
    { name: "Sep", value: 72000 },
    { name: "Oct", value: 69000 },
    { name: "Nov", value: 90000 },
    { name: "Dec", value: 95000 },
  ],
  customers: [
    { name: "Jan", value: 400 },
    { name: "Feb", value: 300 },
    { name: "Mar", value: 500 },
    { name: "Apr", value: 450 },
    { name: "May", value: 380 },
    { name: "Jun", value: 420 },
    { name: "Jul", value: 480 },
    { name: "Aug", value: 520 },
    { name: "Sep", value: 460 },
    { name: "Oct", value: 490 },
    { name: "Nov", value: 550 },
    { name: "Dec", value: 600 },
  ],
  products: [
    { name: "Jan", value: 2400 },
    { name: "Feb", value: 2210 },
    { name: "Mar", value: 2900 },
    { name: "Apr", value: 3000 },
    { name: "May", value: 2500 },
    { name: "Jun", value: 2700 },
    { name: "Jul", value: 3100 },
    { name: "Aug", value: 3400 },
    { name: "Sep", value: 2800 },
    { name: "Oct", value: 3200 },
    { name: "Nov", value: 3600 },
    { name: "Dec", value: 3900 },
  ],
};

const yearlyData = {
  sales: [
    { name: "2019", value: 450000 },
    { name: "2020", value: 380000 },
    { name: "2021", value: 520000 },
    { name: "2022", value: 680000 },
    { name: "2023", value: 750000 },
    { name: "2024", value: 820000 },
  ],
  customers: [
    { name: "2019", value: 2400 },
    { name: "2020", value: 2100 },
    { name: "2021", value: 2800 },
    { name: "2022", value: 3200 },
    { name: "2023", value: 3600 },
    { name: "2024", value: 4200 },
  ],
  products: [
    { name: "2019", value: 18000 },
    { name: "2020", value: 16500 },
    { name: "2021", value: 21000 },
    { name: "2022", value: 26000 },
    { name: "2023", value: 29000 },
    { name: "2024", value: 32000 },
  ],
};

type DataType = "sales" | "customers" | "products";
type PeriodType = "weekly" | "monthly" | "yearly";

export const SumaryChart = () => {
  const [dataType, setDataType] = useState<DataType>("sales");
  const [period, setPeriod] = useState<PeriodType>("monthly");

  // Obtener los datos según el período seleccionado
  const getData = () => {
    const dataMap = {
      weekly: weeklyData,
      monthly: monthlyData,
      yearly: yearlyData,
    };
    return dataMap[period][dataType];
  };

  // Obtener el título según el tipo de dato
  const getTitle = () => {
    const titles = {
      sales: "Sales",
      customers: "Customers",
      products: "Products",
    };
    return titles[dataType];
  };

  // Obtener el color de la barra según el tipo de dato
  const getBarColor = () => {
    const colors = {
      sales: "#3b82f6", // blue
      customers: "#10b981", // green
      products: "#f59e0b", // amber
    };
    return colors[dataType];
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Summary Chart - {getTitle()}</CardTitle>
          <div className="flex gap-2">
            <Select
              value={dataType}
              onValueChange={(value) => setDataType(value as DataType)}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Select data" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sales">Sales</SelectItem>
                <SelectItem value="customers">Customers</SelectItem>
                <SelectItem value="products">Products</SelectItem>
              </SelectContent>
            </Select>

            <Select
              value={period}
              onValueChange={(value) => setPeriod(value as PeriodType)}
            >
              <SelectTrigger className="w-[150px]">
                <SelectValue placeholder="Select period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart data={getData()}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="value" fill={getBarColor()} name={getTitle()} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};
