import { ErrandCategory } from "@/schema/errand.schema";

export const WRITE_CATEGORY:{text:string,type:ErrandCategory}[]=[
    {
        text:"배달",
        type:"delivery",
    },
    {
        text:"장보기",
        type:"shopping",
    },
    {
        text:"청소",
        type:"cleaning",
    },
    {
        text:"수리",
        type:"repair",
    },
    {
        text:"역할대행",
        type:"proxy",
    },
    {
        text:"반려동물",
        type:"pet",
    },
    {
        text:"세차",
        type:"car-wash",
    },
    {
        text:"기타",
        type:"etc",
    }
]