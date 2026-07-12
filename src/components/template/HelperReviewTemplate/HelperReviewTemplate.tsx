"use client";

import StarRating from "@/components/HelperReview/StarRating";
import { useHelperReview } from "./hooks/useHelperReview";

function HelperReviewTemplate() {
  const {
    nickName,
    hoverRating,
    rating,
    handleHoverLeave,
    handleHoverRating,
    handleRatingClicked,
  } = useHelperReview();
  return (
    <div className="flex-col">
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
  );
}

export default HelperReviewTemplate;
