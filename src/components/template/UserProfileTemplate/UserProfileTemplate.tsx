'use client';

import CompletedErrand from '@/components/common/CompleteErrand/CompletedErrand';
import HelperMessage from '@/components/HelperProfile/HelperMessage';
import HelperProfile from '@/components/HelperProfile/HelperProfile';
import Line from '@/components/HelperProfile/Line';
import ReceivedReviews from '@/components/HelperProfile/ReceivedReviews';
import useUserProfile from './hooks/useUserProfile';
import Empty from '@/components/common/Empty/Empty';

function UserProfileTemplate() {
  const { data } = useUserProfile();
  console.log('data', data);
  if (!data) return null;
  return (
    <div className="flex flex-col gap-5">
      <HelperProfile
        nickName={data.nickName}
        rating="4.3"
        reviewCount={3}
        completedCount={4}
      />
      {data.introduction ? (
        <HelperMessage message="ㄴ이ㅓㄹ나ㅣㅓ라ㅣ너라ㅣ너리ㅏ너리ㅏ너라니ㅓㄹ나ㅣ너리ㅏ너라ㅣ너리너리ㅏ너라ㅣ너라ㅣ너라ㅣ널나ㅣㅓ라ㅣ널나ㅣㅓㄹ나ㅣㅓ리너ㅣ나ㅣ" />
      ) : (
        <Empty title="작성 한 소개가 없습니다." />
      )}
      <div className="pt-5 pb-5">
        <Line />
      </div>
      {/* 수행완료한 심부름 */}
      {data.applications.length > 0 ? (
        <CompletedErrand />
      ) : (
        <Empty title="수행 완료한 심부름이 없습니다." />
      )}

      <div className="pt-5 pb-5">
        <Line />
      </div>
      {data.receivedReviews?.length > 0 ? (
        <ReceivedReviews />
      ) : (
        <Empty title="받은 후기가 없습니다." />
      )}
    </div>
  );
}

export default UserProfileTemplate;
