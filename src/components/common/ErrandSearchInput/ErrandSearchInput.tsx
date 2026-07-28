import Image from 'next/image';
import React from 'react';

interface Props {
  handleKeydown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}
export default function ErrandSearchInput({ handleKeydown }: Props) {
  return (
    <div className="relative flex rounded-[8px] border border-[#E3E2E2]">
      <Image
        className="absolute top-1/2 left-3 -translate-y-1/2"
        src="/common/glass.svg"
        width={18}
        height={18}
        alt="glass"
      />
      <input
        className="w-full rounded-[12px] bg-white px-9 py-3"
        type="text"
        name="keyword"
        placeholder="제목으로 검색"
        onKeyDown={handleKeydown}
      />
    </div>
  );
}
