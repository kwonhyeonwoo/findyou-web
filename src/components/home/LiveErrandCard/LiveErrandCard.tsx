import { ErrandStatus } from '@/interfaces/errand.interface';
import React from 'react'

interface Props {
  status: ErrandStatus;
  title: string;
  price: string;
  address: string;
  time: string;
}

export default function LiveErrandCard({
    status,
    title,
    price,
    address,
    time
}:Props) {
    const bottomArr=[
        {
            text:address,
            img:"address"
        },
        {
            text:time,
            img:"time"
        }
    ]
  return (
    <div className="rounded-[12px] border border-[#EEEEEE] px-4 py-4 flex flex-col w-full gap-2  justify-center">
        <div className="flex items-center justify-between">
            <div className="px-2 py-[2px] rounded-[8px] bg-[#F0EEFF] text-[#2A14B4] text-[10px]">
                {status === "matching" ? "모집중" : status === "in_progress" ? "진행중":"완료"}
            </div>
            <p className="text-[18px] font-bold">{price}</p>
        </div>
        <p>{title}</p>
        <div className="flex items-center gap-3">
            {bottomArr.map(({text,img})=>(
                <div className="flex gap-1 items-center">
                    <img src={`/home/${img}.svg`} alt={img} />
                    <p className="text-[12px]">{text}</p>
                </div>
            ))}
        </div>
    </div>
  );
}
