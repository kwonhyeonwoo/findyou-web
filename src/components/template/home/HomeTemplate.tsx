'use client';
import BestHelper from '@/components/home/BestHelper/BestHelper';
import HelperCard from '@/components/home/HelperCard/HelperCard';
import HomeCategories from '@/components/home/HomeCategories/HomeCategories';
import HomeSearch from '@/components/home/HomeSearch/HomeSearch';
import LiveErrandCard from '@/components/home/LiveErrandCard/LiveErrandCard';
import { IBestHeleper, IHelperCardType } from '@/interfaces/helper.interface';
import Link from 'next/link';
import { useHomeTemplate } from './hooks/useHomeTemplate';

export default function HomeTemplate() {
  const { liveErrand, helpers, handleHelperProfile } = useHomeTemplate();
  const bestHelper: IBestHeleper[] = [
    {
      nickName: '김지훈',
      level: '배테랑',
      category: '배달전문',
      success: '122',
    },
    {
      nickName: '김지훈',
      level: '배테랑',
      category: '배달전문',
      success: '122',
    },
    {
      nickName: '김지훈',
      level: '배테랑',
      category: '배달전문',
      success: '122',
    },
  ];
  return (
    <div className="box-border min-h-screen bg-white px-5 py-4">
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
        <div className="mb-2 flex items-center justify-between">
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
        <h3 className="mb-3 text-[18px] font-semibold">
          지금 바로 가능한 헬퍼
        </h3>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {helpers?.map((item, key) => {
            return (
              <div key={item.id} className="min-w-[110px]">
                <HelperCard
                  nickName={item.helper.nickName}
                  profile={item.helper.profile}
                  rating={item.helper?.receivedReviews?.[key]?.rating}
                  casesCount={item.helper?.receivedReviews?.length}
                  id={item.helper.id}
                  category={item.category}
                  handleHelperProfile={() =>
                    handleHelperProfile(item.helper.id)
                  }
                />
              </div>
            );
          })}
        </div>
      </section>

      {/* 베스트 헬퍼 리스트 - 카드형 */}
      <section className="mb-12">
        <h3 className="mb-3 text-[18px] font-semibold">이달의 베스트</h3>
        <div className="flex flex-col gap-2">
          {bestHelper.slice(0, 3).map((item, idx) => (
            <BestHelper key={idx} {...item} />
          ))}
        </div>
      </section>
    </div>
  );
}
