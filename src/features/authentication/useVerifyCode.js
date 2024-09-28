import { useMutation } from "@tanstack/react-query";
import { verifyCode as verifyCodeApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useVerifyCode = () => {
  const navigate = useNavigate();
  const { mutate: verifyCode, isPending } = useMutation({
    mutationFn: verifyCodeApi,
    onSuccess: (data) => {
   
      toast.success("Valid verification Code");
      navigate("/reset-password");
    },
    onError: (err) => toast.error(err.message),
  });
  return { verifyCode, isPending };
};

export default useVerifyCode;
