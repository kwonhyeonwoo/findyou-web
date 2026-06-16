import { ErrandCategory } from "@/schema/errand.schema";
import { useState } from "react";

export const useErrandCategory = ()=>{
    const [currentCategory, setCurrentCategory] = useState<ErrandCategory | "all">("all");

    const onCurrentCategory = (type:ErrandCategory | "all") =>{
        setCurrentCategory(type);
    };

    return{
        currentCategory,
        onCurrentCategory
    }
}