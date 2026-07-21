import { IBestHeleper } from '@/interfaces/helper.interface';
import Image from 'next/image';

export default function BestHelper({
  name,
  level,
  category,
  success,
}: IBestHeleper) {
  return (
    <div className="flex px-4 py-4 box-border gap-4 border-b border-b-[#EEEEEE] last:border-b-0 bg-[#FCFEFD]">
      {/* 나중에 프로필 이미지 들어가줘야함 */}
      <div className="w-12 h-12 rounded-full bg-gray-200" />
      <div className="flex flex-col gap-1">
        <div className="flex flex-wrap items-center gap-2">
          <p className="text-[14px] font-medium text-[#1F2937]">{name}</p>
          <span className="rounded-full border border-teal-border bg-white px-2 py-1 text-[11px] font-medium text-teal-primary">
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
