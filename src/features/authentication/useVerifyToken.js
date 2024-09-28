import { useMutation, useQuery } from "@tanstack/react-query";
import { verifyToken } from "../../services/apiAuth";
import { useAuth } from "../../context/AuthContext";

const useVerifyToken = () => {
  const { loginUser } = useAuth();
  const { isLoading, mutate } = useMutation({
    mutationFn: verifyToken,
    onSuccess: (data) => {
   
      loginUser(data);
    },
  });
  return { isLoading, mutate };
};

export default useVerifyToken;
