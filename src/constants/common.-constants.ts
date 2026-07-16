import { ErrandCategory } from "@/schema/errand.schema";

export const CATEGORY_TABS: { text: string, type: ErrandCategory }[] = [
    {
        text: "배달",
        type: "DELIVERY",
    },
    {
        text: "장보기",
        type: "SHOPPING",
    },
    {
        text: "청소",
        type: "CLEANING",
    },
    {
        text: "수리",
        type: "REPAIR",
    },
    {
        text: "역할대행",
        type: "PROXY",
    },
    {
        text: "반려동물",
        type: "PET",
    },
    {
        text: "세차",
        type: "CAR_WASH",
    },
    {
        text: "기타",
        type: "ETC",
    }
]