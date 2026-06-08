import Image from "next/image";

interface Props{
    name:string;
    rating:string;
    profile:string;
    id:string;
    category:string;
}

export default function HelperCard({
    name,
    rating,
    profile,
    category
}:Props) {
  return (
    <div className="flex flex-col py-4 w-[140px]  items-center rounded-[16px] bg-[#F5F3F3] border border-[#E3E2E2]">
        {/* 여기는 나중에 프로필로 변경해야함 */}
        <div className="w-16 h-16 rounded-full bg-gray-950"/>
        <div className="flex flex-col items-center mt-3">
            <p className="text-[12px]">{name}</p>
            <div className="flex items-center gap-[2px]">
                <Image
                    src="/home/star.svg"
                    width={10}
                    height={9}
                    alt="star"
                />
                <p className="text-[#46455] text-[10px] font-bold">{rating}</p>
            </div>
        </div>
        <div className="rounded-full mt-2 px-3 py-1 bg-white text-[10px] text-[#170083] border border-[#170083]">
            {category}
        </div>
    </div>
  )
}
