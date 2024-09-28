import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProductCount } from "../../services/apiCart";
import toast from "react-hot-toast";

const useUpdateProduct = () => {
  const queryClient = useQueryClient();
  const { mutate: updatingProduct, isPending } = useMutation({
    mutationFn: updateProductCount,
    onSuccess: () => {
      toast.success("Product successfully updated");
      queryClient.invalidateQueries({
        queryKey: ["cart-items"],
      });
    },
    onError: (err) => {
      console.error(err.message);
      toast.error(err.message || "Failed to update product");
    },
  });
  return { updatingProduct, isPending };
};

export default useUpdateProduct;
