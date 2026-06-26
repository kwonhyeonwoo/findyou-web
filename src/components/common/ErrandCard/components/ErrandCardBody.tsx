import Image from "next/image";

interface Props {
  image?: string;
  description: string;
  address_dong: string;
  title: string;
}

function ErrandCardBody({ image, description, title, address_dong }: Props) {
  return (
    <div className="flex items-center gap-3 pb-4">
      {image && (
        <div className="h-16 w-16 rounded-[8px] border">
          <Image
            src={`http://localhost:8000${image}`}
            alt="errand"
            width={64}
            height={64}
            className="h-full w-full object-cover"
          />
        </div>
      )}
      <div className="flex flex-col">
        <p className="text-[18px] text-[#1B1C1C]">{title}</p>
        <p className="w-[210px] truncate text-[12px] leading-normal font-medium text-[#464554]">
          {description}
        </p>
        <div className="flex items-center gap-1">
          <Image src="/common/address.svg" alt="gps" width={12} height={15} />
          <p className="text-[12px] text-[#464554]">{address_dong}</p>
        </div>
      </div>
    </div>
  );
}

export default ErrandCardBody;
