import { ERRAND_CATEGORIES } from '@/interfaces/category.enum';

export const CATEGORY_TABS: { text: string; type: ERRAND_CATEGORIES }[] = [
  {
    text: '배달',
    type: ERRAND_CATEGORIES.DELIVERY,
  },
  {
    text: '장보기',
    type: ERRAND_CATEGORIES.SHOPPING,
  },
  {
    text: '청소',
    type: ERRAND_CATEGORIES.CLEANING,
  },
  {
    text: '수리',
    type: ERRAND_CATEGORIES.REPAIR,
  },
  {
    text: '역할대행',
    type: ERRAND_CATEGORIES.PROXY,
  },
  {
    text: '반려동물',
    type: ERRAND_CATEGORIES.PET,
  },
  {
    text: '세차',
    type: ERRAND_CATEGORIES.CAR_WASH,
  },
  {
    text: '기타',
    type: ERRAND_CATEGORIES.ETC,
  },
];

export const CATEGORY_TABS_WITH_ALL: {
  text: string;
  type: ERRAND_CATEGORIES | 'all';
}[] = [{ text: '전체', type: 'all' }, ...CATEGORY_TABS];
