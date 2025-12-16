import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
export const RecentOrders = (props: {
  orderItems: {
    id: string;
    customer: string;
    date: string;
    amount: string;
    status: string;
  }[];
}) => {
  return (
    <Card className="flex flex-col">
      <CardHeader className="flex-row items-start space-y-0 pb-0">
        <div className="grid gap-1">
          <CardTitle>Recent Orders</CardTitle>
          <div className="flex gap-2 items-center">
            {/* <CardDescription>January - June 2024</CardDescription> */}
          </div>
        </div>
      </CardHeader>
      <CardContent className="">
        {/* Chart placeholder */}
        <div className="flex flex-col gap-2">
          {props.orderItems.map((item, index) => (
            <div key={index} className="flex w-full gap-2 border-b p-4">
              <div className="w-10 h-10 max-h-10 rounded-md overflow-hidden">
                <img
                  src="https://picsum.photos/200/300"
                  alt="image order"
                  className="object-cover"
                />
              </div>
              <div className="flex justify-between w-full">
                <div>
                  <p>{item.customer}</p>
                  <p>
                    <b>{item.amount}</b>
                  </p>
                </div>
              </div>
              <div>
                <p className="text-gray-400 text-nowrap">{item.date}</p>
                <Badge>{item.status}</Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
