import { z } from "zod";
export const ERRAND_CATEGORIES = [
  "delivery",
  "shopping",
  "cleaning",
  "repair",
  "proxy",
  "pet",
  "car-wash",
  "etc"
] as const;
export const errandRegisterSchema = z.object({
  category: z.enum(ERRAND_CATEGORIES),
  title: z.string().min(4, "제목은 최소 4자 이상 입니다.").max(20, "제목은 최대 20자 입니다."),
  address: z.string(),
  description: z.string().min(5, '내용은 최소 5자 이상 입니다.').max(200, "제목은 최대 200자 입니다."),
  price: z.string(),
  images: z
    .array(z.instanceof(File)) 
    .min(1, "최소 1장 이상의 이미지를 등록해 주세요.") // 2. 없으면 에러 뱉음 (필수화)
    .max(5, "이미지는 최대 5장까지만 등록 가능합니다."),
  openLink: z.string(),
})
export type ErrandCategory = z.infer<typeof errandRegisterSchema>['category'];
export type ErrandRegisterType = z.infer<typeof errandRegisterSchema>