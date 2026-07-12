import { useState } from "react";
import Image from "next/image";

interface Props {
  hoverRating: number;
  rating: number;
  onHoverReave: () => void;
  onHoverRating: (star: number) => void;
  onRatingClicked: (star: number) => void;
}

export default function StarRating({
  hoverRating,
  rating,
  onHoverRating,
  onHoverReave,
  onRatingClicked,
}: Props) {
  return (
    <div className="flex w-full justify-center gap-3 pt-6">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= (hoverRating || rating);
        return (
          <button
            key={star}
            type="button"
            onClick={() => onRatingClicked(star)} // 클릭 시 해당 점수로 확정
            onMouseEnter={() => onHoverRating(star)} // 마우스 올리면 임시 점수 적용
            onMouseLeave={onHoverReave} // 마우스 떼면 임시 점수 초기화
            style={{
              border: "none",
              background: "transparent",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <Image
              src={
                isFilled ? "/common/star-filled.svg" : "/common/star-empty.svg"
              }
              alt={`${star}점 별`}
              width={32}
              height={32}
            />
          </button>
        );
      })}
    </div>
  );
}
