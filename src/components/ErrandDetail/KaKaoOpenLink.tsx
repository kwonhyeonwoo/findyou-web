import Image from 'next/image';
import React from 'react'

interface Props{
    link:string;
    handleKaKaoOpenLink:(link:string)=>void;
}

export default function KaKaoOpenLink({
    link,
    handleKaKaoOpenLink
}:Props) {
  return (
    <div 
        onClick={()=>handleKaKaoOpenLink(link)}
        className="border w-full border-[#C7C4D7] rounded-[12px] p-4 flex justify-between cursor-pointer">
        <div className="flex items-center gap-3">
            <Image
                width={40}
                height={40}
                src={"/errand/kakao-open.svg"}
                alt="kakao-open"
            />
            <div className="flex flex-col">
                <p className="text-[#1B1C1C] text-[14px]">카카오톡 오픈채팅으로 문의하기</p>
                <p className="text-[#777586] text-[12px]">빠른 답변을 원하시면 클릭하세요</p>
            </div>
        </div>
        <Image 
            src="/common/right-arrow.svg"
            alt='right-arrow'
            width={7}
            height={12}
        />
    </div>
  )
}
