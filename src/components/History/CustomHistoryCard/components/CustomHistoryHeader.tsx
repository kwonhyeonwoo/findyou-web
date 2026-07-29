import { ErrandStatus } from '@/interfaces/errand.interface';
import Image from 'next/image';

interface Props {
  status: ErrandStatus;
}

const STATUS_STYLES = {
  MATCHING: 'bg-teal-primary text-teal-light',
  IN_PROGRESS: 'bg-orange-primary text-orange-light',
  COMPLETED: 'bg-[#5F5E5A] text-[#5F5E5A]',
};

function CustomHistoryHeader({ status }: Props) {
  return (
    <div className="items-centere flex w-full justify-between">
      <div
        className={`rounded-[6px] px-2 py-1 ${STATUS_STYLES[status]} text-[12px] font-bold`}
      >
        {status === ErrandStatus.MATCHING
          ? '대기중'
          : status === ErrandStatus.IN_PROGRESS
            ? '진행중'
            : '완료'}
      </div>
      <Image
        src={'/history-card/meatball.svg'}
        alt="Meatball"
        width={14}
        height={2}
      />
    </div>
  );
}

export default CustomHistoryHeader;
