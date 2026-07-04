interface Props {
  text: string;
  idx: number;
  Active: (idx: number) => void;
}

function HistoryButton({ text, idx, Active }: Props) {
  return (
    <button
      className="w-full rounded-[8px] bg-[#F2F4F6] py-3 text-[16px] font-bold text-[#4E5968]"
      onClick={() => Active(idx)}
    >
      {text}
    </button>
  );
}

export default HistoryButton;
