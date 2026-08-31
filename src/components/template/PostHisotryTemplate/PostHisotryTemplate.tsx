'use client';
import CustomHistoryCard from '@/components/History/CustomHistoryCard/CustomHistoryCard';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import ApplicantCard from '@/components/History/ApplicantCard/ApplicantCard';
import AlertModal from '@/components/common/AlertModal/AlertModal';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { useErrandPostHook } from './hooks/useErrandPostHook';
import { CustomStatus } from '@/interfaces/common.interface';
import ReceivedCard from '@/components/Received/ReceivedCard/ReceivedCard';
import { useHelperPostHook } from './hooks/useHelperPostHook';

function PostHisotryTemplate() {
  const {
    errandData,
    isBottomOpen,
    currentIdx,
    selectedApplicant,
    dataType,
    userId,
    setSelectedApplicant,
    handleModalOpen,
    setIsBottomOpen,
    handleHelperProfile,
    handleSatusActive,
    handleApplicationUpdate,
    handleErrandDetailActive,
  } = useErrandPostHook();
  const {
    helperPostData,
    handleSelectedReview,
    handleCompletedActive,
    handleAcceptedActive,
    handleReceivedHistory,
  } = useHelperPostHook();
  const applicants = errandData?.[currentIdx ?? 0]?.applications ?? [];
  const hasApplicants = applicants.length > 0;
  useEffect(() => {
    if (isBottomOpen && !hasApplicants) {
      toast.error('지원자가 없습니다.');
    }
  }, [isBottomOpen, hasApplicants]);
  return (
    <div className="mt-6 flex flex-col gap-4 pb-10">
      {dataType === 'errand'
        ? // 심부름 데이터
          errandData?.map((item, idx) => {
            const hasWrittenReview = item.applications.some(
              (item) => item.hasWrittenReview,
            );
            return (
              <CustomHistoryCard
                images={item.images}
                title={item.title}
                address_dong={item.address_dong}
                hasWrittenReview={hasWrittenReview}
                type="request"
                price={item.price}
                status={item.status}
                createdAt={item.createdAt}
                key={item.id}
                applications={item?.applications}
                handleErrandDetailActive={() =>
                  handleErrandDetailActive(item.id)
                }
                handleSatusActive={() =>
                  handleSatusActive({ idx, id: item.id, status: item.status })
                }
              />
            );
          })
        : // 헬퍼게시글 데이터
          helperPostData?.map((item) => {
            const acceptedApplication = item.applications.find(
              (accepted) =>
                accepted.status === CustomStatus.ACCEPTED ||
                accepted.status === CustomStatus.COMPLETED_REQUEST,
            );

            const completedApplication = item.applications.find(
              (completed) => completed.status === CustomStatus.COMPLETED,
            );
            return (
              <ReceivedCard
                data={item}
                userId={userId}
                acceptedApplication={acceptedApplication}
                key={item.id}
                completedApplication={completedApplication}
                handleSelectedReview={handleSelectedReview}
                handleCompletedActive={handleCompletedActive}
                handleAcceptedActive={handleAcceptedActive}
                handleReceivedHistory={handleReceivedHistory}
              />
            );
          })}
      {hasApplicants ? (
        <Drawer open={isBottomOpen} onOpenChange={() => setIsBottomOpen(false)}>
          <DrawerContent className="m-auto max-w-120 gap-4 p-4">
            {errandData?.[currentIdx ?? 0]?.applications?.map((item) => (
              <ApplicantCard
                key={item.id}
                errandId={item.errand?.id}
                applicationId={item.id}
                nickName={item.helper?.nickName ?? ''}
                message={item.message}
                profile={item.helper?.profile ?? ''}
                helperId={item.helper?.id}
                handleHelperProfile={handleHelperProfile}
                handleModalOpen={handleModalOpen}
              />
            ))}
          </DrawerContent>
        </Drawer>
      ) : null}
      <AlertModal
        title={`${selectedApplicant?.nickName}님을 수락하시겠습니까?`}
        isOpen={!!selectedApplicant}
        description={`이 작업은 되돌릴 수 없습니다.`}
        setState={() => setSelectedApplicant(null)}
        actionText="수락"
        handleActive={() => {
          if (selectedApplicant) {
            handleApplicationUpdate({
              applicationId: selectedApplicant.applicationId,
              helperId: selectedApplicant.helperId,
            });
          }
        }}
      />
    </div>
  );
}

export default PostHisotryTemplate;
