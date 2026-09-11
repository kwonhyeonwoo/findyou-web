import useGetMyHelperPostsQuery from '@/hooks/quires/helper/useGetMyHelperPostsQuery';
import { useReviewViewer } from '@/hooks/common/useReviewViewer';
import { HelperApplicationResponse } from '@/interfaces/helper-application.interface';
import { useUser } from '@/store/useUserStore';
import { useRouter } from 'next/navigation';

export const useHelperPostHook = () => {
  const router = useRouter();
  const { userId } = useUser();
  const { data: helperPostData, isLoading } = useGetMyHelperPostsQuery(
    userId ?? '',
  );
  const { selectedReview, isReviewOpen, openReceivedReview, closeReview } =
    useReviewViewer();

  const handleReceivedHistory = (helperPostId: string) => {
    router.push(`/history/received/${helperPostId}`);
  };
  const handleAcceptedActive = (helperPostId: string) => {
    router.push(`/helper/${helperPostId}/progress`);
  };

  const handleCompletedActive = (
    completedApplication: HelperApplicationResponse,
  ) => {
    if (completedApplication.hasWrittenReview) {
      openReceivedReview(completedApplication.reviews, userId);
    } else {
      router.push(`/helper/${completedApplication.id}/review`);
    }
  };

  const handleSelectedReview = (
    completedApplication: HelperApplicationResponse,
  ) => {
    openReceivedReview(completedApplication.reviews, userId);
  };

  return {
    helperPostData,
    isLoading,
    selectedReview,
    isReviewOpen,
    userId,
    handleSelectedReview,
    closeReview,
    handleCompletedActive,
    handleAcceptedActive,
    handleReceivedHistory,
  };
};
