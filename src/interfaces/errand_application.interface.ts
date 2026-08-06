import { CustomStatus } from './common.interface';
import { ErrandResponse } from './errand.interface';
import { UserResponse } from './user.interface';

export interface ErrandApplicationResponse {
  id: string;

  message: string;

  helper: UserResponse;

  errand: ErrandResponse;

  status: CustomStatus;

  updatedAt: Date;
}

export interface ErrandApplicationStatusRequest {
  id: string;
  status: 'ACCEPTED' | 'REJECTED';
}
