import { CustomStatus } from '@/interfaces/common.interface';

interface Props {
  status: CustomStatus;
}

function StatusBox({ status }: Props) {
  const CURRENT_STATUS: Record<CustomStatus, string> = {
    PENDING: '대기',
    ACCEPTED: '수락',
    REJECTED: '거절',
    COMPLETED: '완료',
    COMPLETED_REQUEST: '완료 대기중',
    IN_PROGRESS: '진행중',
  };

  const STATUS_STYLE: Record<CustomStatus, string> = {
    // 대기/모집 계열 — 메인 청록
    PENDING: 'bg-teal-primary',

    // 진행중 계열 — 앰버 (캐릭터 장바구니와 같은 계열)
    IN_PROGRESS: 'bg-[#EF9F27]',
    ACCEPTED: 'bg-[#EF9F27]',
    COMPLETED_REQUEST: 'bg-[#EF9F27]',

    // 종료/비활성 계열 — 무채색
    REJECTED: 'bg-[#F2F4F6]',
    COMPLETED: 'bg-[#F2F4F6]',
  };
  return (
    <div
      className={`rounded-[6px] px-[6px] py-[2px] text-[10px] font-bold ${STATUS_STYLE[status]} ${status === 'REJECTED' || (status === 'COMPLETED' ? 'text-[#8B95A1]' : 'text-white')} `}
    >
      {CURRENT_STATUS[status]}
    </div>
  );
}

export default StatusBox;
