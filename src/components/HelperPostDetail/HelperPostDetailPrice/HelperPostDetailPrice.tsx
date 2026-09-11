import { formatPriceNumber } from '@/lib/lib';

interface Props {
  price: number;
}

export default function HelperPostDetailPrice({ price }: Props) {
  return (
    <div className="flex items-center justify-between">
      <p className="text-[15px]">희망금액</p>
      <p className="text-[18px] font-bold">{formatPriceNumber(price)}</p>
    </div>
  );
}
