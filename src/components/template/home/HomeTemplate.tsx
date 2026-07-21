'use client';
import BestHelper from '@/components/home/BestHelper/BestHelper';
import HelperCard from '@/components/home/HelperCard/HelperCard';
import HomeCategories from '@/components/home/HomeCategories/HomeCategories';
import HomeSearch from '@/components/home/HomeSearch/HomeSearch';
import LiveErrandCard from '@/components/home/LiveErrandCard/LiveErrandCard';
import { useErrandListsQuery } from '@/hooks/quires/errand/useErrandListsQuery';
import { IBestHeleper, IHelperCardType } from '@/interfaces/helper.interface';
import Link from 'next/link';

export default function HomeTemplate() {
  const { data: liveErrand } = useErrandListsQuery({ limit: '3' });
  const helperDb: IHelperCardType[] = [
    { name: '민수', rating: '4.8', profile: '', category: '배달', id: '1' },
    { name: '지훈', rating: '4.9', profile: '', category: '장보기', id: '2' },
    { name: '서연', rating: '4.7', profile: '', category: '심부름', id: '3' },
  ];

  const bestHelper: IBestHeleper[] = [
    {
      name: '김지훈',
      level: '배테랑',
      category: '배달전문',
      success: '122',
    },
    {
      name: '김지훈',
      level: '배테랑',
      category: '배달전문',
      success: '122',
    },
    {
      name: '김지훈',
      level: '배테랑',
      category: '배달전문',
      success: '122',
    },
  ];
  return (
    <div className="box-border px-5 py-4 bg-white min-h-screen">
      {/* 검색 바 */}
      <div className="mb-4">
        <HomeSearch />
      </div>

      {/* 카테고리*/}
      <div className="mb-4">
        <HomeCategories />
      </div>

      {/* 실시간 심부름 - 가로 스크롤 카드 */}
      <section className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-[18px] font-semibold">실시간 심부름</h3>
          <Link href={'/errand'} className="text-sm text-[#777586]">
            전체보기
          </Link>
        </div>
        <div className="-mx-5 px-5">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {liveErrand?.map((item) => (
              <div key={item.id} className="min-w-[78%] sm:min-w-[60%]">
                <LiveErrandCard {...item} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 바로 도움 가능한 헬퍼 - 아바타 행 */}
      <section className="mb-6">
        <h3 className="text-[18px] font-semibold mb-3">
          지금 바로 가능한 헬퍼
        </h3>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {helperDb.map((item) => (
            <div key={item.id} className="min-w-[110px]">
              <HelperCard {...item} />
            </div>
          ))}
        </div>
      </section>

      {/* 베스트 헬퍼 리스트 - 카드형 */}
      <section className="mb-12">
        <h3 className="text-[18px] font-semibold mb-3">이달의 베스트</h3>
        <div className="flex flex-col gap-2">
          {bestHelper.slice(0, 3).map((item, idx) => (
            <BestHelper key={idx} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
