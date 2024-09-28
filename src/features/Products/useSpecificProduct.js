import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getSpecificProduct } from "../../services/apiProducts";

const useSpecificProduct = () => {
  const { productId } = useParams();

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", productId],
    queryFn: () => getSpecificProduct(productId),
  });

  return { product, isLoading };
};

export default useSpecificProduct;
