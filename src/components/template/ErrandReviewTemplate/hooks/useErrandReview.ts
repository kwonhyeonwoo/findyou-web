import { useCreateErrandReview } from "@/hooks/mutations/review/useCreateErrandReview";
import { useReviewContent, useReviewRating, useReviewTags } from "@/store/useReviewStore";
import { useParams } from "next/navigation";

export const useErrandReview = () => {
  const { id } = useParams();
  const { mutate } = useCreateErrandReview();
  const { reviewContent: content } = useReviewContent();
  const { rating } = useReviewRating();
  const { tags } = useReviewTags();
  const handleReviewSubmit = () => {
    mutate({
      data: {
        content,
        rating,
        tags,
      }, errandApplicationId: String(id)
    })
  };
  return { handleReviewSubmit };
};
