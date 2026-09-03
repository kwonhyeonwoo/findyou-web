import { errandApplicationApi } from "@/api/errand-application/errandApplicationApi";
import { ERRAND_APPLICAION_KEYS } from "@/api/errand-application/errandApplicationKeys";
import { useQuery } from "@tanstack/react-query";

export const useGetErrandApplicationsQuery = () => {
  return useQuery({
    queryKey: ERRAND_APPLICAION_KEYS.lists(),
    queryFn: () => errandApplicationApi.getApplications(),
  });
};
