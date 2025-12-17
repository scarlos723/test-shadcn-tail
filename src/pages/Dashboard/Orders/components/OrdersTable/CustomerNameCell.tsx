import { useNavigate } from "react-router";

interface CustomerNameCellProps {
  orderId: string;
  name: string;
}

export const CustomerNameCell = ({ orderId, name }: CustomerNameCellProps) => {
  const navigate = useNavigate();

  return (
    <div
      className="cursor-pointer font-medium text-blue-600 hover:text-blue-800 hover:underline"
      onClick={(e) => {
        e.stopPropagation();
        navigate(`${orderId}`);
      }}
    >
      {name}
    </div>
  );
};
