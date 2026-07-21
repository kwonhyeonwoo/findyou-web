"use client";
import CustomHistoryCard from "@/components/History/CustomHistoryCard/CustomHistoryCard";
import { useRequestTemplate } from "@/hooks/useRequestTemplate";
import { Drawer, DrawerContent } from "@/components/ui/drawer";
import ApplicantCard from "@/components/History/ApplicantCard/ApplicantCard";
import { ErrandStatus } from "@/interfaces/errand.interface";
function RequestTemplate() {
  const { data, isOpen, currentIdx, handleActive, handleApplicationStatus } =
    useRequestTemplate();
  return (
    <div className="mt-6 flex flex-col gap-4 pb-10">
      {data?.map((item, idx) => (
        <CustomHistoryCard
          key={item.id}
          {...item}
          idx={idx}
          applications={item?.applications}
          btnText={
            item.status === ErrandStatus.MATCHING
              ? "지원자 목록"
              : item.status === ErrandStatus.IN_PROGRESS
                ? "진행 상황"
                : "완료 내역"
          }
          onClick={() => handleActive(idx, item)}
        />
      ))}
      <Drawer open={isOpen} onOpenChange={() => handleActive(null)}>
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
