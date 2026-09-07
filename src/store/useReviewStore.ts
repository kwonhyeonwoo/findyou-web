import { ReviewTag } from '@/interfaces/review.interface';
import { create } from 'zustand';

interface ReviewStore {
  rating: number;
  tags: ReviewTag[];
  hoverRating: number;
  review: string;
  setRating: (rating: number) => void;
  setSelectTags: (tags: ReviewTag) => void;
  setHoverRating: (hover: number) => void;
  setReview: (review: string) => void;
}

export const useReviewStore = create<ReviewStore>((set) => ({
  rating: 0,
  tags: [],
  hoverRating: 0,
  review: '',
  setRating: (rating: number) => set({ rating }),
  setSelectTags: (tag: ReviewTag) => set((state) => ({
    tags: state.tags.includes(tag)
      ? state.tags.filter((item) => item !== tag)
      : [...state.tags, tag],
  })),
  setHoverRating: (hoverRating: number) => set({ hoverRating }),
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
  const tags = useReviewStore((state) => state.tags)
  const setSelectedTags = useReviewStore((state) => state.setSelectTags);
  return {
    tags,
    setSelectedTags,
  };
};

export const useReviewContent = () => {
  const reviewContent = useReviewStore((state) => state.review);
  const setReviewContent = useReviewStore((state) => state.setReview);
  return {
    reviewContent,
    setReviewContent
  }
}

export const useReviewHoverRating = () => {
  const hoverRating = useReviewStore((state) => state.hoverRating);
  const setHoverRating = useReviewStore((state) => state.setHoverRating);
  return {
    hoverRating,
    setHoverRating
  }
}
