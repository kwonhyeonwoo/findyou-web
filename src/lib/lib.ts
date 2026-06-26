"use client";

import { ErrandCategory } from "@/schema/errand.schema";

export const formattedPrice = (price: string) => {
  if (!price) return "";
  return `${price.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원`;
};
export function formatRelativeTime(dateString: string): string {
  const inputDate = new Date(dateString);
  const now = new Date();

  // 두 시간의 차이 (초 단위)
  const diffInSeconds = Math.floor(
    (now.getTime() - inputDate.getTime()) / 1000,
  );

  if (diffInSeconds < 60) {
    return "방금 전";
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return `${diffInMinutes}분 전`;
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return `${diffInHours}시간 전`;
  }

  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 7) {
    return `${diffInDays}일 전`;
  }

  const diffInWeeks = Math.floor(diffInDays / 7);
  if (diffInWeeks < 4) {
    return `${diffInWeeks}주 전`;
  }

  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) {
    return `${diffInMonths}달 전`;
  }

  const diffInYears = Math.floor(diffInDays / 365);
  return `${diffInYears}년 전`;
}

const CATEGORY_MAP: Record<ErrandCategory, string> = {
  delivery: "배달",
  shopping: "장보기",
  cleaning: "청소",
  repair: "수리",
  proxy: "역할대행",
  pet: "반려동물",
  "car-wash": "세차",
  etc: "기타",
};
export function fillterCategory(category: ErrandCategory) {
  return CATEGORY_MAP[category] ?? "기타";
}

export const STATUS_STYLES = {
  matching: {
    bg: "bg-[#E7F5E8]",
    text: "text-[#2E7D32]",
  },
  in_progress: {
    bg: "bg-[#E4DFFF]",
    text: "text-[#382ABF]",
  },
  completed: {
    bg: "bg-[#E3E2E2]",
    text: "text-[#464554]",
  },
};

export const STATUS_FILLTER = {
  completed: "완료",
  matching: "모집중",
  in_progress: "대기중",
};
