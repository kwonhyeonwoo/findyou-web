interface Props {
  content: string;
}

export default function HelperPostDetailContent({ content }: Props) {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-[13px]">상세내용</p>
      <p className="text-[14px] leading-normal whitespace-pre-line">
        {content}
      </p>
    </div>
  );
}
