import { formatDateTime, formatRelativeTime } from '@/lib/lib';
import Image from 'next/image';

interface Props {
  title: string;
  price: string;
  startAddress: string;
  finishAddress: string;
  dateTime: Date;
}

function CompletedErrandCard({
  title,
  price,
  startAddress,
  finishAddress,
  dateTime,
}: Props) {
  return (
    <div className="border-basic-border flex flex-col gap-2 border-b pb-4">
      <div className="flex items-center justify-between">
        <p className="font-bold text-[#1A1A1A]">{title}</p>
        <p className="text-[14px] font-bold text-[#1A1A1A]">{price}</p>
      </div>
      <div className="flex items-center">
        <div className="flex items-center">
          <p className="flex items-center gap-1 text-[12px] text-[#8B95A1]">
            <Image
              src={'/common/address.svg'}
              alt="address"
              width={10}
              height={10}
            />
            {startAddress} - {finishAddress}
          </p>
        </div>
        <p className="text-[12px] text-[#8B95A1]">2022.02.11</p>
      </div>
    </div>
  );
}

export default CompletedErrandCard;
