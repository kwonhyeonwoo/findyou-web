import StatusBox from '@/components/common/StatusBox/StatusBox';
import { ErrandApplicationStatus } from '@/interfaces/errand_application.interface';
import { ErrandStatus } from '@/interfaces/errand.interface';
import { fillterCategory, formatRelativeTime } from '@/lib/lib';
import Image from 'next/image';
import { ErrandCategory } from '@/schema/errand.schema';

interface Props {
  category: ErrandCategory;
  status: ErrandApplicationStatus | ErrandStatus;
  createdAt: Date;
}

function ErrandListHeader({ status, category, createdAt }: Props) {
  console.log('status', status);
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-2">
        <StatusBox status={status} />
        <div className="rounded-[6px] bg-gray-100 px-[6px] py-[2px] text-[10px] text-gray-500">
          {fillterCategory(category)}
        </div>
      </div>

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
