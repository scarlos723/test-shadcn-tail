import { useNavigate } from "react-router";

export const CustomerNameCell = ({
  customerId,
  name,
}: {
  customerId: string;
  name: string;
}) => {
  const navigate = useNavigate();
  return (
    <div
      className="cursor-pointer font-medium text-blue-600 hover:text-blue-800 hover:underline"
      onClick={() => navigate(customerId)}
    >
      {name}
    </div>
  );
};
