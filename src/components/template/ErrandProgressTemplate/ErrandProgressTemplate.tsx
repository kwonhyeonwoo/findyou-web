'use client';
import SubmitButton from '@/components/common/SubmitButton/SubmitButton';
import ErrandHelper from '@/components/ErrandStatus/ErrandHelper';
import ErrandHelperKaKao from '@/components/ErrandStatus/ErrandHelperKaKao';
import ErrandStatusInfo from '@/components/ErrandStatus/ErrandStatusInfo';
import ErrandStatusTitle from '@/components/ErrandStatus/ErrandStatusTitle';
import { useErrandProgress } from './hooks/useErrandProgress';
import AlertModal from '@/components/common/AlertModal/AlertModal';
import { CustomStatus } from '@/interfaces/common.interface';

const ErrandProgressTemplate = () => {
  const {
    data,
    isCompleteOpen,
    BUTTON_STATUS_TEXT,
    userId,
    BUTTOM_SUBMIT,
    setIsCompleteOpen,
    handleAccepted,
    handleOpenCompleteModal,
    handleKaKaoOpenLink,
    handleProfileDetail,
  } = useErrandProgress();
  if (!data) return null;
  return (
    <div className="flex flex-1 flex-col gap-6">
      <ErrandStatusTitle
        title={data.title}
        price={data.price}
        status={data.status}
        date={new Date()}
      />
      <ErrandHelper
        nickName={data.application.helper.nickName}
        profile={data.application.helper.profile}
        onProfileDetail={() => handleProfileDetail(data.helper.id)}
      />
      <ErrandStatusInfo
        startTime={data.deadlineTime}
        start={data.application.helper.address}
        arrive={data.address}
        description={data.description}
      />

      <div className="mt-auto flex items-center gap-2">
        <div className="flex-1">
          <ErrandHelperKaKao
            onKaKaoOpenLink={() =>
              handleKaKaoOpenLink(data.application.openLink)
            }
          />
        </div>
        <div className="flex-3">
          {/* 
            completionRequestedBy 기준으로 userId랑 같으면 disabled 활성화 
            status가 Completed_request이고 user
            userId와 같지 않다면 disabled 비활성화
          */}
          <SubmitButton
            text={BUTTON_STATUS_TEXT[data.status]?.label ?? ''}
            isDisabled={userId === data.completionRequestedBy ? true : false}
            bgColor="bg-teal-primary"
            isPending={false}
            onClick={BUTTON_STATUS_TEXT[data.status]?.onClick}
          />
        </div>
      </div>

      <AlertModal
        title="심부름을 완료하시겠습니까?"
        description={` 이 작업은 되돌릴 수 없습니다. 수행자가 심부름을 완벽히 마쳤는지
              확인해 주세요.`}
        isOpen={isCompleteOpen}
        actionText="완료하기"
        setState={setIsCompleteOpen}
        handleActive={BUTTOM_SUBMIT[data.status] ?? (() => {})}
      />
    </div>
  );
};

export default ErrandProgressTemplate;
