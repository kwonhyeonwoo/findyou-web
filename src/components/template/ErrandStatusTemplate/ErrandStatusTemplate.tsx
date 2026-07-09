"use client";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import ErrandHelper from "@/components/ErrandStatus/ErrandHelper";
import ErrandHelperKaKao from "@/components/ErrandStatus/ErrandHelperKaKao";
import ErrandStatusInfo from "@/components/ErrandStatus/ErrandStatusInfo";
import ErrandStatusTitle from "@/components/ErrandStatus/ErrandStatusTitle";
import { useErrandStatus } from "./hooks/useErrandStatus";

const ErrandStatusTemplate = () => {
  const { data, handleComplete, handleKaKaoOpenLink, handleProfileDetail } =
    useErrandStatus();
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
        Active={handleComplete}
      />
    </div>
  );
};

export default ErrandStatusTemplate;
