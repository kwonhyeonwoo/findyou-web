import { REVIEW_TAGS } from '@/constants/helper-review.constant';
import { ReviewTag } from '@/interfaces/review.interface';

interface Props {
  rating: number;
  tags: ReviewTag[];
  content: string;
}

function ReviewDropCard({ rating, tags, content }: Props) {
  return (
    <div className="flex flex-col gap-5 px-5 py-4">
      <div className="border-b-basic-border flex flex-col items-center gap-3 border-b pb-3">
        <p className="font-bold">내가 남긴 리뷰</p>
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`${star <= rating ? 'text-[#F5A623]' : 'text-[#E0E0E0]'} text-[24px]`}
            >
              ★
            </span>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-[#8B95A1]">선택한 태그</p>
        <div className="flex gap-4">
          {tags.map((tagType, idx) => {
            const tag = REVIEW_TAGS.find((t) => t.type === tagType);
            return (
              <div
                key={idx}
                className="text-teal-primary bg-teal-light flex items-center justify-center rounded-[8px] px-4 py-2 text-[12px] font-semibold"
              >
                {tag?.name}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <p className="font-semibold text-[#8B95A1]">남긴 후기</p>
        <div className="reading rounded-[12px] bg-[#F7F8FA] p-[15px] text-[14px] leading-normal text-[#4E5968]">
          {content}
        </div>
      </div>
    </div>
  );
}

export default ReviewDropCard;
