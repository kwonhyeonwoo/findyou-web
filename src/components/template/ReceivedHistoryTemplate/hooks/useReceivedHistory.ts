import useGetReceivedApplicationsQuery from '@/hooks/quires/helper/useGetReceivedApplicationsQuery';
import { useUser } from '@/store/useUserStore';

export default function useReceivedHistory() {
  const { userId } = useUser();
  const { data, isLoading } = useGetReceivedApplicationsQuery(userId ?? '');
  return {
    data,
    isLoading,
  };
}
