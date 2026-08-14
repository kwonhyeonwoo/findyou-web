import { CATEGORIES_ENUM } from './category.enum';
import { ErrandStatus } from './errand.interface';
import { HelperApplicationResponse } from './helper-application.interface';
import { UserResponse } from './user.interface';

export enum MOVEMENT_ENUM {
  CAR = 'CAR',
  BICYCLE = 'BICYCLE',
  MOTORCYCLE = 'MOTORCYCLE',
  WALK = 'WALK',
}

export interface IHelperCardType {
  name: string;
  rating: string;
  profile: string;
  id: string;
  category: string;
}

export enum HelperMovement {
  BICYCLE = 'BICYCLE', // 자전거
  CAR = 'CAR', // 자동차
  WALK = 'WALK', // 도보
  MOTORCYCLE = 'MOTORCYCLE', // 오토바이
}

export interface IBestHeleper {
  nickName: string;
  level: string;
  category: string;
  success: string;
}

export interface HelperPostResponse {
  id: string;

  title: string;

  introduction: string;

  address: string;

  address_dong: string;

  movement: HelperMovement;

  description: string;

  lat: number;

  lng: number;

  category: CATEGORIES_ENUM;

  status: ErrandStatus;

  price: number;

  openLink: string;

  createdAt: Date;

  updatedAt: Date;

  helper: UserResponse;

  applications: HelperApplicationResponse[];
}
export interface ReceivedHistoryResponse {
  profile?: string;
  nickName: string;
  message: string;
  dateTime: Date;
  rating: number;
}

// 신청자프로필,닉네임, 시간, 별점,메시지,
