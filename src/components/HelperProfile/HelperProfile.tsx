import Image from "next/image";

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
    <div className="flex flex-col items-center gap-4">
      {profile ? (
        <div className="h-30 w-30 rounded-full">
          <Image
            src={`http://localhost:8000/${profile}`}
            alt={nickName}
            width={120}
            height={120}
            className="h-30 w-30 rounded-full object-cover"
          />
        </div>
      ) : (
        <div className="h-30 w-30 rounded-full bg-gray-400" />
      )}
      <div className="flex flex-col items-center gap-2">
        <p className="text-[24px]">{nickName} 헬퍼</p>
        <div className="flex items-center">
          <div className="flex items-center gap-1 text-[14px]">
            <Image src="/common/star.svg" alt="start" width={19} height={14} />
            <p className="font-bold">{rating}</p>
            <p>({String(reviewCount)}건)</p>
          </div>
          <p className="text-[14px] text-[#C7C4D7]">•</p>
          <p className="text-[14px] text-[#464554]">
            수행건수 {String(completedCount)}건
          </p>
        </div>
      </div>
    </div>
  );
}

export default HelperProfile;
