interface Props {
  text: string;
  bgColor?: string;
  handleActive: () => void;
}
function ReceivedButton({ text, bgColor, handleActive }: Props) {
  return (
    <button
      onClick={handleActive}
      className={`w-full rounded-[8px] px-[9px] py-[9px] font-semibold ${
        bgColor ? `${bgColor} text-white` : 'border bg-white text-[#4E5968]'
      }`}
    >
      {text}
    </button>
  );
}

export default ReceivedButton;
