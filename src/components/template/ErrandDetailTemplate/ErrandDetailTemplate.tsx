'use client';

import { formatRelativeTime } from "@/lib/lib";
import { useErrandDetail } from "./hooks/useErrandDetail";
import Image from "next/image";

export default function ErrandDetailTemplate() {
    const {data} = useErrandDetail();
    if(!data) return ;
  return (
    <div className="flex flex-col gap-6 items-center">
        {/* 이미지 */}
        {data.images.length > 0 && (
            <div className="w-full h-120">
            {
                data.images.map((img,idx)=>(
                    <div>
                        <Image
                            src={img}
                            alt={img}
                            fill
                            height={480}
                        />
                    </div>
                ))
            }
        </div>
        )}

        {/* 프로필 */}
        <div className="flex justify-between items-center">
            <div className="flex gap-3">
                <Image src={data?.user?.profile ? data.user.profile : ""} alt={`${data?.user?.name}`} width={48} height={48}/>
                <div className="flex flex-col gap-1 ">
                    <p className="font-medium text-[18px]">{data.user?.name}</p>
                    <p className="text-[12px] text-[#777586]">{formatRelativeTime(String(data.createdAt))}</p>
                </div>
            </div>
            <div className="flex gap-1 items-center">
                <Image
                    src="/common/star.svg"
                    alt="star"
                    width={15}
                    height={15}
                />
                <p>4.9</p>
            </div>
        </div>
    </div>
  )
}
