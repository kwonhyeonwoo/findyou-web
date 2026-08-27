'use client';
import CustomHistoryCard from '@/components/History/CustomHistoryCard/CustomHistoryCard';
import { useApplication } from './hooks/useApplication';
import AlertModal from '@/components/common/AlertModal/AlertModal';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import ReviewDropCard from '@/components/ReviewDropCard/ReviewDropCard';

function ApplyTemplate() {
  const {
    data,
    isModalOpen,
    currAppliId,
    review,
    isBottomOpen,
    setIsBottomOpen,
    setIsModalOpen,
    handleDeleteApplication,
    handleStatusAction,
  } = useApplication();
  return (
    <div className="mt-6 flex flex-col gap-4 pb-10">
      {data?.map((item) => (
        <CustomHistoryCard
          title={item.helperPosts.title}
          address_dong={item.helperPosts.address_dong}
          price={String(item.helperPosts.price)}
          key={item.id}
          hasWrittenReview={item.hasWrittenReview}
          createdAt={item.createdAt}
          type="apply"
          status={item.status}
          onClick={() =>
            handleStatusAction({
              id: item.id,
              status: item.status,
              helperId: item.helperPosts.helper.id,
              hasWrittenReview: item.hasWrittenReview,
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
        handleActive={handleDeleteApplication}
      />
    </div>
  );
}

export default ApplyTemplate;
