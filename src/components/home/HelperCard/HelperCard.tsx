import { CATEGORIES_ENUM } from '@/interfaces/category.enum';
import { fillterCategory } from '@/lib/lib';
import Image from 'next/image';

interface Props {
  nickName: string;
  rating?: number;
  profile?: string;
  id: string;
  category: CATEGORIES_ENUM;
  casesCount?: number;
  handleHelperProfile: () => void;
}

export default function HelperCard({
  nickName,
  rating,
  profile,
  category,
  casesCount,
  handleHelperProfile,
}: Props) {
  return (
    <div
      className="flex w-[140px] cursor-pointer flex-col items-center rounded-[16px] border border-[#E8EEEB] bg-white py-4 shadow-sm"
      onClick={handleHelperProfile}
    >
      {/* 여기는 나중에 프로필로 변경해야함 */}
      {profile ? (
        <div className="h-16 w-16 rounded-full">
          <Image
            src={`host:8000${profile}`}
            alt={nickName}
            className="h-16 w-16 rounded-full"
          />
        </div>
      ) : (
        <div className="h-16 w-16 rounded-full bg-gray-200" />
      )}
      <div className="mt-3 flex flex-col items-center">
        <p className="text-[12px] font-medium text-[#1F2937]">{nickName}</p>
        <div className="flex items-center text-[10px] text-[#525252]">
          <Image src="/home/star.svg" width={10} height={9} alt="star" />
          <p className="flex items-center gap-1 font-semibold">
            <span>{rating && rating > 0 ? rating : 0}</span>
            <span>수행{casesCount}건</span>
          </p>
        </div>
      </div>
      <div className="text-teal-primary border-teal-border mt-2 rounded-full border bg-white px-3 py-1 text-[10px]">
        {fillterCategory(category)}
      </div>
    </div>
  );
}
