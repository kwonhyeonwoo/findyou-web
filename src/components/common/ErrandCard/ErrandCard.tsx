import { ErrandStatus } from "@/interfaces/errand.interface";
import { ErrandCategory } from "@/schema/errand.schema";
import ErrandCardHeader from "./components/ErrandCardHeader";
import ErrandCardBody from "./components/ErrandCardBody";
import ErrandCardBottom from "./components/ErrandCardBottom";

interface Props {
  id: string;
  address_dong: string;
  title: string;
  status: ErrandStatus;
  category: ErrandCategory;
  description: string;
  price: string;
  images?: string[];
  createdAt: Date;
  applications: string[];
  onRouter: (id: string) => void;
}

export default function ErrandCard({
  id,
  address_dong,
  title,
  status,
  category,
  description,
  images,
  price,
  applications,
  createdAt,
  onRouter,
}: Props) {
  return (
    <div
      onClick={() => onRouter(id)}
      className="flex cursor-pointer flex-col gap-2 rounded-[12px] border border-[#EEEEEE] p-4 shadow-2xs"
    >
      {/* 매칭상태, 카테고리 업로드시간 */}
      <ErrandCardHeader
        status={status}
        category={category}
        createdAt={createdAt}
      />

      {/* 제목,내용, 주소(동) */}
      <ErrandCardBody
        image={images && images[0]}
        description={description}
        address_dong={address_dong}
        title={title}
      />

      {/* 가격, 지원자 수 */}
      <ErrandCardBottom applications={applications} price={price} />
    </div>
  );
}
