'use client';
import SubmitButton from '@/components/common/SubmitButton/SubmitButton';
import ErrandHelper from '@/components/ErrandStatus/ErrandHelper';
import ErrandStatusInfo from '@/components/ErrandStatus/ErrandStatusInfo';
import ErrandStatusTitle from '@/components/ErrandStatus/ErrandStatusTitle';
import { CustomStatus } from '@/interfaces/common.interface';
import useApplyProgress from './hooks/useApplyProgress';
import KaKaoOpenLink from '@/components/ErrandDetail/KaKaoOpenLink';
import AlertModal from '@/components/common/AlertModal/AlertModal';

function ApplyProgressTemplate() {
  const {
    data,
    isPending,
    setIsModalOpen,
    isModalOpen,
    handleModalOpen,
    handleApplicationComplete,
    handleOpenLinkAction,
  } = useApplyProgress();
  if (!data) return null;
  return (
    <div className="flex flex-1 flex-col gap-6">
      <ErrandStatusTitle
        title="안녕하세요ㅕ"
        price="12000"
        status={CustomStatus.PENDING}
        date={new Date()}
      />
      <ErrandHelper nickName={'권현우'} onProfileDetail={() => {}} />

      <ErrandStatusInfo
        startTime={new Date()}
        start="효목동"
        arrive="신암동"
        description="확인용"
      />
      <KaKaoOpenLink
        link={'http://www.naver.com'}
        handleKaKaoOpenLink={handleOpenLinkAction}
      />
      <div className="mt-auto pb-10">
        <SubmitButton
          text="완료승인"
          isPending={false}
          isDisabled={data.status !== CustomStatus.COMPLETED_REQUEST}
          onClick={handleModalOpen}
        />
      </div>
      <AlertModal
        title="심부름을 완료 처리 하시겠습니까?"
        description={`이 작업은 다시 되돌릴 수 없습니다.`}
        isOpen={isModalOpen}
        actionText="완료 승인"
        setState={setIsModalOpen}
        handleActive={() => handleApplicationComplete(data.id)}
      />
    </div>
  );
}

export default ApplyProgressTemplate;
