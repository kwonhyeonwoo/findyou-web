import { ReviewResponse } from '@/interfaces/review.interface';
import { useState } from 'react';

export const useReviewViewer = () => {
  const [selectedReview, setSelectedReview] = useState<
    ReviewResponse | undefined
  >(undefined);
  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const openReceivedReview = (
    reviews: ReviewResponse[] | undefined,
    userId: string | null,
  ) => {
    const receivedReview = reviews?.find(
      (review) => review.reviewee.id === userId,
    );
    if (!receivedReview) {
      return;
    }
    setSelectedReview(receivedReview);
    setIsReviewOpen(true);
  };

  const closeReview = () => setIsReviewOpen(false);

  return {
    selectedReview,
    isReviewOpen,
    openReceivedReview,
    closeReview,
  };
};
