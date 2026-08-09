import { CustomStatus } from './common.interface';
import { ErrandStatus } from './errand.interface';
import { UserResponse } from './user.interface';

export interface HelperApplicationRequest {
  message: string;
  helperId: string;
}

export interface HelperApplicationResponse {
  id: string;
  message: string;
  status: CustomStatus;
  helper: UserResponse;
  client: UserResponse;
  createdAt: Date;
  updatedAt: Date;
}
