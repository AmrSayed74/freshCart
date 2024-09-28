import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeFromCart } from "../../services/apiCart";
import toast from "react-hot-toast";

const useDeleteFromCart = () => {
  const queryClient = useQueryClient();

  const { mutate: remove, isPending } = useMutation({
    mutationFn: removeFromCart,
    onSuccess: (data) => {
      toast.success("Product successfully Removed");
      queryClient.invalidateQueries({
        queryKey: ["cart-items"],
      });
    },
    onError: (err) => {
      toast.error(err.message || "can't remove");
    },
  });
  return { remove, isPending };
};

export default useDeleteFromCart;
