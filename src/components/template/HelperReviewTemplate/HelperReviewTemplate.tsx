"use client";

import StarRating from "@/components/HelperReview/StarRating";
import { useHelperReview } from "./hooks/useHelperReview";
import ReviewTagSelector from "@/components/HelperReview/ReviewTagSelector";
import HelperReviewTextarea from "@/components/HelperReview/HelperReviewTextarea";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";

function HelperReviewTemplate() {
  const {
    nickName,
    hoverRating,
    rating,
    selectedTags,
    review,
    handleTagClick,
    handleReviewChange,
    handleHoverLeave,
    handleHoverRating,
    handleReviewSubmit,
    handleRatingClicked,
  } = useHelperReview();
  return (
    <div className="h-full flex-col">
      <div className="flex-col border-b border-b-[#F2F2F2] pb-10">
        <div className="mt-8 flex flex-col items-center gap-2">
          <p className="text-[20px] font-bold text-[#111827]">
            {nickName}님과의 거래는 어떠셨나요?
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
          onRatingClicked={handleRatingClicked}
        />
      </div>
      <ReviewTagSelector
        selectedTags={selectedTags}
        onTagClick={handleTagClick}
      />
      <HelperReviewTextarea
        textLength={review.length}
        text={review}
        onTextChange={handleReviewChange}
      />
      <div className="mt-auto h-full border-t border-t-[#F2F2F2] pt-6">
        <SubmitButton
          text="후기등록"
          Active={handleReviewSubmit}
          isPending={false}
          isDisabled={false}
          bgColor="bg-[#2A14B4]"
        />
      </div>
    </div>
  );
}

export default HelperReviewTemplate;
