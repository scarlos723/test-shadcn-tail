import { Card } from "@/components/ui/card";
import { Wallet } from "lucide-react";

export const PaymentCard = (props: {
  paymentMethod: string;
  orderType: string;
}) => {
  const { paymentMethod, orderType } = props;
  return (
    <Card className="p-6">
      <div>
        <div className="bg-gray-200 rounded-md size-10 flex items-center justify-center">
          <Wallet></Wallet>
        </div>
      </div>
      <div className="flex justify-between text-sm">
        <div>
          <p className="text-gray-500">Payment Method</p>
          <p className="font-medium">{paymentMethod}</p>
        </div>
        <div>
          <p className="text-gray-500">Order Type</p>
          <p className="font-medium">{orderType}</p>
        </div>
      </div>
    </Card>
  );
};
