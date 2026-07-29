'use client';
import SubmitButton from '@/components/common/SubmitButton/SubmitButton';
import ErrandHelper from '@/components/ErrandStatus/ErrandHelper';
import ErrandHelperKaKao from '@/components/ErrandStatus/ErrandHelperKaKao';
import ErrandStatusInfo from '@/components/ErrandStatus/ErrandStatusInfo';
import ErrandStatusTitle from '@/components/ErrandStatus/ErrandStatusTitle';
import { useErrandStatus } from './hooks/useErrandStatus';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import AlertModal from '@/components/common/AlertModal/AlertModal';

const ErrandStatusTemplate = () => {
  const {
    data,
    isCompleteOpen,
    setIsCompleteOpen,
    handleComplete,
    handleOpenCompleteModal,
    handleKaKaoOpenLink,
    handleProfileDetail,
  } = useErrandStatus();
  if (!data) return null;
  console.log('helper', data);
  return (
    <div className="flex flex-col gap-6">
      <ErrandStatusTitle
        title={data.title}
        price={data.price}
        status={data.status}
        date={data.createdAt}
      />
      <ErrandHelper
        nickName={data.applications[0].helper.nickName}
        profile={data.applications[0]?.helper.profile}
        onProfileDetail={() =>
          handleProfileDetail(data.applications[0].helper.id)
        }
      />
      <ErrandStatusInfo
        startTime={data.applications[0]?.updatedAt}
        start={data.applications[0]?.helper.address}
        arrive={data.address}
        description={data.description}
      />
      <ErrandHelperKaKao
        onKaKaoOpenLink={() => handleKaKaoOpenLink(data.openLink)}
      />
      <SubmitButton
        text="심부름 완료"
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
