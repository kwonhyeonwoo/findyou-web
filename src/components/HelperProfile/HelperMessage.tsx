interface Props {
  message: string;
}

function HelperMessage({ message }: Props) {
  return (
    <div className="rounded-[12px] bg-[#F7F8FA] p-[14px] text-[13px] leading-normal text-[#4E5968]">
      {message}
    </div>
  );
}

export default HelperMessage;
