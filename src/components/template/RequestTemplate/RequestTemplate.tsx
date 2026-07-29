'use client';
import CustomHistoryCard from '@/components/History/CustomHistoryCard/CustomHistoryCard';
import { useRequestTemplate } from '@/hooks/useRequestTemplate';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import ApplicantCard from '@/components/History/ApplicantCard/ApplicantCard';

function RequestTemplate() {
  const {
    data,
    isOpen,
    currentIdx,
    setIsOpen,
    handleActive,
    handleApplicationStatus,
  } = useRequestTemplate();
  return (
    <div className="mt-6 flex flex-col gap-4 pb-10">
      {data?.map((item, idx) => (
        <CustomHistoryCard
          key={item.id}
          {...item}
          applications={item?.applications}
          onClick={() =>
            handleActive({ idx, id: item.id, status: item.status })
          }
        />
      ))}
      <Drawer open={isOpen} onOpenChange={() => setIsOpen(false)}>
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
