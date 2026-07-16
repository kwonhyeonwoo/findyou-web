import { ErrandStatus } from "@/interfaces/errand.interface";
import { fillterCategory, STATUS_FILLTER, STATUS_STYLES } from "@/lib/lib";
import { ErrandCategory } from "@/schema/errand.schema";

interface Props {
  status: ErrandStatus;
  category: ErrandCategory;
}

function ErrandCategoryStatus({ status, category }: Props) {
  const statusStyle = STATUS_STYLES[status] || STATUS_STYLES.MATCHING;
  return (
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
  );
}

export default ErrandCategoryStatus;
