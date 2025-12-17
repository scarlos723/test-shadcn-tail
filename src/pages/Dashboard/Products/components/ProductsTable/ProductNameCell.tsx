import { useNavigate } from "react-router";

interface ProductNameCellProps {
  productId: string;
  name: string;
}
export const ProductNameCell = ({ productId, name }: ProductNameCellProps) => {
  const navigate = useNavigate();
  return (
    <p
      className="cursor-pointer font-medium text-blue-600 hover:text-blue-800 hover:underline"
      onClick={() => navigate(`${productId}`)}
    >
      {name}
    </p>
  );
};
