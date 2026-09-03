'use client';
import SubmitButton from '@/components/common/SubmitButton/SubmitButton';
import ErrandHelper from '@/components/ErrandStatus/ErrandHelper';
import ErrandHelperKaKao from '@/components/ErrandStatus/ErrandHelperKaKao';
import ErrandStatusInfo from '@/components/ErrandStatus/ErrandStatusInfo';
import ErrandStatusTitle from '@/components/ErrandStatus/ErrandStatusTitle';
import { useErrandStatus } from './hooks/useErrandStatus';
import AlertModal from '@/components/common/AlertModal/AlertModal';

const ErrandStatusTemplate = () => {
  const {
    data,
    isCompleteOpen,
    BUTTON_STATUS_TEXT,
    setIsCompleteOpen,
    handleAccepted,
    handleOpenCompleteModal,
    handleKaKaoOpenLink,
    handleProfileDetail,
  } = useErrandStatus();
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
          <SubmitButton
            text={BUTTON_STATUS_TEXT[data.status]?.label ?? ''}
            isDisabled={false}
            bgColor="bg-teal-primary"
            isPending={false}
            onClick={handleOpenCompleteModal}
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
        handleActive={handleAccepted}
      />
    </div>
  );
};

export default ErrandStatusTemplate;
// 심부름에서 완료요청을보냄.
// 헬퍼가 완료요청된것을 보고 수락을 해줌
// 그럼 헬퍼와 심부름 서로서로 completed....
