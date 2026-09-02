'use client';
import SubmitButton from '@/components/common/SubmitButton/SubmitButton';
import ErrandHelper from '@/components/ErrandStatus/ErrandHelper';
import ErrandHelperKaKao from '@/components/ErrandStatus/ErrandHelperKaKao';
import ErrandStatusInfo from '@/components/ErrandStatus/ErrandStatusInfo';
import ErrandStatusTitle from '@/components/ErrandStatus/ErrandStatusTitle';
import { useErrandStatus } from './hooks/useErrandStatus';
import AlertModal from '@/components/common/AlertModal/AlertModal';
import { CustomStatus } from '@/interfaces/common.interface';

const ErrandStatusTemplate = () => {
  const {
    data,
    isCompleteOpen,
    BUTTON_STATUS_TEXT,
    setIsCompleteOpen,
    handleComplete,
    handleOpenCompleteModal,
    handleKaKaoOpenLink,
    handleProfileDetail,
  } = useErrandStatus();
  if (!data) return null;
  console.log('data', data);
  return (
    <div className="flex flex-col gap-6">
      <ErrandStatusTitle
        title={data.title}
        price={data.price}
        status={data.status}
        date={new Date()}
      />
      <ErrandHelper
        nickName={data.helper.nickName}
        profile={data.helper.profile}
        onProfileDetail={() => handleProfileDetail(data.helper.id)}
      />
      <ErrandStatusInfo
        startTime={data.deadlineTime}
        start={data.helper.address}
        arrive={data.address}
        description={data.description}
      />
      <ErrandHelperKaKao
        onKaKaoOpenLink={() => handleKaKaoOpenLink(data.openLink)}
      />
      <SubmitButton
        text={BUTTON_STATUS_TEXT[data.status]?.label ?? ''}
        isDisabled={false}
        bgColor="bg-teal-primary"
        isPending={false}
        onClick={handleOpenCompleteModal}
      />

      <AlertModal
        title="심부름을 완료하시겠습니까?"
        description={` 이 작업은 되돌릴 수 없습니다. 수행자가 심부름을 완벽히 마쳤는지
              확인해 주세요.`}
        isOpen={isCompleteOpen}
        actionText="완료하기"
        setState={setIsCompleteOpen}
        handleActive={handleComplete}
      />
    </div>
  );
};

export default ErrandStatusTemplate;
