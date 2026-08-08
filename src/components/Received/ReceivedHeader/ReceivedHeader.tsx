import { formatRelativeTime } from '@/lib/lib';
import Image from 'next/image';

interface Props {
  profile?: string;
  nickName: string;
  rating: string;
  dateTime: Date;
}

function ReceivedHeader({ profile, nickName, rating, dateTime }: Props) {
  return (
    <div className="flex items-center gap-3">
      <div className="h-11 w-11 rounded-full">
        {profile ? (
          <Image
            src={`http://localhost:8000${profile}`}
            width={44}
            height={44}
            alt={profile}
            className="h-11 w-11 rounded-full"
          />
        ) : (
          <div className="h-11 w-11 rounded-full bg-gray-300" />
        )}
      </div>
      <div className="flex flex-col">
        <p className="text-[14px] font-semibold">{nickName}</p>
        <p className="flex gap-1 text-[11px] text-[#8B95A1]">
          <span className="flex items-center gap-[2px]">
            <Image src={'/common/star.svg'} alt="star" width={10} height={10} />
            {rating}
          </span>
          <span>{formatRelativeTime(String(dateTime))}</span>
        </p>
      </div>
    </div>
  );
}

export default ReceivedHeader;
