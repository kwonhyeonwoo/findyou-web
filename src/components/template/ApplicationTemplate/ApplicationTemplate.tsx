'use client';
import CustomHistoryCard from '@/components/History/CustomHistoryCard/CustomHistoryCard';
import { useApplication } from './hooks/useApplication';

function ApplicationTemplate() {
  const { data, handleActive } = useApplication();
  return (
    <div className="mt-6 flex flex-col gap-4 pb-10">
      {data?.map((item) => (
        <CustomHistoryCard
          {...item.errand}
          key={item.id}
          appliedStatus={item.status}
          onClick={handleActive}
          btnText="심부름 상세"
        />
      ))}
    </div>
  );
}

export default ApplicationTemplate;
