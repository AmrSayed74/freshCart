import { useMutation } from "@tanstack/react-query";
import { resetPassword as resetPasswordApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useResetPassword = () => {
  const navigate = useNavigate();
  const { mutate: resetPassword, isPending } = useMutation({
    mutationFn: resetPasswordApi,
    onSuccess: (data) => {
     
      toast.success("Password successfully reset");
      navigate("/login");
    },
    onError: (err) => toast.error(err.message),
  });
  return { resetPassword, isPending };
};

export default useResetPassword;
