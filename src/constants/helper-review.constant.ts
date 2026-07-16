import { ReviewTag } from "@/interfaces/review.interface";

export const HELPER_REVIEW_TAGS: {
    type: ReviewTag;
    name: string;
}[] = [
        {
            type: ReviewTag.KIND,
            name: "친절해요",
        },
        {
            type: ReviewTag.FAST,
            name: "응답이빨라요",
        },
        {
            type: ReviewTag.GOOD_COMM,
            name: "시간을잘지켜요",
        },
        {
            type: ReviewTag.PUNCTUAL,
            name: "신뢰도가있어요"
        }
    ];