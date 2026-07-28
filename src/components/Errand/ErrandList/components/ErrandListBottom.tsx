import { formatPriceNumber, parsePrice } from '@/lib/lib';
import Image from 'next/image';

interface Props {
  price: string;
  address_dong: string;
  applicationsCount: number;
}

function ErrandListBottom({ price, applicationsCount, address_dong }: Props) {
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
        <div className="flex items-center gap-1">
          <Image src={`/errand/users.svg`} alt="user" width={15} height={10} />
          <p className="text-[12px] text-[#464554]">
            {String(applicationsCount)}
          </p>
        </div>
      </div>
      <p className="text-[18px] font-bold">
        {formatPriceNumber(Number(price))}
      </p>
    </div>
  );
}

export default ErrandListBottom;
