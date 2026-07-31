import { CATEGORIES_ENUM } from '@/interfaces/category.enum';
import { MOVEMENT_ENUM } from '@/interfaces/helper.interface';
import z from 'zod';

export const helperRegisterSchema = z.object({
  title: z
    .string()
    .min(4, '제목은 최소 4자 이상입니다.')
    .max(20, '제목은 최대 20자 입니다.'),
  address: z.string(),
  address_dong: z.string(),
  lat: z.number(),
  lng: z.number(),
  introduction: z
    .string()
    .min(5, '소개는 최대 5자 이상 입니다.')
    .max(200, '소개는 최대 200자 입니다.'),
  movement: z.enum(MOVEMENT_ENUM),
  price: z.string(),
  openLink: z.string(),
  category: z.enum(CATEGORIES_ENUM),
});

export type HelperRegisterType = z.infer<typeof helperRegisterSchema>;
