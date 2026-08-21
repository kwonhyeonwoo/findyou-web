import { CustomStatus } from '@/interfaces/common.interface';

interface Props {
  status: CustomStatus;
  type: 'apply' | 'request';
  handleActive: () => void;
}

export default function CustomHistoryFooter({
  status,
  type,
  handleActive,
}: Props) {
  type StatusConfig = {
    label: string;
    bg: string;
    textColor: string;
    subText: string;
    subTextColor: string;
  };

  const STATUS_TEXT: Record<CustomStatus, StatusConfig> = {
    IN_PROGRESS: {
      label: '진행중',
      bg: 'bg-orange-primary',
      textColor: 'text-orange-light',
      subText: '진행상황',
      subTextColor: 'text-teal-primary', // 진행상황 페이지로 가야함
    },
    COMPLETED: {
      label: '완료',
      bg: 'bg-[#F2F4F6]',
      textColor: 'text-[#8B95A1]',
      subText: '리뷰쓰기',
      subTextColor: 'text-[#6B7280]', // 리뷰작성 페이지로 이동
    },
    PENDING: {
      label: '대기중',
      bg: 'bg-orange-primary',
      textColor: 'text-orange-light',
      subText: type === 'request' ? '지원자 보기' : '지원 취소',
      subTextColor: 'text-[#6B7280]', // 지원취소이면 모달창으로 알려줘야함
    },
    ACCEPTED: {
      label: '수락',
      bg: 'bg-teal-light',
      textColor: 'text-teal-primary',
      subText: '진행상황',
      subTextColor: 'text-teal-primary', // 진행상황으로 가야함
    },
    REJECTED: {
      label: '지원마감(미선정)',
      bg: 'bg-[#F2F4F6]',
      textColor: 'text-[#8B95A1]',
      subText: '',
      subTextColor: 'text-[#6B7280]',
    },
    COMPLETED_REQUEST: {
      label: '완료 대기 중',
      bg: 'bg-orange-primary',
      textColor: 'text-orange-light',
      subText: '수락하기', // 수락하기 모달창 띄어줘야함
      subTextColor: 'text-[#6B7280]',
    },
  };

  return (
    <div className="flex w-full items-center justify-between">
      <div className={`rounded-[8px] px-2 py-1 ${STATUS_TEXT[status].bg} `}>
        <p className={`text-[13px] font-bold ${STATUS_TEXT[status].textColor}`}>
          {STATUS_TEXT[status].label}
        </p>
      </div>
      <button
        onClick={handleActive}
        className={`text-[13px] font-bold ${STATUS_TEXT[status].subTextColor ? STATUS_TEXT[status].subTextColor : 'text-[#6B7280]'} `}
      >
        {STATUS_TEXT[status].subText}
      </button>
    </div>
  );
}
