import Image from 'next/image';

interface Props {
  profile?: string;
  nickName: string;
  rating: number;
  completeCount: number;
}
export default function HelperPostDetailProfile({
  profile,
  nickName,
  rating,
  completeCount,
}: Props) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex h-[60px] w-[60px] items-center justify-center overflow-hidden rounded-full bg-gray-400">
        <Image
          src={profile ? `http://localhost:8000${profile}` : '/icon/user.svg'}
          width={50}
          height={50}
          alt={`${nickName}-profile`}
          className="h-[50px] w-[50px] rounded-full object-cover"
        />
      </div>
      <div className="flex flex-col">
        <div className="flex items-center gap-1">
          <p className="text-[14px] font-bold">{nickName}</p>
          <div className="flex items-center gap-1">
            <Image
              src={'/common/star.svg'}
              width={15}
              height={15}
              alt="star"
              className="h-[15px] w-[15px]"
            />
            <p className="text-[14px]">{rating}</p>
          </div>
        </div>
        <p className="text-[13px] text-gray-500">완료 {completeCount}건</p>
      </div>
    </div>
  );
}
