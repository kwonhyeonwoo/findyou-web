import { CustomStatus } from './common.interface';
import { ErrandResponse } from './errand.interface';
import { HelperPostResponse } from './helper-post.interface';
import { ReviewResponse } from './review.interface';
import { UserResponse } from './user.interface';

export interface ErrandApplicationResponse {
  id: string;
  message: string;
  helper: UserResponse; //  헬퍼 게시글..?
  errand: ErrandResponse;
  status: CustomStatus;
  hasWrittenReview: boolean;
  reviews: ReviewResponse[];
  openLink: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface ErrandApplicationStatusRequest {
  id: string;
  status: 'ACCEPTED' | 'REJECTED';
}
