"use client";
import CustomHistoryCard from "@/components/History/CustomHistoryCard/CustomHistoryCard";
import { useRequestTemplate } from "@/hooks/useRequestTemplate";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import ApplicantCard from "@/components/History/ApplicantCard/ApplicantCard";
function RequestTemplate() {
  const { data, isOpen, currentIdx, handleRouter, handleApplicationStatus } =
    useRequestTemplate();
  console.log("req", data);
  return (
    <div className="mt-6 flex flex-col gap-4 pb-10">
      {data?.map((item, idx) => (
        <CustomHistoryCard
          key={item.id}
          {...item}
          idx={idx}
          applications={item?.applications}
          btnText="지원자 목록"
          Active={handleRouter}
        />
      ))}
      <Drawer open={isOpen} onOpenChange={() => handleRouter(null)}>
        <DrawerContent className="m-auto max-w-120 gap-4 p-4">
          {data?.[currentIdx ?? 0]?.applications?.map((item) => (
            <ApplicantCard
              key={item.id}
              id={item.id}
              name={item.helper.name}
              message={item.message}
              profile={item.helper.profile}
              handleApplicationStatus={handleApplicationStatus}
            />
          ))}
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default RequestTemplate;
