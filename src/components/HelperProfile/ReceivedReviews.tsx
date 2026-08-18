import ReviewMention from './ReviewMention';
import ReviewCard from './ReviewCard';
import { ReviewResponse } from '@/interfaces/review.interface';
import { REVIEW_TAG } from '@/constants/review-tag';

interface Props {
  reviews?: ReviewResponse[];
}

function ReceivedReviews({ reviews }: Props) {
  return (
    <div className="flex flex-col gap-3 pb-20">
      <div className="flex flex-col gap-3">
        <p className="text-[18px]">받은 후기</p>
        <div className="flex flex-wrap items-center gap-2">
          {REVIEW_TAG.map((item) => (
            <ReviewMention mention={item.text} />
          ))}
        </div>

        {/* 후기카드 */}
        <div className="flex flex-col gap-4">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
    </div>
  );
}

export default ReceivedReviews;
