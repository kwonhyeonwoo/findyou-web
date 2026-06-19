import { ErrandStatus } from '@/interfaces/errand.interface';
import { fillterCategory, STATUS_FILLTER, STATUS_STYLES } from '@/lib/lib';
import { ErrandCategory } from '@/schema/errand.schema';

interface Props{
  category:ErrandCategory;
  status:ErrandStatus;
  title:string;
  price:string;
  description:string;
}

export default function ErrandContent({
  category,
  status,
  title,
  price,
  description
}:Props) {
  const statusStyle = STATUS_STYLES[status] || STATUS_STYLES.matching;
  return (
    <div className="flex flex-col gap-6">
      {/* 카테고리 및 상태 */}
      <div className="flex gap-2 w-full">
        <div
          className={`px-3 py-1 text-[12px] rounded-full ${statusStyle.bg} ${statusStyle.text}`}
        >{STATUS_FILLTER[status]}</div>
        <div className="px-3 py-1 text-[12px] rounded-full bg-[#E9E8E7] border border-[#C7C4D7] text-[#464554]">{fillterCategory(category)}</div>
      </div>
      {/* 제목 , 가격*/}
      <div className="pb-3 border-b border-b-[#C7C4D7]">
        <h2 className="text-[24px] text-[#1B1C1C]">{title}</h2>
        <p className="text-[24px] text-[#170083] font-bold">{price}</p>
      </div>
      {/* 내용 */}
      <div className="flex flex-col pt-3">
        <span className="text-[12px] text-[#777586]">상세내용</span>
        <div className="text-[#1B1C1C] leading-normal pt-10 whitespace-pre-wrap">
          {description}
        </div>
      </div>
    </div>
  )
}
