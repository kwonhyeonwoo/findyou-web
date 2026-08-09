'use client';
import ReceivedCard from '@/components/Received/ReceivedCard/ReceivedCard';
import useReceivedHistory from './hooks/useReceivedHistory';

export default function ReceivedHistoryTemplate() {
  const { data } = useReceivedHistory();
  return (
    <div className="flex flex-col gap-3 pt-10 pb-10">
      <ReceivedCard />
    </div>
  );
}
