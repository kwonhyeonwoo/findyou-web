import ReviewMention from './ReviewMention';
import ReviewCard from './ReviewCard';
import { ReviewResponse, ReviewTag } from '@/interfaces/review.interface';

interface Props {
  reviews: ReviewResponse[];
}

function ReceivedReviews({ reviews }: Props) {
  console.log('reviews', reviews);
  return (
    <div className="flex flex-col gap-3 pb-20">
      <div className="flex flex-col gap-3">
        <p className="text-[18px]">받은 후기</p>
        <div className="flex flex-wrap items-center gap-2">
          {/* {[
            '#시간이 빨라요',
            '#친절해요',
            '#응답이빨라요',
            '#착해요',
            '#응디시티',
          ].map((_) => (
            <ReviewMention mention={_} />
          ))} */}
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
