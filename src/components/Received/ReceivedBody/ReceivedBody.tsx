interface Props {
  message: string;
}

function ReceivedBody({ message }: Props) {
  return (
    <div className="px-[9px] py-[11px] text-[12px] leading-normal text-[#4E5968]">
      {message}
    </div>
  );
}

export default ReceivedBody;
