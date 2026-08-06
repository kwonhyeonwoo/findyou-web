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
    selectedApplicant,
    setSelectedApplicant,
    handleModalOpen,
    setIsBottomOpen,
    handleHelperProfile,
    handleActive,
    handleApplicationUpdate,
  } = useRequestTemplate();
  console.log('data', data);
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
              errandId={item.errand?.id}
              applicationId={item.id}
              nickName={item.helper.nickName}
              message={item.message}
              profile={item.helper.profile}
              helperId={item.helper.id}
              handleHelperProfile={handleHelperProfile}
              handleModalOpen={handleModalOpen}
            />
          ))}
        </DrawerContent>
      </Drawer>
      <AlertModal
        title={`${selectedApplicant?.nickName}님을 수락하시겠습니까?`}
        isOpen={!!selectedApplicant}
        description={`이 작업은 되돌릴 수 없습니다.`}
        setState={() => setSelectedApplicant(null)}
        actionText="수락"
        handleActive={() => {
          if (selectedApplicant) {
            handleApplicationUpdate({
              applicationId: selectedApplicant.applicationId,
              helperId: selectedApplicant.helperId,
            });
          }
        }}
      />
    </div>
  );
}

export default RequestTemplate;
