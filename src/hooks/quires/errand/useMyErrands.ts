import { errandApi } from '@/api/errand/errandApi';
import { ERRAND_KEYS } from '@/api/errand/errandKeys';
import { useQuery } from '@tanstack/react-query';

export const useMyErrands = () => {
  return useQuery({
    queryKey: ERRAND_KEYS.myLists(),
    queryFn: () => errandApi.getMyErrand(),
  });
};
