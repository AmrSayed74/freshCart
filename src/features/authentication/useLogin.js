import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useLogin = () => {
  const navigate = useNavigate();
  const { mutate: login, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: (data) => {
      localStorage.setItem("userToken", data.token);
      toast.success("Login successfully");
      navigate("/home");
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message || "Failed to Login");
    },
  });

  return { login, isPending };
};

export default useLogin;
