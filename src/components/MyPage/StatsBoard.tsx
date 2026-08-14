interface Props {
  progressErrandCount: number;
  writeReviewCount: number;
}

function StatsBoard({ progressErrandCount, writeReviewCount }: Props) {
  return (
    <div className="border-basic-broder flex items-center justify-center rounded-[12px] border px-[12px]">
      <div className="border-r-basic-border flex flex-1 flex-col items-center border-r px-3 py-[12px]">
        <p className="text-[#8B95A1]] text-[12px] font-bold">
          진행 중인 심부름
        </p>
        <p className="text-[17px] text-[#1A1A1A]">{progressErrandCount}</p>
      </div>
      <div className="flex flex-1 flex-col items-center px-3 py-[12px]">
        <p className="text-[#8B95A1]] text-[12px] font-bold">내가 쓴 리뷰</p>
        <p className="text-[17px] text-[#1A1A1A]">{writeReviewCount}</p>
      </div>
    </div>
  );
}

export default StatsBoard;
