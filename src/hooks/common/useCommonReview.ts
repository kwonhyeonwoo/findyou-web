import { ReviewTag } from '@/interfaces/review.interface';
import { useReviewRating, useReviewTags } from '@/store/useReviewStore';
import { useParams } from 'next/navigation';
import { useState } from 'react';

export const useCommonReview = () => {
  const { id } = useParams();
  //   const [rating, setRating] = useState<number>(0);
  const { tags, setTags } = useReviewTags();
  const [selectedTags, setSelectedTags] = useState<ReviewTag[]>([]);
  const [review, setReview] = useState<string>('');
  const [hoverRating, setHoverRating] = useState<number>(0);
  const { rating, setRating } = useReviewRating();
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

  return {
    rating,
    hoverRating,
    selectedTags,
    review,
    handleTagClick,
    handleHoverLeave,
    handleHoverRating,
    handleRatingClicked,
    handleReviewChange,
  };
};
