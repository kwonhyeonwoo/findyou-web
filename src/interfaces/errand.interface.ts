import { ErrandCategory } from '@/schema/errand.schema';
import { UserResponse } from './user.interface';
import { ErrandApplicationResponse } from './errand_application.interface';
import { CustomStatus } from './common.interface';

export interface ILiveErrand {
  status: CustomStatus;
  title: string;
  price: string;
  address: string;
  time: string;
}

export interface ErrandResponse {
  address: string;
  address_dong: string;
  category: ErrandCategory;
  createdAt: Date;
  description: string;
  id: string;
  images: string[];
  lat: number;
  lng: number;
  openLink: string;
  price: string;
  status: CustomStatus;
  title: string;
  user: UserResponse;
  helper: UserResponse;
  deadlineTime: Date;
  applications?: ErrandApplicationResponse[];
  application: ErrandApplicationResponse;
  applicationsCount: number;
  completionRequestedBy?: string; // uuid, 누가 완료요청을 했는지 판별기준
}

export interface ErrandDetailResponse extends Omit<
  ErrandResponse,
  'applications'
> {
  applications: ErrandApplicationResponse[];
}
