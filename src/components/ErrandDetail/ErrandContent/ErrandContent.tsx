import Deadline from "../Deadline/Deadline";

interface Props {
  title: string;
  price: string;
  description: string;
}

export default function ErrandContent({ title, price, description }: Props) {
  return (
    <div className="flex w-full flex-col gap-6">
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
