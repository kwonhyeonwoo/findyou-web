'use client';
import CustomHistoryCard from '@/components/History/CustomHistoryCard/CustomHistoryCard';
import { useApplication } from './hooks/useApplication';

function AppliyTemplate() {
  const { data, handleActive } = useApplication();
  console.log('dddd', data);
  return (
    <div className="mt-6 flex flex-col gap-4 pb-10">
      {data?.map((item) => (
        <CustomHistoryCard
          {...item.helperPosts}
          key={item.id}
          status={item.status}
          applications={item.helperPost}
          onClick={() => {}}
        />
      ))}
    </div>
  );
}

export default AppliyTemplate;
