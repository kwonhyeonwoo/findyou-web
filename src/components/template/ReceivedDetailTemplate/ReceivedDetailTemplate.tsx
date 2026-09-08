'use client';

import ReceivedDetailCard from '@/components/ReceivedDetail/ReceivedDetailCard/ReceivedDetailCard';
import useReceivedDetail from './hooks/useReceivedDetail';
import AlertModal from '@/components/common/AlertModal/AlertModal';
import { CustomStatus } from '@/interfaces/common.interface';

function ReceivedDetailTemplate() {
  const {
    data,
    isLoading,
    isCompleteOpen,
    selectedType,
    handleRejected,
    handleAccepted,
    setIsCompleteOpen,
    handleCompleteOpen,
  } = useReceivedDetail();
  return (
    <div className="flex flex-col gap-4 pt-5 pb-10">
      {data?.map((item) => {
        const isVisible =
          item.status !== CustomStatus.REJECTED &&
          item.status !== CustomStatus.ACCEPTED;
        return (
          isVisible && (
            <ReceivedDetailCard
              data={item}
              key={item.id}
              handleActive={handleCompleteOpen}
            />
          )
        );
      })}

      {selectedType === 'ACCEPTED' ? (
        <AlertModal
          title="의뢰인을 수락 하시겠습니까?"
          description={`이 작업은 되돌릴 수 없습니다. 의뢰인을 
        수락 하시겠습니까?`}
          actionText="수락하기"
          isOpen={isCompleteOpen}
          setState={setIsCompleteOpen}
          handleActive={handleAccepted}
        />
      ) : (
        <AlertModal
          title="의뢰인을 거절 하시겠습니까?"
          description={`이 작업은 되돌릴 수 없습니다. 의뢰인을 
        거절 하시겠습니까?`}
          actionText="거절하기"
          isOpen={isCompleteOpen}
          setState={setIsCompleteOpen}
          handleActive={handleRejected}
        />
      )}
    </div>
  );
}

export default ReceivedDetailTemplate;
