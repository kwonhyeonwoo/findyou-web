interface Props {
  text: string;
  id: string;
  Active: (id: string) => void;
}

function HistoryButton({ text, id, Active }: Props) {
  return (
    <button
      className="w-full rounded-[8px] bg-[#F2F4F6] py-3 text-[16px] font-bold text-[#4E5968]"
      onClick={() => Active(id)}
    >
      {text}
    </button>
  );
}

export default HistoryButton;
