import { ErrandStatus } from "@/interfaces/errand.interface";
import {
  fillterCategory,
  formatRelativeTime,
  STATUS_FILLTER,
  STATUS_STYLES,
} from "@/lib/lib";
import { ErrandCategory } from "@/schema/errand.schema";
import Image from "next/image";

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
  createdAt,
  onRouter,
}: Props) {
  const cateAddress: { text: string; category?: ErrandCategory }[] = [
    {
      text: address_dong,
    },
    {
      text: fillterCategory(category),
      category,
    },
  ];
  const currentStyle = STATUS_STYLES[status] || STATUS_STYLES.matching;
  return (
    <div
      onClick={() => onRouter(id)}
      className="flex cursor-pointer flex-col gap-2 rounded-[12px] border border-[#EEEEEE] px-4 py-3 shadow-2xs"
    >
      {/* 매칭상태, 업로드시간 */}
      <div className="flex items-center justify-between">
        <div
          className={`rounded-full px-3 py-1 text-[12px] ${currentStyle.bg} ${currentStyle.text}`}
        >
          {STATUS_FILLTER[status]}
        </div>
        <div className="flex items-center gap-1">
          <Image src="/common/time.svg" alt="time" width={13} height={13} />
          <p className="text-[12px] text-[#464554]">
            {formatRelativeTime(String(createdAt))}
          </p>
        </div>
      </div>

      {/* 제목,내용 */}
      <div className="flex items-center gap-3">
        {images && images.length > 0 && (
          <div className="h-16 w-16 rounded-[8px] border">
            <Image
              src={`http://localhost:8000${images[0]}`}
              alt="errand"
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          </div>
        )}
        <div className="flex flex-col gap-2 border-b border-b-[#EEEEEE] pb-4">
          <p className="text-[18px] text-[#1B1C1C]">{title}</p>
          <p className="w-[210px] truncate text-[14px] leading-normal font-medium text-[#464554]">
            {description}
          </p>
        </div>
      </div>

      {/* 동, 카테고리, 가격 */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {cateAddress.map(({ text, category }, idx) => (
            <div className="flex items-center gap-1" key={idx}>
              {!category && (
                <Image
                  src="/common/address.svg"
                  alt="gps"
                  width={12}
                  height={15}
                />
              )}
              <p className="text-[12px] text-[#464554]">{text}</p>
            </div>
          ))}
        </div>
        <p className="text-[18px] font-semibold text-[#170083]">{price}</p>
      </div>
    </div>
  );
}
