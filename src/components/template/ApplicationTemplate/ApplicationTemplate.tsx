"use client";
import AppliedErrandCard from "@/components/common/ErrandCard/AppliedErrandCard";
import { useMyApplicationsQuery } from "@/hooks/quires/errand-application/useMyApplicationsQuery";

function ApplicationTemplate() {
  const { data, isLoading } = useMyApplicationsQuery();
  return (
    <div className="mt-6 flex flex-col gap-4 pb-10">
      {data?.map((item) => (
        <AppliedErrandCard
          key={item.id}
          {...item.errand}
          applicatoinStatus={item.status}
        />
      ))}
    </div>
  );
}

export default ApplicationTemplate;
