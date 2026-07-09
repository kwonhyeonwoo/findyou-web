interface Props {
  message: string;
}

function ErrandMessage({ message }: Props) {
  return (
    <div className="flex flex-col gap-1">
      <p className="text-[18px]">심부름 메시지</p>
      <p className="text-[14px] leading-normal whitespace-pre text-[#464554]">
        {message}
      </p>
    </div>
  );
}

export default ErrandMessage;
