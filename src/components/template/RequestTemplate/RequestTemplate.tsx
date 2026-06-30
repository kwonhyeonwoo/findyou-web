"use client";
import CustomHistoryCard from "@/components/History/CustomHistoryCard/CustomHistoryCard";
import { useErrandCardRouter } from "@/hooks/useErrandCardRouter";

function RequestTemplate() {
  const { data, handleRouter } = useErrandCardRouter();
  return (
    <div className="mt-6 flex flex-col gap-4 pb-10">
      {data?.map((item) => (
        <CustomHistoryCard
          key={item.id}
          {...item}
          applicatoins={item?.applications}
          Active={handleRouter}
          btnText="지원자 목록"
        />
      ))}
    </div>
  );
}

export default RequestTemplate;
