import { ReviewResponse } from '@/interfaces/review.interface';
import Image from 'next/image';

interface Props {
  profile?: string;
  id: string;
  nickName: string;
  rating: number;
  reviewCount: number;
  handleProfileActive: (clientId: string) => void;
}

function ClientProfileCard({
  profile,
  id,
  nickName,
  rating,
  reviewCount,
  handleProfileActive,
}: Props) {
  return (
    <div className="border-baisc-border flex items-center justify-between rounded-[8px] border p-3">
      {/*좌측 */}
      <div className="flex items-center gap-3">
        {/* 프로필사진 */}
        <div className="h-[50px] w-[50px] rounded-full">
          {profile ? (
            <Image
              src={`${process.env.NEXT_PUBLIC_API_URL}${profile}`}
              alt={nickName}
              width={50}
              height={50}
              className="h-[50px] w-[50px] rounded-full"
            />
          ) : (
            <div className="h-full w-full rounded-full bg-gray-500" />
          )}
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">{nickName}</p>
          <p className="text-[13px] text-[#8B95A1]">
            {rating} / ({reviewCount})회
          </p>
        </div>
      </div>

      <button
        onClick={() => handleProfileActive(id)}
        className="rounded-[8px] bg-black px-4 py-2 text-[13px] font-bold text-white"
      >
        프로필
      </button>
    </div>
  );
}

export default ClientProfileCard;
