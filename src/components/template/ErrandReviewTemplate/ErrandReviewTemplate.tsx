'use client';

import SubmitButton from '@/components/common/SubmitButton/SubmitButton';
import HelperReviewTextarea from '@/components/HelperReview/HelperReviewTextarea';
import ReviewTagSelector from '@/components/HelperReview/ReviewTagSelector';
import StarRating from '@/components/HelperReview/StarRating';
import { useCommonReview } from '@/hooks/common/useCommonReview';
import { useErrandReview } from './hooks/useErrandReview';

export default function ErrandReviewTemplate() {
  const {
    rating,
    tags,
    reviewContent,
    hoverRating,
    setRating,
    setSelectedTags,
    handleHoverLeave,
    handleHoverRating,
    setReviewContent,
  } = useCommonReview();
  const { handleReviewSubmit } = useErrandReview();
  return (
    <div className="h-full flex-col">
      <div className="flex-col border-b border-b-[#F2F2F2] pb-10">
        <div className="mt-8 flex flex-col items-center gap-2">
          <p className="text-[20px] font-bold text-[#111827]">
            거래는 어떠셨나요?
          </p>
          <p className="text-[14px] text-[#6B7280]">
            거래 선호도는 나만 볼 수 있습니다.
          </p>
        </div>
        <StarRating
          hoverRating={hoverRating}
          rating={rating}
          onHoverRating={handleHoverRating}
          onHoverReave={handleHoverLeave}
          onRatingClicked={setRating}
        />
      </div>
      <ReviewTagSelector selectedTags={tags} onTagClick={setSelectedTags} />
      <HelperReviewTextarea
        textLength={reviewContent.length}
        text={reviewContent}
        onTextChange={setReviewContent}
      />
      <div className="mt-auto h-full border-t border-t-[#F2F2F2] pt-6">
        <SubmitButton
          text="후기등록"
          onClick={handleReviewSubmit}
          isPending={false}
          isDisabled={false}
          bgColor="bg-teal-primary"
        />
      </div>
    </div>
  );
}
