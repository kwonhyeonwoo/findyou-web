'use client'
import { useState } from "react";

export const useHomeCategoryHook = ()=>{
    const [currCategory, setCurrCategory] = useState<string>("");

    const handleCategoryClick = (type:string)=>{
        setCurrCategory(type)
    };
    return{
        handleCategoryClick
    }
}
