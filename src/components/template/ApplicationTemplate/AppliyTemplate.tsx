'use client';
import CustomHistoryCard from '@/components/History/CustomHistoryCard/CustomHistoryCard';
import { useApplication } from './hooks/useApplication';

function AppliyTemplate() {
  const { data, handleActive } = useApplication();
  return (
    <div className="mt-6 flex flex-col gap-4 pb-10">
      {data?.map((item) => (
        <CustomHistoryCard
          {...item.helper}
          key={item.id}
          status={item.status}
          type="apply"
          applications={item.helper}
          onClick={() => {}}
        />
      ))}
    </div>
  );
}

export default AppliyTemplate;
