'use client';

import ReceivedDetailCard from '@/components/ReceivedDetail/ReceivedDetailCard/ReceivedDetailCard';
import useReceivedDetail from './hooks/useReceivedDetail';

function ReceivedDetailTemplate() {
  const { data, isLoading } = useReceivedDetail();
  return (
    <div className="flex flex-col gap-4 pt-5 pb-10">
      {/* 프로필 */}
      {data?.map((item, idx) => (
        <ReceivedDetailCard data={item} key={item.id} />
      ))}
    </div>
  );
}

export default ReceivedDetailTemplate;
