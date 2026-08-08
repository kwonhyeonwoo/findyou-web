import { helperApi } from '@/api/helper/helperApi';
import { HELPER_KEYS } from '@/api/helper/helperKeys';
import { useQuery } from '@tanstack/react-query';

export default function useGetReceivedApplicationsQuery(id: string) {
  return useQuery({
    queryKey: HELPER_KEYS.applications(id),
    queryFn: () => helperApi.getReceivedApplications(),
  });
}
