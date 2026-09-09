import { CustomStatus } from './common.interface';
import { HelperPostResponse } from './helper-post.interface';
import { ReviewResponse } from './review.interface';
import { UserResponse } from './user.interface';

export interface HelperApplicationRequest {
  message: string;
  openLink: string;
  saveAsDefault: boolean;
  helperId: string;
}

export interface HelperApplicationResponse {
  id: string;
  message: string;
  openLink: string;
  status: CustomStatus;
  helperPosts: HelperPostResponse;
  client: UserResponse;
  hasWrittenReview: boolean;
  reviews: ReviewResponse[];
  review?: ReviewResponse;
  createdAt: Date;
  updatedAt: Date;
}
