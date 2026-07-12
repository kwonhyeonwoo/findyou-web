import { useSearchParams } from "next/navigation";
import React, { useState } from "react";

export const useHelperReview = () => {
  const [rating, setRating] = useState<number>(0);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [review, setReview] = useState<string>("");

  const [hoverRating, setHoverRating] = useState<number>(0);
  const searchParams = useSearchParams();

  const nickName = searchParams.get("nickName");
  const id = searchParams.get("id");
  const handleTagClick = (tag: string) => {
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
  }
  return {
    rating,
    hoverRating,
    nickName,
    selectedTags,
    review,
    handleTagClick,
    handleHoverLeave,
    handleHoverRating,
    handleRatingClicked,
    handleReviewChange,
  };
};
