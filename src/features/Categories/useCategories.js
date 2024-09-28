import { useQuery } from "@tanstack/react-query";
import { getCategories } from "../../services/apiCategories";

const useCategories = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return { data, isLoading };
};

export default useCategories;
