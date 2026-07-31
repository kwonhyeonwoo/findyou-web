import { ErrandStatus } from '@/interfaces/errand.interface';

interface Props {
  status: ErrandStatus | undefined;
  handleStatusChange: (status: ErrandStatus | undefined) => void;
}

const STATUS_BAR: { type: ErrandStatus | undefined; text: string }[] = [
  {
    type: undefined,
    text: '전체',
  },
  {
    type: ErrandStatus.MATCHING,
    text: '모집중',
  },
  {
    type: ErrandStatus.IN_PROGRESS,
    text: '진행중',
  },
  {
    type: ErrandStatus.COMPLETED,
    text: '완료',
  },
];
function StatusBar({ status, handleStatusChange }: Props) {
  return (
    <div className="flex items-center gap-5 border-b">
      {STATUS_BAR.map((item) => (
        <button
          type="button"
          className={`pb-1 font-semibold ${item.type === status ? 'text-teal-primary border-b-teal-primary border-b-2' : ''}`}
          onClick={() => handleStatusChange(item.type)}
        >
          {item.text}
        </button>
      ))}
    </div>
  );
}

export default StatusBar;
