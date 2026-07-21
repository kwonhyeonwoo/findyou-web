import { z } from 'zod';
export const ERRAND_CATEGORIES = [
  'DELIVERY',
  'SHOPPING',
  'CLEANING',
  'REPAIR',
  'PROXY',
  'PET',
  'CAR_WASH',
  'ETC',
] as const;
export const errandRegisterSchema = z.object({
  category: z.enum(ERRAND_CATEGORIES),
  title: z
    .string()
    .min(4, '제목은 최소 4자 이상 입니다.')
    .max(20, '제목은 최대 20자 입니다.'),
  address: z.string(),
  address_dong: z.string(),
  lat: z.number(),
  lng: z.number(),
  description: z
    .string()
    .min(5, '내용은 최소 5자 이상 입니다.')
    .max(200, '제목은 최대 200자 입니다.'),
  deadlineTime: z.date(),
  price: z.string(),
  images: z
    .array(z.instanceof(File))
    .max(5, '이미지는 최대 5장까지만 등록 가능합니다.')
    .optional(),
  openLink: z.string().min(3),
});
export type ErrandCategory = z.infer<typeof errandRegisterSchema>['category'];
export type ErrandRegisterType = z.infer<typeof errandRegisterSchema>;
