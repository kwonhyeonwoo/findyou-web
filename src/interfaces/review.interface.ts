import { ErrandResponse } from "./errand.interface";
import { UserResponse } from "./user.interface";

export enum ReviewRole {
    HELPER = 'HELPER',
    USER = 'USER',
}
export enum ReviewTag {
    PUNCTUAL = "PUNCTUAL",
    KIND = "KIND",
    FAST = "FAST",
    GOOD_COMM = "GOOD_COMM",
}

export interface ReviewCreateRequest {
    rating: number;
    tags: ReviewTag[];
    content: string;
}

export interface ReviewResponse {
    id: string;

    rating: number;

    tags: ReviewTag[];

    content: string;

    reviewer: UserResponse; // 리뷰작성자

    reviewee: UserResponse;// 리뷰 대상자

    role: ReviewRole;

    errand: ErrandResponse;

    createdAt: Date;
}