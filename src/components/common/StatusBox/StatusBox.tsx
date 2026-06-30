import { ErrandStatus } from "@/interfaces/errand.interface";
import { ErrandApplicationStatus } from "@/interfaces/errand_application.interface";

interface Props {
  status: ErrandApplicationStatus | ErrandStatus;
}

function StatusBox({ status }: Props) {
  const CURRENT_STATUS = {
    PENDING: "대기",
    ACCEPTED: "수락",
    REJECTED: "거절",
    COMPLETED: "완료",
    matching: "모집중",
    in_progress: "진행중",
    completed: "완료",
  };

  const STATUS_STYPE = {
    PENDING: "bg-[#0D9488]",
    ACCEPTED: "bg-[#4028D4]",
    REJECTED: "bg-[#F2F4F6]",
    COMPLETED: "bg-[#F2F4F6]",
    matching: "bg-[#4028D4]",
    in_progress: "bg-[#0D9488]",
    completed: "bg-[#F2F4F6]",
  };
  return (
    <div
      className={`rounded-[6px] px-[6px] py-[2px] text-[10px] font-bold ${STATUS_STYPE[status]} ${status === "REJECTED" || (status === "COMPLETED" ? "text-[#8B95A1]" : "text-white")} `}
    >
      {CURRENT_STATUS[status]}
    </div>
  );
}

export default StatusBox;
