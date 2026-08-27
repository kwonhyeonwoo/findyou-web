import { useReviewCreateMutation } from '@/hooks/mutations/review/useReviewCreateMutation';
import { ReviewTag } from '@/interfaces/review.interface';
import { useParams, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

export const useHelperReview = () => {
  const { id } = useParams();
  const [rating, setRating] = useState<number>(0);
  const [selectedTags, setSelectedTags] = useState<ReviewTag[]>([]);
  const [review, setReview] = useState<string>('');
  const [hoverRating, setHoverRating] = useState<number>(0);
  const searchParams = useSearchParams();
  const { mutate } = useReviewCreateMutation();

  const handleTagClick = (tag: ReviewTag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag],
    );
  };
  const handleRatingClicked = (star: number) => setRating(star);
  const handleHoverRating = (star: number) => setHoverRating(star);
  const handleHoverLeave = () => setHoverRating(0);
  const handleReviewChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = e.target;
    if (value.length > 100) {
      return;
    }
    setReview(value);
  };

  const handleReviewSubmit = () => {
    mutate({
      data: { rating, tags: selectedTags, content: review },
      helperApplicationId: String(id),
    });
  };
  return {
    rating,
    hoverRating,
    selectedTags,
    review,
    handleTagClick,
    handleHoverLeave,
    handleHoverRating,
    handleRatingClicked,
    handleReviewSubmit,
    handleReviewChange,
  };
};
