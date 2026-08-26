import { CustomStatus } from '@/interfaces/common.interface';

interface Props {
  status: CustomStatus | undefined;
  handleStatusChange: (status: CustomStatus | undefined) => void;
}

const STATUS_BAR: { type: CustomStatus | undefined; text: string }[] = [
  {
    type: undefined,
    text: '전체',
  },
  {
    type: CustomStatus.PENDING,
    text: '모집중',
  },
  {
    type: CustomStatus.IN_PROGRESS,
    text: '진행중',
  },
  {
    type: CustomStatus.COMPLETED,
    text: '완료',
  },
];
function StatusBar({ status, handleStatusChange }: Props) {
  return (
    <div className="flex items-center gap-5 border-b">
      {STATUS_BAR.map((item) => (
        <button
          key={item.type}
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
