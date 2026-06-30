import Image from "next/image";

interface Props {
  title: string;
  description: string;
  image?: string;
}

function ErrandListBody({ title, description, image }: Props) {
  return (
    <div className="flex h-[132px] w-full items-start justify-between gap-4 border-b border-[#EEEEEE] pt-2 pb-2">
      <div className="flex flex-1 flex-col gap-2">
        <p className="text-[16px] font-bold text-[#1B1C1C]">{title}</p>
        <p className="line-clamp-2 text-[14px] leading-normal text-[#464554]">
          {description}
        </p>
      </div>

      {image && (
        <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-md">
          <Image
            src={`http://localhost:8000${image}`}
            alt="심부름 썸네일"
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  );
}

export default ErrandListBody;
