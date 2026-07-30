'use client';
import CustomHistoryCard from '@/components/History/CustomHistoryCard/CustomHistoryCard';
import { useRequestTemplate } from '@/hooks/useRequestTemplate';
import { Drawer, DrawerContent } from '@/components/ui/drawer';
import ApplicantCard from '@/components/History/ApplicantCard/ApplicantCard';
import AlertModal from '@/components/common/AlertModal/AlertModal';

function RequestTemplate() {
  const {
    data,
    isBottomOpen,
    currentIdx,
    isModalOpen,
    setIsModalOpen,
    handleModalOpen,
    setIsBottomOpen,
    handleHelperProfile,
    handleActive,
    handleApplicationUpdate,
  } = useRequestTemplate();
  console.log(';errand', data);
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
      <Drawer open={isBottomOpen} onOpenChange={() => setIsBottomOpen(false)}>
        <DrawerContent className="m-auto max-w-120 gap-4 p-4">
          {data?.[currentIdx ?? 0]?.applications?.map((item) => (
            <ApplicantCard
              key={item.id}
              errandId={data?.[currentIdx ?? 0]?.id}
              nickName={item.helper.nickName}
              message={item.message}
              profile={item.helper.profile}
              helperId={item.helper.id}
              isModalOpen={isModalOpen}
              setIsModalOpen={setIsModalOpen}
              handleApplicationUpdate={handleApplicationUpdate}
              handleHelperProfile={handleHelperProfile}
              handleModalOpen={handleModalOpen}
            />
          ))}
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default RequestTemplate;
