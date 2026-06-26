import { ErrandStatus } from "@/interfaces/errand.interface";
import {
  fillterCategory,
  formatRelativeTime,
  STATUS_FILLTER,
  STATUS_STYLES,
} from "@/lib/lib";
import { ErrandCategory } from "@/schema/errand.schema";
import Image from "next/image";

interface Props {
  status: ErrandStatus;
  category: ErrandCategory;
  createdAt: Date;
}

function ErrandCardHeader({ status, category, createdAt }: Props) {
  const currentStyle = STATUS_STYLES[status] || STATUS_STYLES.matching;

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div
          className={`rounded-full px-3 py-1 text-[12px] ${currentStyle.bg} ${currentStyle.text}`}
        >
          {STATUS_FILLTER[status]}
        </div>
        <div className="text-[12px] text-[#464554]">
          {fillterCategory(category)}
        </div>
      </div>

      <div className="flex items-center gap-1">
        <Image src="/common/time.svg" alt="time" width={13} height={13} />
        <p className="text-[14px] text-[#464554]">
          {formatRelativeTime(String(createdAt))}
        </p>
      </div>
    </div>
  );
}

export default ErrandCardHeader;
