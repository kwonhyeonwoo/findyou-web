import { errandApplicationApi } from '@/api/errand-application/errandApplicationApi';
import { ERRAND_APPLICAION_KEYS } from '@/api/errand-application/errandApplicationKeys';
import { useQuery } from '@tanstack/react-query';

export const useProgressErrandApplication = (id: string) => {
  return useQuery({
    queryFn: () => errandApplicationApi.getProgressApplication(id),
    queryKey: ERRAND_APPLICAION_KEYS.detail(id),
  });
};
