import StatusBox from "@/components/common/StatusBox/StatusBox";
import { ErrandApplicationStatus } from "@/interfaces/errand_application.interface";
import { ErrandStatus } from "@/interfaces/errand.interface";
import { formatRelativeTime } from "@/lib/lib";
import Image from "next/image";

interface Props {
  status: ErrandApplicationStatus | ErrandStatus;
  createdAt: Date;
}

function ErrandListHeader({ status, createdAt }: Props) {
  return (
    <div className="flex w-full items-center justify-between">
      <StatusBox status={status} />
      <div className="flex items-center gap-1">
        <Image src="/common/time.svg" alt="time" width={13} height={13} />
        <p className="text-[12px] text-[#464554]">
          {formatRelativeTime(String(createdAt))}
        </p>
      </div>
    </div>
  );
}

export default ErrandListHeader;
