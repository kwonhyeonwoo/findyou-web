import Image from 'next/image';

interface Props {
  name: string;
  rating: string;
  profile: string;
  id: string;
  category: string;
}

export default function HelperCard({ name, rating, profile, category }: Props) {
  return (
    <div className="flex flex-col py-4 w-[140px] items-center rounded-[16px] bg-white border border-[#E8EEEB] shadow-sm">
      {/* 여기는 나중에 프로필로 변경해야함 */}
      <div className="w-16 h-16 rounded-full bg-gray-200" />
      <div className="flex flex-col items-center mt-3">
        <p className="text-[12px] font-medium text-[#1F2937]">{name}</p>
        <div className="flex items-center gap-[4px] text-[10px] text-[#525252]">
          <Image src="/home/star.svg" width={10} height={9} alt="star" />
          <p className="font-semibold">{rating}</p>
        </div>
      </div>
      <div className="rounded-full mt-2 px-3 py-1 bg-white text-[10px] text-teal-primary border border-teal-border">
        {category}
      </div>
    </div>
  );
}
