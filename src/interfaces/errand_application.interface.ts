import { CustomStatus } from './common.interface';
import { ErrandResponse } from './errand.interface';
import { HelperPostResponse } from './helper-postinterface';

export interface ErrandApplicationResponse {
  id: string;

  message: string;

  helperPosts: HelperPostResponse;

  errand: ErrandResponse;

  status: CustomStatus;

  updatedAt: Date;
}

export interface ErrandApplicationStatusRequest {
  id: string;
  status: 'ACCEPTED' | 'REJECTED';
}
