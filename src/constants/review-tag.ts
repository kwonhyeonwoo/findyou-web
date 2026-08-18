import { ReviewTag } from '@/interfaces/review.interface';

export const reviewTagFilter = {
  PUNCTUAL: '시간을 잘 지켜요', // 시간을 잘 지켜요
  KIND: '친절해요', // 친절해요
  FAST: '시간이 빨라요', // (작업/이동) 시간이 빨라요
  GOOD_COMM: '응답이 빨라요', // 응답이 빨라요
};

export const REVIEW_TAG: { type: ReviewTag; text: string }[] = [
  {
    type: ReviewTag.PUNCTUAL,
    text: '시간을 잘 지켜요',
  },
  {
    type: ReviewTag.KIND,
    text: '친절해요',
  },
  {
    type: ReviewTag.FAST,
    text: '시간이 빨라요',
  },
  {
    type: ReviewTag.GOOD_COMM,
    text: '응답이 빨라요',
  },
];
