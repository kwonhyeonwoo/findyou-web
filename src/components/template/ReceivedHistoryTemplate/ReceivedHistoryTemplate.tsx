'use client';
import ReceivedCard from '@/components/Received/ReceivedCard/ReceivedCard';
import useReceivedHistory from './hooks/useReceivedHistory';
import { CustomStatus } from '@/interfaces/common.interface';

export default function ReceivedHistoryTemplate() {
  const { data, handleReceivedHistory, handleAcceptedActive } =
    useReceivedHistory();
  return (
    <div className="flex flex-col gap-5 pt-5 pb-10">
      <p className="text-[13px] text-[#464554]">
        내가 등록 한 헬퍼 글 {data?.length}
      </p>
      <div className="flex flex-col gap-4">
        {data?.map((item) => {
          const acceptedApplication = item.applications.find(
            (accepted) =>
              accepted.status === CustomStatus.ACCEPTED ||
              accepted.status === CustomStatus.COMPLETE_REQUESTED,
          );
          return (
            <ReceivedCard
              data={item}
              acceptedApplication={acceptedApplication}
              key={item.id}
              handleAcceptedActive={handleAcceptedActive}
              handleReceivedHistory={handleReceivedHistory}
            />
          );
        })}
      </div>
    </div>
  );
}
