'use client';
import ReceivedCard from '@/components/Received/ReceivedCard/ReceivedCard';
import useReceivedHistory from './hooks/useReceivedHistory';
import { CustomStatus } from '@/interfaces/common.interface';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import ReviewDropCard from '@/components/ReviewDropCard/ReviewDropCard';

export default function ReceivedHistoryTemplate() {
  const {
    data,
    isModalOpen,
    selectedReview,
    userId,
    handleSelectedReview,
    setIsModalOpen,
    handleReceivedHistory,
    handleAcceptedActive,
    handleCompletedActive,
  } = useReceivedHistory();
  console.log('여기는 뭥미?', data);
  return (
    <div className="flex flex-col gap-5 pt-5 pb-10">
      <p className="text-[13px] text-[#464554]">
        내가 등록 한 헬퍼 글 {data?.length}
      </p>
      <div className="flex flex-col gap-4">
        {data?.map((item) => {
          console.log('item', item);
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
      </div>
      <Drawer open={isModalOpen} onOpenChange={() => setIsModalOpen(false)}>
        <DrawerContent className="m-auto max-w-120 gap-4 p-4">
          {selectedReview && (
            <ReviewDropCard
              rating={selectedReview.rating}
              tags={selectedReview.tags}
              content={selectedReview.content}
            />
          )}
        </DrawerContent>
      </Drawer>
    </div>
  );
}
