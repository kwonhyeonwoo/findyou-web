'use client';

import CompletedErrand from '@/components/HelperProfile/CompletedErrand';
import HelperProfile from '@/components/HelperProfile/HelperProfile';
import ReceivedReviews from '@/components/HelperProfile/ReceivedReviews';
import { useHelperProfileTemplate } from './hooks/useHelperProfileTemplate';
import Empty from '@/components/common/Empty/Empty';
import SubmitButton from '@/components/common/SubmitButton/SubmitButton';
import ErrandMessageModal from '@/components/ErrandDetail/ErrandMessageModal/ErrandMessageModal';
import HelperMessage from '@/components/HelperProfile/HelperMessage';

function HelperProfileTemplate() {
  const {
    data,
    isOpen,
    message,
    isPending,
    handleChangeMessage,
    handleModalOpen,
    handleApplicationSubmit,
    setIsOpen,
  } = useHelperProfileTemplate();
  if (!data) null;
  return (
    <div className="flex flex-1 flex-col gap-6 pb-10">
      <HelperProfile
        nickName={data?.helper.nickName || ''}
        rating="4.9"
        reviewCount={32}
        completedCount={142}
      />
      <HelperMessage message={data?.title || ''} />

      {/* 수행 완료한 심부름 */}
      {data?.helper?.errands && data?.helper.errands.length > 0 ? (
        <CompletedErrand errands={data.helper.errands} />
      ) : (
        <Empty title="심부름 내역이 없습니다." />
      )}

      {/* 받은후기 */}
      {data?.helper.receivedReviews &&
      data?.helper.receivedReviews.length > 0 ? (
        <ReceivedReviews reviews={data?.helper?.receivedReviews || []} />
      ) : (
        <Empty title="받은 후기가 없습니다." />
      )}

      {/* 심부름 신청 */}
      <div className="mt-auto w-full">
        <SubmitButton
          text="신청하기"
          isPending={isPending}
          isDisabled={false}
          bgColor="bg-teal-primary"
          onClick={handleModalOpen}
        />
      </div>

      <ErrandMessageModal
        isOpen={isOpen}
        title="헬퍼에게 어필할 수 있는 간단한 소개를 남겨주세요!"
        message={message}
        handleIsOpen={handleModalOpen}
        handleChangeMessage={handleChangeMessage}
        handleSubmit={() => handleApplicationSubmit(data?.helper.id || '')}
      />
    </div>
  );
}

export default HelperProfileTemplate;
