import { useSearchParams } from "next/navigation";
import { useState } from "react";

export const useHelperReview = () => {
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const searchParams = useSearchParams();

  const nickName = searchParams.get("nickName");
  const id = searchParams.get("id");
  const handleRatingClicked = (star: number) => setRating(star);
  const handleHoverRating = (star: number) => setHoverRating(star);
  const handleHoverLeave = () => setHoverRating(0);
  return {
    rating,
    hoverRating,
    nickName,
    handleHoverLeave,
    handleHoverRating,
    handleRatingClicked,
  };
};
