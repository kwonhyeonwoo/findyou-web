import { IBestHeleper } from '@/interfaces/helper.interface';
import Image from 'next/image';
import React from 'react'


export default function BestHelper({name,level,category,success}:IBestHeleper) {
  return (
    <div className="flex px-4 py-4 box-border gap-4 border-b border-b-[#EEEEEE] last:border-b-0">
        {/* 나중에 프로필 이미지 들어가줘야함 */}
        <div className="w-12 h-12 rounded-full bg-black "/>
        <div className="flex flex-col gap-1 ">
            <div className="flex items-center gap-2">
                <p>{name}</p>
                <p className="text-[12px] text-[#5546CC]">{level}</p>
            </div>
            <div className="flex items-center gap-2">
                <p className="text-[12px]">{category}</p>
                <p className="text-[12px]">완료:{success}건</p>
            </div>
        </div>
        <Image
            className="ml-auto"
            src="/home/right-arrow.svg"
            alt="right-arrow"
            width={7}
            height={12}
        />
    </div>
  )
}
