import { ErrandStatus } from '@/interfaces/errand.interface';
import { fillterCategory, formatRelativeTime } from '@/lib/lib';
import { ErrandCategory } from '@/schema/errand.schema';
import Image from 'next/image';
import React from 'react'

interface Props{
    id:string;
    address_dong:string;
    title:string;
    status:ErrandStatus;
    category:ErrandCategory;
    description:string;
    price:string;
    createdAt:Date;
    onRouter:(id:string)=>void;
}

export default function ErrandCard({
    id,
    address_dong,
    title,
    status,
    category,
    description,
    price,
    createdAt,
    onRouter
}:Props) {
    const cateAddress:{text:string, category?:ErrandCategory}[]=[
        {
            text:address_dong,
        },
        {
            text:fillterCategory(category),
            category,
        }
    ]
    const STATUS_STYLES = {
        matching: {
          bg: 'bg-[#E7F5E8]',
          text: 'text-[#2E7D32]',
        },
        in_progress: {
          bg: 'bg-[#E4DFFF]',
          text: 'text-[#382ABF]',
        },
        completed: {
          bg: 'bg-[#E3E2E2]',
          text: 'text-[#464554]',
        },
      };
      const currentStyle = STATUS_STYLES[status] || STATUS_STYLES.matching;
  return (
    <div 
        onClick={()=>onRouter(id)}
        className="flex flex-col gap-2 cursor-pointer shadow-2xs rounded-[12px] border border-[#EEEEEE] px-4 py-3">
        {/* 매칭상태, 업로드시간 */}
        <div className="flex items-center justify-between">
            <div
                className={`px-3 py-1 text-[12px] rounded-full ${currentStyle.bg} ${currentStyle.text}`}
            >
                {
                    status === "completed" ? "완료" :
                    status === "matching" ? "모집중" :
                    status === "in_progress" && "대기중"
                }
            </div>
            <div className="flex items-center gap-1">
                <Image
                    src="/common/time.svg"
                    alt="time"
                    width={13}
                    height={13}
                />
                <p className="text-[12px] text-[#464554] ">{formatRelativeTime(String(createdAt))}</p>
            </div>
        </div>

        {/* 제목,내용 */}
        <div className="flex flex-col gap-2 border-b border-b-[#EEEEEE] pb-4">
            <p className="text-[18px] text-[#1B1C1C]">{title}</p>
            <p className="text-[14px] text-[#464554] font-medium leading-normal  overflow-hidden line-clamp-2 ...">
                {description}
            </p>
        </div>

       {/* 동, 카테고리, 가격 */}
       <div className="flex justify-between items-center">
            <div className="flex items-center gap-3 ">
                {cateAddress.map(({text,category},idx)=>(
                    <div className="flex items-center gap-1 " key={idx}>
                        {!category &&(
                            <Image
                            src="/common/address.svg"
                            alt="gps"
                            width={12}
                            height={15}
                        />
                        )}
                        <p className="text-[12px] text-[#464554]">{text}</p>
                    </div>
                ))}
            </div>
            <p className="text-[18px] font-semibold text-[#170083]">{price}</p>
       </div>
    </div>
  )
}
