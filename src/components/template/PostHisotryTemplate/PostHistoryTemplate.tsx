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
import ReviewDropCard from '@/components/ReviewDropCard/ReviewDropCard';
import { useHelperPostHook } from './hooks/useHelperPostHook';

function PostHistoryTemplate() {
  const {
    errandData,
    isBottomOpen,
    currentIdx,
    selectedApplicant,
    dataType,
    userId,
    selectedReview: errandSelectedReview,
    isReviewOpen: isErrandReviewOpen,
    setSelectedApplicant,
    handleModalOpen,
    setIsBottomOpen,
    handleHelperProfile,
    handleStatusActive,
    handleErrandAccepted,
    handleErrandDetailActive,
    closeReview: closeErrandReview,
  } = useErrandPostHook();
  const {
    helperPostData,
    selectedReview: helperSelectedReview,
    isReviewOpen: isHelperReviewOpen,
    handleSelectedReview,
    handleCompletedActive,
    handleAcceptedActive,
    handleReceivedHistory,
    closeReview: closeHelperReview,
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
            let hasWrittenReview = false;
            if (item.applications) {
              hasWrittenReview = item.applications?.some(
                (item) => item.hasWrittenReview,
              );
            }

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
                handleStatusActive={() =>
                  handleStatusActive({
                    idx,
                    id: item.id,
                    status: item.status,
                    applicationId: item.application?.id,
                  })
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
            console.log('acceptedApplication', acceptedApplication);
            const completedApplication = item.applications.find(
              (completed) => completed.status === CustomStatus.COMPLETED,
            );
            console.log('completedApplication', completedApplication);
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
      <Drawer
        open={isErrandReviewOpen}
        onOpenChange={(open) => !open && closeErrandReview()}
      >
        <DrawerContent className="m-auto max-w-120 gap-4 p-4">
          {errandSelectedReview && (
            <ReviewDropCard
              title="내가 받은 리뷰"
              rating={errandSelectedReview.rating}
              tags={errandSelectedReview.tags}
              content={errandSelectedReview.content}
            />
          )}
        </DrawerContent>
      </Drawer>
      <Drawer
        open={isHelperReviewOpen}
        onOpenChange={(open) => !open && closeHelperReview()}
      >
        <DrawerContent className="m-auto max-w-120 gap-4 p-4">
          {helperSelectedReview && (
            <ReviewDropCard
              title="내가 받은 리뷰"
              rating={helperSelectedReview.rating}
              tags={helperSelectedReview.tags}
              content={helperSelectedReview.content}
            />
          )}
        </DrawerContent>
      </Drawer>
      <AlertModal
        title={`${selectedApplicant?.nickName}님을 수락하시겠습니까?`}
        isOpen={!!selectedApplicant}
        description={`이 작업은 되돌릴 수 없습니다.`}
        setState={() => setSelectedApplicant(null)}
        actionText="수락"
        onActive={() => {
          if (selectedApplicant) {
            handleErrandAccepted({
              applicationId: selectedApplicant.applicationId,
            });
          }
        }}
      />
    </div>
  );
}

export default PostHistoryTemplate;
