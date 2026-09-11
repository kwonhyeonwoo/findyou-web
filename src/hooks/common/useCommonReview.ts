import { ReviewTag } from '@/interfaces/review.interface';
import {
  useReviewContent,
  useReviewHoverRating,
  useReviewRating,
  useReviewTags,
} from '@/store/useReviewStore';
import { useState } from 'react';

export const useCommonReview = () => {
  const [reviewId, setReviewId] = useState<string>('');
  const [] = useState<boolean>(false);
  const { tags, setSelectedTags } = useReviewTags();
  const { reviewContent, setReviewContent } = useReviewContent();
  const { rating, setRating } = useReviewRating();
  const { hoverRating, setHoverRating } = useReviewHoverRating();

  const handleHoverRating = (star: number) => setHoverRating(star);
  const handleHoverLeave = () => setHoverRating(0);

  const handleReviewOpen = (reviewId: string) => {
    setReviewId(reviewId);
  };
  return {
    rating,
    tags,
    reviewContent,
    hoverRating,
    reviewId,
    handleReviewOpen,
    setRating,
    setSelectedTags,
    handleHoverLeave,
    handleHoverRating,
    setReviewContent,
  };
};
