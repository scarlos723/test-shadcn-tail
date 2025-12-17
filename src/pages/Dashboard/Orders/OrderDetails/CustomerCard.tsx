import { Card } from "@/components/ui/card";
import { UserIcon } from "lucide-react";

export const CustomerCard = (props: {
  customer: {
    customerName: string;
    email: string;
    phone: string;
    since: string;
  };
}) => {
  const { customer } = props;
  return (
    <Card className="p-6">
      <div className="flex gap-2">
        <div className="bg-gray-200 rounded-md size-10 flex items-center justify-center">
          <UserIcon></UserIcon>
        </div>
        <div>
          <p className="font-medium text-gray-500">{customer.customerName}</p>
          <p className="text-sm text-gray-500">
            Customer since {customer.since}
          </p>
        </div>
      </div>
      <div className="flex justify-between  text-sm">
        <div>
          <p className="text-gray-500">Phone</p>
          <p className="font-medium">{customer.phone}</p>
        </div>
        <div>
          <p className="text-gray-500">Email</p>
          <p className="font-medium">{customer.email}</p>
        </div>
      </div>
    </Card>
  );
};
