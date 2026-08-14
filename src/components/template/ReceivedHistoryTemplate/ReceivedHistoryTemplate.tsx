'use client';
import ReceivedCard from '@/components/Received/ReceivedCard/ReceivedCard';
import useReceivedHistory from './hooks/useReceivedHistory';

export default function ReceivedHistoryTemplate() {
  const { data, handleReceivedHistory } = useReceivedHistory();
  return (
    <div className="flex flex-col gap-5 pt-5 pb-10">
      <p className="text-[13px] text-[#464554]">
        내가 등록 한 헬퍼 글 {data?.length}
      </p>
      <div className="flex flex-col gap-4">
        {data?.map((item) => (
          <ReceivedCard
            handleReceivedHistory={handleReceivedHistory}
            data={item}
            key={item.id}
          />
        ))}
      </div>
    </div>
  );
}
