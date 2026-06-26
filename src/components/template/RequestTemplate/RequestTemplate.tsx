"use client";
import ErrandCard from "@/components/common/ErrandCard/ErrandCard";
import { useGetMyErrandsQuery } from "@/hooks/quires/errand/useGetMyErrandsQuery";
import { useErrandCardRouter } from "@/hooks/useErrandCardRouter";

function RequestTemplate() {
  const { data } = useGetMyErrandsQuery();
  const { handleRouter } = useErrandCardRouter();
  return (
    <div className="mt-6 flex flex-col gap-4 pb-10">
      {data?.map((item) => (
        <ErrandCard key={item.id} {...item} onRouter={handleRouter} />
      ))}
    </div>
  );
}

export default RequestTemplate;
