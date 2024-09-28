import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../services/apiProducts";

const useProducts = () => {
  const { data: products, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return { products, isLoading };
};

export default useProducts;
