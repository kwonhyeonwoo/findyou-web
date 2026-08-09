import useGetReceivedApplicationsQuery from '@/hooks/quires/helper/useGetReceivedApplicationsQuery';
import { useUser } from '@/store/useUserStore';
import { useRouter } from 'next/navigation';

export default function useReceivedHistory() {
  const router = useRouter();
  const { userId } = useUser();
  const { data, isLoading } = useGetReceivedApplicationsQuery(userId ?? '');
  const handleReceivedHistory = (helperPostId: string) => {
    router.push(`/history/received/${helperPostId}`);
  };
  return {
    data,
    isLoading,
    handleReceivedHistory,
  };
}
