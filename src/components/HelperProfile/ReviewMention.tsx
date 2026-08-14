interface Props {
  mention: string;
}

function ReviewMention({ mention }: Props) {
  return (
    <div className="rounded-full bg-[#F5F3F3] px-4 py-2 text-[14px] font-medium">
      {mention}
    </div>
  );
}

export default ReviewMention;
