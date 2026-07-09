import { useGetHelper } from "@/hooks/quires/user/useGetHelper";
import { useParams } from "next/navigation";

export const useHelperProfile = () => {
  const { id } = useParams();
  const { data } = useGetHelper(String(id));

  return {
    data,
  };
};
