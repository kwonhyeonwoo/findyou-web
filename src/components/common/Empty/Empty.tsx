import Image from 'next/image';

interface Props {
  title: string;
  description?: string;
}

export default function Empty({ title, description }: Props) {
  return (
    <div className="flex w-full flex-col items-center gap-1 rounded-[8px] bg-[#F9FAFB] p-5">
      <Image src="/empty/findy-empty.svg" alt="empty" width={60} height={60} />
      <p className="text-[14px] font-bold text-[#1A1A1A]">{title}</p>
      <p className="text-[12px] text-[#6B7280]">{description}</p>
    </div>
  );
}
