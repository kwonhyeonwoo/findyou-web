interface Props {
  message: string;
  handleChangeMessage: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

function ErrandMsgTextarea({ message, handleChangeMessage }: Props) {
  return (
    <div>
      <div className="relative">
        <textarea
          placeholder="예: 자전거를 타고 있어서 5분 안에 갈 수 있어요!"
          value={message}
          onChange={handleChangeMessage}
          maxLength={100}
          className="border-basic-border focus-visible:ring-teal-primary h-40 w-full resize-none rounded-[8px] border p-2"
        />
        <span className="absolute right-2 bottom-2 text-[12px] text-[#8B95A1]">
          {message?.length || 0} / 100
        </span>
      </div>
    </div>
  );
}

export default ErrandMsgTextarea;
