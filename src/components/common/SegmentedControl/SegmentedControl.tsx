interface Props {
  text: string;
  type: string;
  selectedType: string | null;
  handleActive: (type: string) => void;
}

function SegmentedControl({ text, selectedType, type, handleActive }: Props) {
  return (
    <button
      onClick={() => handleActive(type)}
      className={`border-basic-border rounded-full border px-3 py-2 text-[12px] font-semibold ${type === selectedType ? 'bg-teal-primary text-white' : 'bg-white'}`}
    >
      {text}
    </button>
  );
}

export default SegmentedControl;
