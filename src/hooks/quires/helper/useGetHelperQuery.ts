import { helperApi } from '@/api/helper/helperApi';
import { HELPER_KEYS } from '@/api/helper/helperKeys';
import { useQuery } from '@tanstack/react-query';

export const useGetHelperQuery = (id: string) => {
  return useQuery({
    queryKey: HELPER_KEYS.detail(id),
    queryFn: () => helperApi.getHelper(id),
  });
};
