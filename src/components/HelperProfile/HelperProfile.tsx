import Image from 'next/image';

interface Props {
  profile?: string;
  nickName: string;
  rating: string;
  reviewCount: number;
  completedCount: number;
}

function HelperProfile({
  profile,
  nickName,
  rating,
  reviewCount,
  completedCount,
}: Props) {
  return (
    <div className="flex gap-[14px]">
      {profile ? (
        <div className="h-16 w-16 rounded-full">
          <Image
            src={`http://localhost:8000/${profile}`}
            alt={nickName}
            width={64}
            height={64}
            className="h-16 w-16 rounded-full object-cover"
          />
        </div>
      ) : (
        <div className="h-16 w-16 rounded-full bg-gray-400" />
      )}

      <div className="flex flex-col gap-1">
        <p className="text-[18px] font-bold">
          {nickName}
          <span className="font-regular ml-1 text-[13px] text-[#8B95A1]">
            헬퍼
          </span>
        </p>
        <div className="flex items-center">
          <div className="flex items-center gap-1 text-[13px]">
            <Image src="/common/star.svg" alt="start" width={19} height={14} />
            <p className="text-[#4E5968]">{rating}</p>
            <p>({String(reviewCount)})</p>
          </div>
          <p className="text-[14px] text-[#E0E0E0]">•</p>
          <p className="text-[14px] text-[#4E5968]">
            수행 <span className="font-bold">{String(completedCount)}</span>회
          </p>
        </div>
      </div>
    </div>
  );
}

export default HelperProfile;
