import useGetMyHelperPostsQuery from '@/hooks/quires/helper/useGetMyHelperPostsQuery';
import { HelperApplicationResponse } from '@/interfaces/helper-application.interface';
import { ReviewResponse } from '@/interfaces/review.interface';
import { useUser } from '@/store/useUserStore';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function useReceivedHistory() {
  const router = useRouter();
  const { userId } = useUser();
  const { data, isLoading } = useGetMyHelperPostsQuery(userId ?? '');
  const [selectedReview, setSelectedReview] = useState<
    ReviewResponse | undefined
  >(undefined);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleReceivedHistory = (helperPostId: string) => {
    router.push(`/history/received/${helperPostId}`);
  };
  const handleAcceptedActive = (appliId: string) => {
    router.push(`/helper/${appliId}/progress`);
  };

  const handleCompletedActive = (
    completedApplication: HelperApplicationResponse,
  ) => {
    if (completedApplication.hasWrittenReview) {
      setSelectedReview(completedApplication.review);
      setIsModalOpen(true);
    } else {
      router.push(`/helper/${completedApplication.id}/review`);
    }
  };

  return {
    data,
    isLoading,
    selectedReview,
    isModalOpen,
    userId,
    setIsModalOpen,
    handleCompletedActive,
    handleAcceptedActive,
    handleReceivedHistory,
  };
}
