import { ReviewTag } from '@/interfaces/review.interface';
import { create } from 'zustand';

interface ReviewStore {
  rating: number;
  tags: ReviewTag[];
  hover: number;
  review: string;
  setRating: (rating: number) => void;
  setSelectTags: (tags: ReviewTag[]) => void;
  setHoverRating: (hover: number) => void;
  setReview: (review: string) => void;
}

export const useReviewStore = create<ReviewStore>((set) => ({
  rating: 0,
  tags: [],
  hover: 0,
  review: '',
  setRating: (rating: number) => set({ rating }),
  setSelectTags: (tags: ReviewTag[]) => set({ tags }),
  setHoverRating: (hover: number) => set({ hover }),
  setReview: (review: string) => set({ review }),
}));

export const useReviewRating = () => {
  const setRating = useReviewStore((state) => state.setRating);
  const rating = useReviewStore((state) => state.rating);
  return {
    rating,
    setRating,
  };
};

export const useReviewTags = () => {
  const setTags = useReviewStore((state) => state.setSelectTags);
  const tags = useReviewStore((state) => state.tags);
  return {
    tags,
    setTags,
  };
};
