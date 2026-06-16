import { CATEGORY_TABS } from "@/constants/common.-constants";
import { ErrandCategory } from "@/schema/errand.schema";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export const useErrandSearch = ()=>{
    const router = useRouter();
    const [keyword, setKeyword] = useState<string>("");
    const onKeywordChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        if(keyword.trim() === "") return ;
        const value = e.target.value;
        setKeyword(value);
    };
    
    const onKeywordSubmit = () =>{
        router.push(`/errand?keyword=${keyword}`)
    }
    const listTabs:{
        type: ErrandCategory | "all",
        text:string
    }[] =[
        {
            type:"all",
            text:"전체",
        },
        ...CATEGORY_TABS,
    ]
    return{
        keyword,
        listTabs,
        onKeywordSubmit,
        onKeywordChange
    }
}