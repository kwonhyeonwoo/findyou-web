import { ErrandResponse } from "./errand.interface";
import { UserResponse } from "./user.interface";

export type ErrandApplicationStatus =
  | "PENDING"
  | "ACCEPTED"
  | "REJECTED"
  | "COMPLETED";

export interface ErrandApplicationResponse {
  id: string;

  message: string;

  helper: UserResponse;

  errand: ErrandResponse;

  status: ErrandApplicationStatus;
}

export interface ErrandApplicationStatusRequest {
  id: string;
  status: "ACCEPTED" | "REJECTED";
}