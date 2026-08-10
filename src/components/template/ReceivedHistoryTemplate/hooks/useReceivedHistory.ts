import useGetMyHelperPostsQuery from '@/hooks/quires/helper/useGetMyHelperPostsQuery';
import { useUser } from '@/store/useUserStore';
import { useRouter } from 'next/navigation';

export default function useReceivedHistory() {
  const router = useRouter();
  const { userId } = useUser();
  const { data, isLoading } = useGetMyHelperPostsQuery(userId ?? '');
  const handleReceivedHistory = (helperPostId: string) => {
    router.push(`/history/received/${helperPostId}`);
  };
  return {
    data,
    isLoading,
    handleReceivedHistory,
  };
}
