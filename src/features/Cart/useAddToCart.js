import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../../services/apiCart";
import toast from "react-hot-toast";

const useAddToCart = () => {
  const queryClient = useQueryClient();

  const { mutate, isPending, error } = useMutation({
    mutationFn: addToCart,
    onError: () => {
      console.error("Error in useAddToCart:", error);

      toast.error(error?.message || "Failed to add product to cart");
    },
    onSuccess: ({ data }) => {
      toast.success("Product successfully added to your cart");
      queryClient.invalidateQueries({
        queryKey: ["cart-items"],
      });
    },
  });

  return { isPending, mutate };
};

export default useAddToCart;
