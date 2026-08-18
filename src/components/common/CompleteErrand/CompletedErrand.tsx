import Link from 'next/link';
import CompletedErrandCard from './CompletedErrandCard/CompletedErrandCard';

function CompletedErrand() {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between">
        <p className="font-bold text-[#1A1A1A]">수행 완료한 심부름</p>
        <Link href={''} className="text-[12px] text-[#8B95A1]">
          더보기
        </Link>
      </div>
      <div className="mt-5 flex flex-col gap-3">
        <CompletedErrandCard
          title="지금당장 해줄사람"
          price="12,000원"
          startAddress="서울 역삼동"
          finishAddress="서울 신림동"
          dateTime={new Date()}
        />
      </div>
    </div>
  );
}

export default CompletedErrand;
