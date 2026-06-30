"use client";
import CustomHistoryCard from "@/components/History/CustomHistoryCard/CustomHistoryCard";
import { useMyApplicationsQuery } from "@/hooks/quires/errand-application/useMyApplicationsQuery";

function ApplicationTemplate() {
  const { data, isLoading } = useMyApplicationsQuery();
  console.log("data", data);
  return (
    <div className="mt-6 flex flex-col gap-4 pb-10">
      {data?.map((item) => (
        <CustomHistoryCard
          {...item.errand}
          key={item.id}
          appliedStatus={item.status}
          btnText="심부름 상세"
        />
      ))}
    </div>
  );
}

export default ApplicationTemplate;
