import { useReviewCreateMutation } from '@/hooks/mutations/review/useReviewCreateMutation';
import {
  useReviewContent,
  useReviewRating,
  useReviewTags,
} from '@/store/useReviewStore';
import { useParams } from 'next/navigation';

export const useHelperReview = () => {
  const { id } = useParams();
  const { mutate } = useReviewCreateMutation();
  const { reviewContent } = useReviewContent();
  const { rating } = useReviewRating();
  const { tags } = useReviewTags();

  const handleReviewSubmit = () => {
    mutate({
      data: { rating, tags, content: reviewContent },
      helperApplicationId: String(id),
    });
  };

  return { handleReviewSubmit };
};
