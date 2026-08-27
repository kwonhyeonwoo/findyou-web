import useGetMyHelperPostsQuery from '@/hooks/quires/helper/useGetMyHelperPostsQuery';
import { useUser } from '@/store/useUserStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function useReceivedHistory() {
  const router = useRouter();
  const { userId } = useUser();
  const { data, isLoading } = useGetMyHelperPostsQuery(userId ?? '');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [helperPostId, setHelperPostId] = useState<string>('');
  const handleReceivedHistory = (helperPostId: string) => {
    router.push(`/history/received/${helperPostId}`);
  };
  const handleAcceptedActive = (appliId: string) => {
    router.push(`/helper/${appliId}/progress`);
  };

  const handleCompletedActive = (id: string, appliId: string) => {
    const helperPost = data?.find((item) => item.id === id);
    const application = helperPost?.applications.find((app) => app.id === appliId);

    console.log('first', application)

  }

  const review = data?.map((item) => {
    const application = item.applications;
    return application.find((app) => app.reviews)
  });
  return {
    data,
    isLoading,
    handleCompletedActive,
    handleAcceptedActive,
    handleReceivedHistory,
  };
}
