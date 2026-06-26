import { ErrandStatus } from "@/interfaces/errand.interface";
import { fillterCategory, STATUS_FILLTER, STATUS_STYLES } from "@/lib/lib";
import { ErrandCategory } from "@/schema/errand.schema";
import Deadline from "../Deadline/Deadline";

interface Props {
  category: ErrandCategory;
  status: ErrandStatus;
  title: string;
  price: string;
  description: string;
}

export default function ErrandContent({
  category,
  status,
  title,
  price,
  description,
}: Props) {
  const statusStyle = STATUS_STYLES[status] || STATUS_STYLES.matching;
  return (
    <div className="flex w-full flex-col gap-6">
      {/* 카테고리 및 상태 */}
      <div className="flex w-full gap-2">
        <div
          className={`rounded-full px-3 py-1 text-[12px] ${statusStyle.bg} ${statusStyle.text}`}
        >
          {STATUS_FILLTER[status]}
        </div>
        <div className="rounded-full border border-[#C7C4D7] bg-[#E9E8E7] px-3 py-1 text-[12px] text-[#464554]">
          {fillterCategory(category)}
        </div>
      </div>
      {/* 제목 , 가격*/}
      <div className="border-b border-b-[#C7C4D7] pb-3">
        <h2 className="text-[24px] text-[#1B1C1C]">{title}</h2>
        <p className="text-[24px] font-bold text-[#170083]">{price}</p>
      </div>
      {/* 내용 */}
      <div className="flex flex-col gap-8 pt-3">
        <Deadline deadline="오후 8시까지" />
        <div>
          <span className="text-[12px] text-[#777586]">상세내용</span>
          <div className="pt-3 leading-normal whitespace-pre-wrap text-[#1B1C1C]">
            {description}
          </div>
        </div>
      </div>
    </div>
  );
}
