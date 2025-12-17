import { Card } from "@/components/ui/card";
import { MapPin } from "lucide-react";

export const AddressCard = (props: {
  homeAddress: string;
  billingAddress: string;
}) => {
  const { homeAddress, billingAddress } = props;
  return (
    <Card className="p-6">
      <div>
        <div className="bg-gray-200 rounded-md size-10 flex items-center justify-center">
          <MapPin></MapPin>
        </div>
      </div>
      <div className="flex justify-between gap-4 text-sm">
        <div>
          <p className=" text-gray-500">Home Address</p>
          <p className="font-medium">{homeAddress}</p>
        </div>
        <div>
          <p className=" text-gray-500">Billing Address</p>
          <p className="font-medium">{billingAddress}</p>
        </div>
      </div>
    </Card>
  );
};
