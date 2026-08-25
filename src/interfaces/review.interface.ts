import { ErrandResponse } from './errand.interface';
import { UserResponse } from './user.interface';

export enum ReviewRole {
  HELPER = 'HELPER',
  USER = 'CLIENT',
}
export enum ReviewTag {
  PUNCTUAL = 'PUNCTUAL', // 시간을 잘 지켜요
  KIND = 'KIND', // 친절해요
  FAST = 'FAST', // (작업/이동) 시간이 빨라요
  GOOD_COMM = 'GOOD_COMM', // 응답이 빨라요
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

  reviewee: UserResponse; // 리뷰 대상자

  role: ReviewRole;

  errand: ErrandResponse;

  createdAt: Date;
}
