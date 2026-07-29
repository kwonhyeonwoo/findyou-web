import { ErrandStatus } from '@/interfaces/errand.interface';

interface Props {
  status: ErrandStatus;
  count: number;
  onClick: () => void;
}

function HistoryButton({ status, count, onClick }: Props) {
  const BTN_TEXT = {
    MATCHING: count > 0 ? `지원자 ${count}명 보기` : '지원자 없음',
    IN_PROGRESS: '진행 상황 보기',
    COMPLETED: '리뷰 쓰기',
  };
  return (
    <button
      className="w-full rounded-[8px] bg-[#F2F4F6] py-3 text-[16px] font-bold text-[#4E5968]"
      onClick={onClick}
    >
      {BTN_TEXT[status]}
    </button>
  );
}

export default HistoryButton;
