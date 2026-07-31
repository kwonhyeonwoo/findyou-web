import { ErrandResponse, ErrandStatus } from '@/interfaces/errand.interface';
import { formatPriceNumber, formatRelativeTime } from '@/lib/lib';

export default function LiveErrandCard({
  status,
  title,
  price,
  address_dong,
  createdAt,
}: ErrandResponse) {
  const bottomArr = [
    {
      text: address_dong,
      img: 'address',
    },
    {
      text: formatRelativeTime(String(createdAt)),
      img: 'time',
    },
  ];
  return (
    <div className="flex w-full cursor-pointer flex-col justify-center gap-2 rounded-[12px] border border-[#EEEEEE] px-4 py-4">
      <div className="flex items-center justify-between">
        <div className="bg-teal-light text-teal-primary rounded-[8px] px-2 py-[2px] text-[10px]">
          {status === ErrandStatus.MATCHING
            ? '모집중'
            : status === ErrandStatus.IN_PROGRESS
              ? '진행중'
              : '완료'}
        </div>
        <p className="text-[18px] font-bold">
          {formatPriceNumber(Number(price))}
        </p>
      </div>
      <p>{title}</p>
      <div className="flex items-center gap-3">
        {bottomArr.map(({ text, img }, idx) => (
          <div className="flex items-center gap-1" key={idx}>
            <img src={`/home/${img}.svg`} alt={img} />
            <p className="text-[12px]">{String(text)}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
