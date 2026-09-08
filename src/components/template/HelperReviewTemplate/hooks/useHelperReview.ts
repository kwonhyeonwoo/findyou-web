import { useReviewCreateMutation } from '@/hooks/mutations/review/useReviewCreateMutation';
import { ReviewTag } from '@/interfaces/review.interface';
import { useParams, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

export const useHelperReview = () => {
  const { mutate } = useReviewCreateMutation();
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
    handleReviewSubmit,
    handleReviewChange,
  };
};
