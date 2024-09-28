import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearCart } from "../../services/apiCart";
import toast from "react-hot-toast";

const useClearCart = () => {
  const queryClient = useQueryClient();
  const { mutate: clear, isPending } = useMutation({
    mutationFn: clearCart,
    onSuccess: (data) => {
      toast.success("Cart successfully clear");
      queryClient.invalidateQueries({
        queryKey: ["cart-items"],
      });
    },
    onError: (err) => {
      toast.error(err.message || "can't remove");
    },
  });
  return { clear, isPending };
};

export default useClearCart;
