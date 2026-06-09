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
    category:z.enum(ERRAND_CATEGORIES),
    title:z.string().min(4,"제목은 최소 4자 이상 입니다.").max(20,"제목은 최대 20자 입니다."),
    address:z.string(),
    description:z.string().min(5,'내용은 최소 5자 이상 입니다.').max(200,"제목은 최대 200자 입니다."),
    price:z.string(),
    img:z.string(),
    openLink:z.string(),
})
export type ErrandCategory = z.infer<typeof errandRegisterSchema>['category'];
export type ErrandRegisterType = z.infer<typeof errandRegisterSchema>