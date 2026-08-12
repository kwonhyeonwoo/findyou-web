import { helperApplicationApi } from '@/api/helper-application/helperApplicationApi';
import { HELPER_APPLICATION_KEYS } from '@/api/helper-application/helperApplicationKeys';
import { useQuery } from '@tanstack/react-query';

export default function useGetAcceptedApplicationQuery(appliId: string) {
  return useQuery({
    queryFn: () => helperApplicationApi.getAcceptedApplication(appliId),
    queryKey: HELPER_APPLICATION_KEYS.detail(appliId),
  });
}
