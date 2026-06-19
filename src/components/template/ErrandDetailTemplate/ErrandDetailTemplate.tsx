'use client';

import { formatRelativeTime } from "@/lib/lib";
import { useErrandDetail } from "./hooks/useErrandDetail";
import Image from "next/image";
import ErrandContent from "@/components/ErrandDetail/ErrandContent/ErrandContent";
import KaKaoOpenLink from "@/components/ErrandDetail/KaKaoOpenLink";
import AddressCard from "@/components/Errand/AddressCard";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";

export default function ErrandDetailTemplate() {
    const {data,handleKaKaoOpenLink} = useErrandDetail();
    if(!data) return ;
  return (
    <div className="flex flex-col gap-6 items-center  min-h-screen">
        {/* 이미지 */}
        {data.images.length > 0 && (
            <div className="w-full h-120">
            {
                data.images.map((img,idx)=>(
                    <div key={idx}>
                        <Image
                            src={img}
                            alt={img}
                            width={480}
                            height={480}
                        />
                    </div>
                ))
            }
        </div>
        )}

        {/* 프로필, 프로필정보, 별점 */}
        <div className="flex justify-between  w-full pt-6">
            <div className="flex gap-3">
                {
                    data.user?.profile ? (
                        <Image 
                            src={data?.user?.profile ? data.user.profile : ""} 
                            alt={`${data?.user?.name}`} 
                            width={48} 
                            height={48}
                        />
                    ):(
                        <div className="w-12 h-12 rounded-full bg-gray-500"/>
                    )
                }
                <div className="flex flex-col">
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

        {/* content */}
        <div className="w-full">
            <ErrandContent
                category={data.category}
                status={data.status}
                title={data.title}
                price={data.price}
                description={data.description}
            />
        </div>

        {/* 카톡 오픈링크, 주소 */}
        <div className="w-full flex flex-col gap-6">
            <KaKaoOpenLink link={data.openLink} handleKaKaoOpenLink={handleKaKaoOpenLink}/>
            <AddressCard address={data.address}/>
        </div>
        <div className="w-full py-4 justify-center items-center flex  mt-auto border-t border-t-[#C7C4D7]   ">
            <SubmitButton text="심부름 신청" isPending={false} bgColor="bg-[#2A14B4]" isDisabled={false}/>
        </div>
    </div>
  )
}
