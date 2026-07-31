import { ReviewResponse } from "./review.interface";

export interface UserResponse {
    id: string;
    email: string;
    password: string;
    name: string;
    type: UserType;
    phone: string;
    address_dong: string;
    division: string; // kakao, naver, email
    address: string;
    lat: number; // 위도
    lng: number; // 경도
    nickName: string;
    profile?: string;
    receivedReviews?: ReviewResponse[], // 받은 리뷰
    writeReview?: ReviewResponse[]
}

export type UserType = "client" | 'helper' | null;