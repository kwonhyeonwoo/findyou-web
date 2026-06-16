import Image from "next/image";
import React from "react";

interface Props{
    onKeywordSubmit:()=>void;
    onKeywordChange:(e:React.ChangeEvent<HTMLInputElement>)=>void;
}
export default function ErrandInput({
    onKeywordSubmit,
    onKeywordChange
}:Props) {
  return (
    <form className="flex relative" onSubmit={onKeywordSubmit}>
        <Image
            className="absolute top-1/2 left-3 -translate-y-1/2"
            src="/common/glass.svg"
            width={18}
            height={18}
            alt="glass"
        />
        <input 
            className="bg-[#F5F3F3] rounded-[12px] w-full px-9 py-3"
            type="text" 
            name="keyword"
            placeholder="어떤 도움이 필요하신가요?"
            onChange={onKeywordChange}
        />
    </form>
  )
}
