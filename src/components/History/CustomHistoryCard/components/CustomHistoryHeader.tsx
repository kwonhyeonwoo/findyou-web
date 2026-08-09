import { CustomStatus } from '@/interfaces/common.interface';
import { ErrandStatus } from '@/interfaces/errand.interface';
import Image from 'next/image';

interface Props {
  status: CustomStatus;
}

const STATUS_STYLES = {
  PENDING: 'bg-teal-primary text-teal-light', // 대기
  IN_PROGRESS: 'bg-orange-primary text-orange-light', // 진행
  COMPLETED: 'bg-[#5F5E5A] text-[#5F5E5A]', // 완료
  ACCEPTED: 'bg-teal-primary text-teal-light', // 수락
  REJECTED: 'bg-[#5F5E5A] text-[#5F5E5A]', // 거절
};

function CustomHistoryHeader({ status }: Props) {
  return (
    <div className="items-centere flex w-full">
      {/* <div
        className={`rounded-[6px] px-2 py-1 ${STATUS_STYLES[status]} text-[12px] font-bold`}
      >
        {status === CustomStatus.PENDING
          ? '대기중'
          : status === CustomStatus.IN_PROGRESS
            ? '진행중'
            : status === CustomStatus.ACCEPTED
              ? '수락'
              : status === CustomStatus.REJECTED
                ? '거절'
                : status === CustomStatus.COMPLETED
                  ? '완료'
                  : ''}
      </div> */}
      <Image
        className="ml-auto"
        src={'/history-card/meatball.svg'}
        alt="Meatball"
        width={14}
        height={2}
      />
    </div>
  );
}

export default CustomHistoryHeader;
