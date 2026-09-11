'use client';
import CustomHistoryCard from '@/components/History/CustomHistoryCard/CustomHistoryCard';
import AlertModal from '@/components/common/AlertModal/AlertModal';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import ReviewDropCard from '@/components/ReviewDropCard/ReviewDropCard';
import { useErrandApplicationHistory } from './hooks/useErrandApplicationHistory';
import { useHelperApplication } from './hooks/useHelperApplication';

function ApplicationHistoryTemplate() {
  const {
    helperApplications,
    currAppliId,
    review,
    isBottomOpen,
    setIsBottomOpen,
    handleHelperStatusActive,
    handleHelperDetailActive,
  } = useHelperApplication();

  const {
    errandApplications,
    isModalOpen,
    type,
    setIsModalOpen,
    handleStatusActive,
    handleDeleteApplication,
    handleErrandDetailActive,
  } = useErrandApplicationHistory();
  return (
    <div className="mt-6 flex flex-col gap-4 pb-10">
      {type === 'errand'
        ? errandApplications?.map((item) => (
            <CustomHistoryCard
              key={item.id}
              images={item.errand.images}
              title={item.errand.title}
              address_dong={item.errand.address_dong}
              price={item.errand.price}
              status={item.status}
              hasWrittenReview={item.hasWrittenReview}
              createdAt={item.createdAt}
              type="apply"
              handleErrandDetailActive={() =>
                handleErrandDetailActive(item.errand.id)
              }
              handleStatusActive={() =>
                handleStatusActive({
                  status: item.status,
                  currApplicationId: item.id,
                  errandId: item.errand.id,
                })
              }
            />
          ))
        : helperApplications?.map((item) => (
            <CustomHistoryCard
              key={item.id}
              // images={item.helperPosts}
              title={item.helperPosts.title}
              address_dong={item.helperPosts.address_dong}
              price={String(item.helperPosts.price)}
              status={item.status}
              hasWrittenReview={item.hasWrittenReview}
              createdAt={item.createdAt}
              type="apply"
              handleErrandDetailActive={() =>
                handleHelperDetailActive(item.helperPosts.id)
              }
              handleStatusActive={() =>
                handleHelperStatusActive({
                  status: item.status,
                  id: item.id,
                  hasWrittenReview: item.hasWrittenReview,
                  helperId: item.helperPosts.id,
                })
              }
            />
          ))}
      <Drawer open={isBottomOpen} onOpenChange={() => setIsBottomOpen(false)}>
        <DrawerContent className="m-auto max-w-120 gap-4 p-4">
          {review && (
            <ReviewDropCard
              rating={review.rating}
              tags={review.tags}
              content={review.content}
            />
          )}
        </DrawerContent>
      </Drawer>
      <AlertModal
        title="지원을 취소하시겠습니까?"
        description={`이 작업은 다시 되돌릴 수 없습니다.`}
        isOpen={isModalOpen}
        actionText="지원 취소"
        setState={setIsModalOpen}
        onActive={handleDeleteApplication}
      />
    </div>
  );
}

export default ApplicationHistoryTemplate;
