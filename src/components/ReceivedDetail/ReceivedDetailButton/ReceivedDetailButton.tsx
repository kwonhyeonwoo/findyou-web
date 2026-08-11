interface Props {
  text: string;
  bgColor: string;
  textColor: string;
  Active: () => void;
}
export default function ReceivedDetailButton({
  text,
  textColor,
  bgColor,
  Active,
}: Props) {
  return (
    <button
      onClick={Active}
      className={`w-full rounded-[8px] py-3 ${bgColor} ${textColor} font-bold`}
    >
      {text}
    </button>
  );
}
