'use client'
import Advertisement from '@/components/home/Advertisement/Advertisement';
import BestHelper from '@/components/home/BestHelper/BestHelper';
import HelperCard from '@/components/home/HelperCard/HelperCard';
import HomeCategories from '@/components/home/HomeCategories/HomeCategories';
import HomeSearch from '@/components/home/HomeSearch/HomeSearch';
import LiveErrandCard from '@/components/home/LiveErrandCard/LiveErrandCard';
import { useErrandListsQuery } from '@/hooks/quires/errand/useErrandListsQuery';
import { ILiveErrand } from '@/interfaces/errand.interface';
import { IBestHeleper, IHelperCardType } from '@/interfaces/helper.interface';
import Link from 'next/link';

export default function HomeTemplate() {    
    const {data:liveErrand} = useErrandListsQuery("3");
    const helperDb:IHelperCardType[] = [
        {
            name:"김민수",
            rating:"3.4",
            profile:"",
            category:"조립/설치",
            id:"1"
        },
        {
            name:"김민수",
            rating:"3.4",
            profile:"",
            category:"조립/설치",
            id:"2"
        },
        {
            name:"김민수",
            rating:"3.4",
            profile:"",
            category:"조립/설치",
            id:"3"
        },
    ]

    const bestHelper:IBestHeleper[]=[
        {
            name:"김지훈",
            level:"배테랑",
            category:"배달전문",
            success:"122"
        },
        {
            name:"김지훈",
            level:"배테랑",
            category:"배달전문",
            success:"122"
        },
        {
            name:"김지훈",
            level:"배테랑",
            category:"배달전문",
            success:"122"
        }
    ]
  return (
    <div className="box-border px-5 py-5">
        <HomeSearch />
        <Advertisement/>
        <HomeCategories/>
        {/* 실시간 심부름 리스트 */}
        <div className="flex flex-col gap-3 mt-6 mb-8">
            <div className="flex justify-between items-center">
                <h2 className="text-[20px] font-medium">실시간 심부름</h2>
                <Link href={"/errand/list"} className="text-[#777586]">전체보기</Link>
            </div>
            {liveErrand?.map((item)=>(
                <LiveErrandCard key={item.id} {...item}/>
            ))}
        </div>

        {/* 지금 바로 도움가능 한 헬퍼 */}
        <div className="flex flex-col gap-4">
            <h2 className="text-[20px] font-bold">지금 바로 도움 가능한 <span className="text-[#2A14B4]">헬퍼들</span></h2>
            <div className="flex items-center gap-4">
                {helperDb.map((item)=>(
                    <HelperCard key={item.id} {...item}/>
                ))}
            </div>
        </div>

        {/* 베스트 헬퍼들 */}
        <div className="flex flex-col gap-4 mt-6 mb-6">
        <h2 className="text-[20px] font-bold">이달의 베스트 헬퍼<span className="text-[#2A14B4]"> 랭킹</span></h2>
            <div className="rounded-[16px] border border-[#EEEEEE] flex flex-col ">
                {bestHelper.slice(0,3).map((item,idx)=>(
                    <BestHelper key={idx} {...item}/>
                ))}
            </div>
        </div>
    </div>
  )
}
