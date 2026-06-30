import { fillterCategory } from "@/lib/lib";
import { ErrandCategory } from "@/schema/errand.schema";
import Image from "next/image";

interface Props {
  price: string;
  category: ErrandCategory;
  address_dong: string;
}

function ErrandListBottom({ price, category, address_dong }: Props) {
  return (
    <div className="flex items-center justify-between py-4">
      <div className="flex items-center gap-1">
        <div className="flex items-center gap-1">
          <Image
            src="/common/address.svg"
            alt="category"
            width={12}
            height={15}
          />
          <p className="text-[12px] text-[#464554]">{address_dong}</p>
        </div>
        <p className="text-[12px] text-[#464554]">
          {fillterCategory(category)}
        </p>
      </div>
      <p className="text-[18px] font-bold">{price}</p>
    </div>
  );
}

export default ErrandListBottom;
