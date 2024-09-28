import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "../../services/apiAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const navigate = useNavigate();
  const { mutate: signup, isPending } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      navigate("/login");
      toast.success("Account successfully created!");
    },
    onError: (error) => {
      toast.error(error.message || "Failed Signup please try again");
    },
  });

  return { signup, isPending };
};

export default useSignup;
