import { formatDateTime } from '@/lib/lib';
import Image from 'next/image';

interface Props {
  startTime: Date;
  start: string;
  arrive: string; // 도착지
  description: string;
}

function ErrandStatusInfo({ startTime, start, arrive, description }: Props) {
  const STATUS_INGO = [
    {
      text: '요청시간',
      value: formatDateTime(startTime),
      img: 'time',
    },
    {
      text: '출발지',
      value: start,
      img: 'start',
    },
    {
      text: '도착지',
      value: arrive,
      img: 'arrive',
    },
    {
      text: '요청내용',
      value: description,
      img: 'docs',
    },
  ];
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-[18px]">상세정보</h2>
      <div className="flex flex-col gap-4 rounded-[12px] border border-[#E3E2E2] bg-[#F5F3F3] p-4">
        {STATUS_INGO.map(({ text, value, img }, idx) => (
          <div key={idx} className="flex items-start gap-3">
            <Image
              src={`/errand-status/${img}.svg`}
              width={20}
              height={20}
              alt={img}
              className="h-[20px]object-cover w-[20px]"
            />
            <div className="flex flex-col">
              <p className="text-[12px] text-[#464554]">{text}</p>
              <p className="text-[14px] leading-[1.5] break-keep whitespace-pre-wrap">
                {value}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ErrandStatusInfo;
