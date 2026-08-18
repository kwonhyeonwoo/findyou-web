'use client';
import CustomHistoryCard from '@/components/History/CustomHistoryCard/CustomHistoryCard';
import { useApplication } from './hooks/useApplication';

function ApplyTemplate() {
  const { data, handleActive } = useApplication();
  console.log('apply data', data);
  return (
    <div className="mt-6 flex flex-col gap-4 pb-10">
      {data?.map((item) => (
        <CustomHistoryCard
          title={item.helperPosts.title}
          address_dong={item.helperPosts.address_dong}
          price={String(item.helperPosts.price)}
          key={item.id}
          createdAt={item.createdAt}
          status={item.status}
          // applications={item.helperPost}
          onClick={() => {}}
        />
      ))}
    </div>
  );
}

export default ApplyTemplate;
