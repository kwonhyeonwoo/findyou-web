import { CATEGORIES_ENUM } from '@/interfaces/category.enum';

export const CATEGORY_TABS: { text: string; type: CATEGORIES_ENUM }[] = [
  {
    text: '배달',
    type: CATEGORIES_ENUM.DELIVERY,
  },
  {
    text: '장보기',
    type: CATEGORIES_ENUM.SHOPPING,
  },
  {
    text: '청소',
    type: CATEGORIES_ENUM.CLEANING,
  },
  {
    text: '수리',
    type: CATEGORIES_ENUM.REPAIR,
  },
  {
    text: '역할대행',
    type: CATEGORIES_ENUM.PROXY,
  },
  {
    text: '반려동물',
    type: CATEGORIES_ENUM.PET,
  },
  {
    text: '세차',
    type: CATEGORIES_ENUM.CAR_WASH,
  },
  {
    text: '기타',
    type: CATEGORIES_ENUM.ETC,
  },
];

export const CATEGORY_TABS_WITH_ALL: {
  text: string;
  type: CATEGORIES_ENUM | 'all';
}[] = [{ text: '전체', type: 'all' }, ...CATEGORY_TABS];
