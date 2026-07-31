'use client';

import CompletedErrand from '@/components/HelperProfile/CompletedErrand';
import ErrandMessage from '@/components/HelperProfile/ErrandMessage';
import HelperProfile from '@/components/HelperProfile/HelperProfile';
import ReceivedReviews from '@/components/HelperProfile/ReceivedReviews';
import { useGetMyErrandsQuery } from '@/hooks/quires/errand/useGetMyErrandsQuery';
import { useHelperProfileTemplate } from './hooks/useHelperProfileTemplate';

function HelperProfileTemplate() {
  const { helper } = useHelperProfileTemplate();
  console.log('helper', helper);
  if (!helper?.helper?.errands) null;
  return (
    <div className="flex flex-col gap-6">
      <HelperProfile
        nickName="권현우"
        rating="4.9"
        reviewCount={32}
        completedCount={142}
      />
      <ErrandMessage
        message={`안녕하세요! 빠르고 정확하게 도와드리는 헬퍼 김민정입니다. 어떤 사소 한 
심부름이라도 성실하게 수행하겠습니다. 서울 전지역 가능합니다!`}
      />
      {/* {helper?.helper?.errands && (
        <CompletedErrand errands={helper?.helper?.errands} />
      )} */}
      <ReceivedReviews />
    </div>
  );
}

export default HelperProfileTemplate;
