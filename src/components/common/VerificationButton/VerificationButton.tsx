interface Props {
  text: string;
  onActive: () => void;
}
export default function VerificationButton({ text, onActive }: Props) {
  return (
    <button
      className="rounded-[8px] border border-[#C7C4D7] px-[12px] py-[7px] text-[14px] text-[#464554]"
      onClick={onActive}
    >
      {text}
    </button>
  );
}
