'use client';
import { ErrandCategory } from '@/schema/errand.schema';

export const formattedPrice = (price: string) => {
  const numbers = price.replace(/[^\d]/g, ''); // "1원2" → "12", 콤마·원 제거
  if (!numbers) return '';
  return `${numbers.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`; // "12000" → "12,000"
};
export function formatRelativeTime(dateString: string): string {
  const inputDate = new Date(dateString);

  if (Number.isNaN(inputDate.getTime())) {
    return '';
  }

  const diffInSeconds = Math.floor((Date.now() - inputDate.getTime()) / 1000);

  if (diffInSeconds < 60) {
    return '방금 전';
  }

  const units = [
    { label: '년', seconds: 365 * 24 * 60 * 60 },
    { label: '달', seconds: 30 * 24 * 60 * 60 },
    { label: '주', seconds: 7 * 24 * 60 * 60 },
    { label: '일', seconds: 24 * 60 * 60 },
    { label: '시간', seconds: 60 * 60 },
    { label: '분', seconds: 60 },
  ];

  for (const unit of units) {
    const value = Math.floor(diffInSeconds / unit.seconds);
    if (value >= 1) {
      return `${value}${unit.label} 전`;
    }
  }

  return '방금 전';
}

const CATEGORY_MAP: Record<ErrandCategory, string> = {
  DELIVERY: '배달',
  SHOPPING: '장보기',
  CLEANING: '청소',
  REPAIR: '수리',
  PROXY: '역할대행',
  PET: '반려동물',
  CAR_WASH: '세차',
  ETC: '기타',
};
export function fillterCategory(category: ErrandCategory) {
  return CATEGORY_MAP[category] ?? '기타';
}

export const STATUS_STYLES = {
  MATCHING: {
    bg: 'bg-[#E7F5E8]',
    text: 'text-[#2E7D32]',
  },
  IN_PROGRESS: {
    bg: 'bg-[#E4DFFF]',
    text: 'text-[#382ABF]',
  },
  COMPLETED: {
    bg: 'bg-[#E3E2E2]',
    text: 'text-[#464554]',
  },
};

export const STATUS_FILLTER = {
  COMPLETED: '완료',
  MATCHING: '모집중',
  IN_PROGRESS: '대기중',
};
export const formatDate = (isoString: Date) => {
  if (!isoString) return ''; // 빈 값이 들어올 경우 예외 처리

  const date = new Date(isoString);

  const year = date.getFullYear();
  // 월과 일은 1자리 수일 경우 앞에 '0'을 붙여줌 (예: 7 -> 07)
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

export const formatDateTime = (isoString: Date) => {
  if (!isoString) return '';
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  return `${year}.${month}.${day} ${hours}:${minutes}`;
};

export const formatMeridiemTime = (isoString: Date) => {
  if (!isoString) return '';
  const date = new Date(isoString);
  const meridiem = date.getHours() < 12 ? '오전' : '오후';
  const hour12 = date.getHours() % 12 || 12;
  const minutes = date.getMinutes();
  return `${meridiem} ${hour12}시 ${minutes}분`;
};

export const parsePrice = (value: string) => {
  return Number(value.replace(/[^\d]/g, '')); // 숫자 아닌 건 다 제거
};

export const formatPriceNumber = (price: number) => {
  if (!price) return '';
  return `${String(price).replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`;
};
