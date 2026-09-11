import { helperApplicationApi } from '@/api/helper-application/helperApplicationApi';
import { HELPER_APPLICATION_KEYS } from '@/api/helper-application/helperApplicationKeys';
import { useQuery } from '@tanstack/react-query';

export default function useGetReceivedApplicationQuery(id: string) {
  return useQuery({
    queryKey: HELPER_APPLICATION_KEYS.myLists(id),
    queryFn: () => helperApplicationApi.getReceivedApplications(id),
  });
}
