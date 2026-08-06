import { CustomStatus } from '@/interfaces/common.interface';

interface Props {
  status: CustomStatus;
  count: number;
  type: 'apply' | 'errand';
  onClick: () => void;
}

function HistoryButton({ status, type, count, onClick }: Props) {
  const BTN_TEXT = {
    errand: {
      PENDING:
        count > 0
          ? {
              text: `지원자 ${count}명 보기`,
              variant: 'primary',
              clickable: true,
            }
          : {
              text: '아직 지원자가 없어요',
              variant: 'muted',
              clickable: false,
            },
      IN_PROGRESS: {
        text: '진행 상황 보기',
        variant: 'outline',
        clickable: true,
      },
      COMPLETED: { text: '리뷰 쓰기', variant: 'ghost', clickable: true },
    },
    apply: {
      PENDING: { text: '수락 대기중', variant: 'waiting', clickable: false },
      ACCEPTED: { text: '진행 상황 보기', variant: 'outline', clickable: true },
      COMPLETED: { text: '리뷰 쓰기', variant: 'ghost', clickable: true },
      REJECTED: {
        text: '지원이 거절되었어요',
        variant: 'muted',
        clickable: false,
      },
    },
  };

  return (
    <button
      className="w-full rounded-[8px] bg-[#F2F4F6] py-3 text-[16px] font-bold text-[#4E5968]"
      disabled={BTN_TEXT[type][status].clickable}
      onClick={onClick}
    >
      {BTN_TEXT[type][status].text}
    </button>
  );
}

export default HistoryButton;
