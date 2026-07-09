import { ErrandStatus } from "@/interfaces/errand.interface";
import StatusBox from "../common/StatusBox/StatusBox";
import { formatDate } from "@/lib/lib";

interface Props {
  title: string;
  price: string;
  status: ErrandStatus;
  date: Date;
}
function ErrandStatusTitle({ title, price, status, date }: Props) {
  return (
    <div className="flex flex-col gap-2 border-b border-b-[#E3E2E2] pt-4 pb-6">
      {/* 상태, 날짜 */}
      <div className="flex items-center justify-between">
        <StatusBox status={status} />
        <p className="text-[12px] text-[#464554]">{formatDate(date)}</p>
      </div>

      <div className="text-[24px]">{title}</div>
      <p className="text-[24px] font-bold">{price}</p>
    </div>
  );
}

export default ErrandStatusTitle;
