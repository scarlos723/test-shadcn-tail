import { useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const optionTimeSelect = [
  { label: "this week", value: "7_days" },
  { label: "Last 30 days", value: "30_days" },
  { label: "Last 6 months", value: "6_months" },
  { label: "Last year", value: "1_year" },
];
export const KpiCard = (props: {
  items: { label: string; value: string }[];
  icon: React.ReactNode;
}) => {
  const [activeSelection, setActiveSelection] = useState(
    optionTimeSelect[0].value
  );
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <div className="flex gap-2 items-center">
            {props.icon}
            {/* <CardDescription>January - June 2024</CardDescription> */}
            <Select value={activeSelection} onValueChange={setActiveSelection}>
              <SelectTrigger
                className="ml-auto h-7 w-[130px] rounded-lg pl-2.5"
                aria-label="Select a value"
              >
                <SelectValue placeholder="This wekend" />
              </SelectTrigger>
              <SelectContent align="end" className="rounded-xl">
                {optionTimeSelect.map((item, key) => {
                  return (
                    <SelectItem
                      key={key}
                      value={item.value}
                      className="rounded-lg [&_span]:flex"
                    >
                      <div className="flex items-center gap-2 text-xs">
                        <span className="flex h-3 w-3 shrink-0 rounded-xs" />
                        {item.label}
                      </div>
                    </SelectItem>
                  );
                })}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-1 justify-center pb-0">
        {/* Chart placeholder */}
        <div className="h-18 w-full rounded-lg flex items-center justify-between">
          {props.items.map((item, index) => (
            <div key={index} className="mx-4">
              <div className="text-sm text-gray-500">{item.label}</div>
              <div className="text-2xl font-bold">{item.value}</div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
