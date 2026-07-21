import { ErrandCategory } from "@/schema/errand.schema";
import { UserResponse } from "./user.interface";
import { ErrandApplicationResponse } from "./errand_application.interface";

export enum ErrandStatus {
  MATCHING = "MATCHING",
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED"
}
// matching: 모집중, in_progress: 진행중, completed: 완료

export interface ILiveErrand {
  status: ErrandStatus;
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
  status: ErrandStatus;
  title: string;
  user: UserResponse;
  applications: ErrandApplicationResponse[];
}
