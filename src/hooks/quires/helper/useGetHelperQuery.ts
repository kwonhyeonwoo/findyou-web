import { helperPostApi } from '@/api/helper-post/helperPostApi';
import { HELPER_POST_KEYS } from '@/api/helper-post/helperPostKeys';
import { useQuery } from '@tanstack/react-query';

export const useGetHelperQuery = (id: string) => {
  return useQuery({
    queryKey: HELPER_POST_KEYS.detail(id),
    queryFn: () => helperPostApi.getHelper(id),
  });
};
