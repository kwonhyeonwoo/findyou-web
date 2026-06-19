import Image from "next/image";
import React from "react";

interface Props {
  handleKeydown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
export default function ErrandInput({ handleKeydown }: Props) {
  return (
    <div className="relative flex">
      <Image
        className="absolute top-1/2 left-3 -translate-y-1/2"
        src="/common/glass.svg"
        width={18}
        height={18}
        alt="glass"
      />
      <input
        className="w-full rounded-[12px] bg-[#F5F3F3] px-9 py-3"
        type="text"
        name="keyword"
        placeholder="어떤 도움이 필요하신가요?"
        onKeyDown={handleKeydown}
      />
    </div>
  );
}
