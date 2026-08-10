import { formatRelativeTime } from '@/lib/lib';
import Image from 'next/image';

interface Props {
  profile?: string;
  nickName: string;
  rating: string;
  dateTime: Date;
}
export default function ReceivedDetailProfile({
  profile,
  nickName,
  rating,
  dateTime,
}: Props) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-12 w-12 rounded-full">
        {profile ? (
          <Image
            src={`${process.env.NEXT_PUBLIC_API_URL}${profile}`}
            alt={`${nickName}-profile`}
            width={48}
            height={48}
            className="h-12 w-12 rounded-full"
          />
        ) : (
          <div className="h-12 w-12 rounded-full bg-gray-200" />
        )}
      </div>
      <div className="flex flex-col">
        <p className="text-[14px] font-bold">{nickName}</p>
        <div className="flex items-center gap-1 text-[12px] text-[#4E5968]">
          <p className="flex items-center gap-1">
            <Image
              src="/common/star.svg"
              width={10}
              height={10}
              alt="star"
              className="h-[10px] w-[10px]"
            />
            <span>{rating}</span>
          </p>
          <p>{formatRelativeTime(String(dateTime))} 신청</p>
        </div>
      </div>
    </div>
  );
}
