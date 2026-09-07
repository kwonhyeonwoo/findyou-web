import { ReviewTag } from '@/interfaces/review.interface';
import { useReviewContent, useReviewHoverRating, useReviewRating, useReviewTags } from '@/store/useReviewStore';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export const useCommonReview = () => {
  const { id } = useParams();
  const { tags, setSelectedTags } = useReviewTags();
  const { reviewContent, setReviewContent } = useReviewContent();
  const { rating, setRating } = useReviewRating();
  const { hoverRating, setHoverRating } = useReviewHoverRating();

  const handleHoverRating = (star: number) => setHoverRating(star);
  const handleHoverLeave = () => setHoverRating(0);

  return {
    rating,
    tags,
    reviewContent,
    hoverRating,
    setRating,
    setSelectedTags,
    handleHoverLeave,
    handleHoverRating,
    setReviewContent,
  };
};
