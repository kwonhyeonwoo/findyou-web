interface Props {
  message: string;
}
export default function ReceivedDetailMessage({ message }: Props) {
  return (
    <p className="w-full rounded-[8px] bg-[#F7F8FA] px-5 py-2 text-[13px] text-[#4E5968]">
      {message}
    </p>
  );
}
