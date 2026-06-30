import { ErrandApplicationStatus } from "@/interfaces/errand_application.interface";
import { formatRelativeTime } from "@/lib/lib";
import Image from "next/image";
import StatusBox from "../../StatusBox/StatusBox";

interface Props {
  image?: string | undefined;
  title: string;
  address_dong: string;
  createdAt: Date;
  price: string;
  appliedCount?: number;
  applyStatus?: ErrandApplicationStatus;
}

function CustomHistoryBody({
  image,
  title,
  address_dong,
  createdAt,
  price,
  appliedCount,
  applyStatus,
}: Props) {
  return (
    <div className="flex gap-2">
      {image && (
        <div className="h-25 w-25">
          <Image
            src={`http://localhost:8000${image}`}
            alt={image}
            width={100}
            height={100}
            className="h-full rounded-[8px] border object-cover"
          />
        </div>
      )}
      <div className="flex flex-col gap-1">
        <p className="text-[14px] font-bold">{title}</p>
        {/* 위치, 시간, 동네 */}
        <div className="flex items-center gap-2">
          <div className="flex items-center">
            <Image
              src="/home/address.svg"
              width={11}
              height={14}
              alt="address"
            />
            <p className="text-[13px] text-[#464554]">{address_dong}</p>
          </div>
          <p className="text-[13px] text-[#464554]">
            {formatRelativeTime(String(createdAt))}
          </p>
        </div>
        {/* 가격, 상태 */}
        <div className="flex items-center gap-1">
          <p className="font-bold">{price}</p>
          {applyStatus && <StatusBox status={applyStatus} />}
        </div>
      </div>
    </div>
  );
}

export default CustomHistoryBody;
