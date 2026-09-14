import { helperApplicationApi } from '@/api/helper-application/helperApplicationApi';
import { HELPER_APPLICATION_KEYS } from '@/api/helper-application/helperApplicationKeys';
import { useQuery } from '@tanstack/react-query';

export const useGetDetailHelperApplication = (id: string) => {
  return useQuery({
    queryKey: HELPER_APPLICATION_KEYS.detail(id),
    queryFn: () => helperApplicationApi.getDetailApplication(id),
  });
};
