import { userApi } from "@/api/user/userApi";
import { USER_KEYS } from "@/api/user/userKeys";
import { useQuery } from "@tanstack/react-query";

export const useGetHelper = (id: string) => {
  return useQuery({
    queryKey: USER_KEYS.detail(id),
    queryFn: () => userApi.getHelper(id),
  });
};
