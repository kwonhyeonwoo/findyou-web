"use client";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import ErrandHelper from "@/components/ErrandStatus/ErrandHelper";
import ErrandHelperKaKao from "@/components/ErrandStatus/ErrandHelperKaKao";
import ErrandStatusInfo from "@/components/ErrandStatus/ErrandStatusInfo";
import ErrandStatusTitle from "@/components/ErrandStatus/ErrandStatusTitle";
import { useErrandStatus } from "./hooks/useErrandStatus";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const ErrandStatusTemplate = () => {
  const {
    data,
    isCompleteOpen,
    setIsCompleteOpen,
    handleComplete,
    handleOpenCompleteModal,
    handleKaKaoOpenLink,
    handleProfileDetail,
  } = useErrandStatus();
  if (!data) return;
  return (
    <div className="flex flex-col gap-6">
      <ErrandStatusTitle
        title={data.title}
        price={data.price}
        status={data.status}
        date={data.createdAt}
      />
      <ErrandHelper
        nickName={data.applications[0].helper.nickName}
        profile={data.applications[0].helper.profile}
        onProfileDetail={() =>
          handleProfileDetail(data.applications[0].helper.id)
        }
      />
      <ErrandStatusInfo
        startTime={data.applications[0].updatedAt}
        start={data.applications[0].helper.address}
        arrive={data.address}
        description={data.description}
      />
      <ErrandHelperKaKao
        onKaKaoOpenLink={() => handleKaKaoOpenLink(data.openLink)}
      />
      <SubmitButton
        text="심부름 완료"
        isDisabled={false}
        bgColor="bg-[#2A14B4]"
        isPending={false}
        Active={handleOpenCompleteModal}
      />

      <AlertDialog open={isCompleteOpen} onOpenChange={setIsCompleteOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>심부름을 완료하시겠습니까?</AlertDialogTitle>
            <AlertDialogDescription>
              이 작업은 되돌릴 수 없습니다. 수행자가 심부름을 완벽히 마쳤는지
              확인해 주세요.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter className="flex gap-2 sm:justify-center sm:space-x-0">
            <AlertDialogCancel className="h-10 flex-1">취소</AlertDialogCancel>
            <AlertDialogAction onClick={handleComplete} className="h-10 flex-1">
              완료하기
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default ErrandStatusTemplate;
