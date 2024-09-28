import { useMutation } from "@tanstack/react-query";
import { forgetPassword as forgetPasswordApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useForgetPassword = () => {
  const navigate = useNavigate();
  const { mutate: forgetPassword, isPending } = useMutation({
    mutationFn: forgetPasswordApi,
    onSuccess: (data) => {
      toast.success(data.message);
      navigate("/verify-code");
    },
    onError: (err) => toast.error(err.message),
  });
  return { forgetPassword, isPending };
};

export default useForgetPassword;

// Reusable Code to handle forgetPassword and verify code and reset Password with one custom hook, i will use it later
/*
import { useMutation } from "@tanstack/react-query";
import { handleForgetPassword } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useHandleForgetPassword = (type) => {
  const navigate = useNavigate();
  const { mutate: handlePassword, isPending } = useMutation({
    mutationFn: async (data) => {
      if (type === "email") {
        return await handleForgetPassword(data);
      } else if (type === "resetCode") {
        return await handleForgetPassword(data);
      }
    },
    onSuccess: (data) => {

      toast.success(data.message);
      if (type === "email") navigate("/verify-code");
    },
    onError: (err) => toast.error(err.message),
  });
  return { handlePassword, isPending };
};

export default useHandleForgetPassword;
*/
