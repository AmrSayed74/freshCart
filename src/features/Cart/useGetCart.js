import { useQuery } from "@tanstack/react-query";
import { getCart } from "../../services/apiCart";

const useGetCart = () => {
  const { data: cart, isLoading } = useQuery({
    queryKey: ["cart-items"],
    queryFn: getCart,
  });
  return { cart, isLoading };
};

export default useGetCart;
