import StatusBox from '@/components/common/StatusBox/StatusBox';
import { ErrandApplicationResponse } from '@/interfaces/errand_application.interface';
import { formatPriceNumber, formatRelativeTime } from '@/lib/lib';
import Image from 'next/image';
import AvatarStack from './AvatarStack';
import { CustomStatus } from '@/interfaces/common.interface';

interface Props {
  image?: string | undefined;
  title: string;
  address_dong: string;
  createdAt: Date;
  price: string;
  status: CustomStatus;
  applications?: ErrandApplicationResponse[];
  applyStatus?: CustomStatus;
}

function CustomHistoryBody({
  image,
  title,
  address_dong,
  createdAt,
  price,
  applications,
  status,
  applyStatus,
}: Props) {
  return (
    <div className="flex gap-2">
      {image && (
        <div className="h-20 w-20">
          <Image
            src={`http://localhost:8000${image}`}
            alt={image}
            width={80}
            height={80}
            className="h-full rounded-[8px] border object-cover"
          />
        </div>
      )}
      <div className="flex flex-col">
        <p className="text-[14px] font-bold">{title}</p>
        {/* 위치, 시간, 동네 */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
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
          {applications && status === CustomStatus.PENDING && (
            <AvatarStack count={applications?.length} />
          )}
        </div>
        {/* 가격, 상태 */}
        <div className="flex items-center gap-1">
          <p className="font-bold">{formatPriceNumber(Number(price))}</p>
          {applyStatus && <StatusBox status={applyStatus} />}
        </div>
      </div>
    </div>
  );
}

export default CustomHistoryBody;
