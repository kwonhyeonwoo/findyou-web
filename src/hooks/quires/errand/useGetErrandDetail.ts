import { errandApi } from "@/api/errand/errandApi";
import { ERRAND_KEYS } from "@/api/errand/errandKeys";
import { useQuery } from "@tanstack/react-query";

export const useGetErrandDetail = (id: string) => {
  return useQuery({
    queryKey: ERRAND_KEYS.detail(id),
    queryFn: () => errandApi.getErrand(id),
  });
};
