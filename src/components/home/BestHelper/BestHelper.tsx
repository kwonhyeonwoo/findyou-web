import { IBestHeleper } from '@/interfaces/helper-postinterface';
import Image from 'next/image';

export default function BestHelper({
  name,
  level,
  category,
  success,
}: IBestHeleper) {
  return (
    <div className="box-border flex gap-4 border-b border-b-[#EEEEEE] bg-[#FCFEFD] px-4 py-4 last:border-b-0">
      {/* 나중에 프로필 이미지 들어가줘야함 */}
      <div className="h-12 w-12 rounded-full bg-gray-200" />
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[14px] font-medium text-[#1F2937]">{name}</p>
          <span className="border-teal-border text-teal-primary rounded-full border bg-white px-2 py-1 text-[11px] font-medium">
            {level}
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-2 text-[12px] text-[#525A60]">
          <p>{category}</p>
          <span className="text-[#94A3B8]">완료 {success}건</span>
        </div>
      </div>
      <Image
        className="ml-auto"
        src="/home/right-arrow.svg"
        alt="right-arrow"
        width={7}
        height={12}
      />
    </div>
  );
}
