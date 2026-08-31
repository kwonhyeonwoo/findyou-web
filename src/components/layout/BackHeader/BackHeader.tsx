'use client';
import Image from 'next/image';
import { useBackShare } from './hooks/useBackShare';

export default function BackHeader() {
  const { WHITE_STYLE, handleBackBtn, handleCopy } = useBackShare();
  return (
    <header
      className={`flex items-center justify-between px-4 py-4 ${WHITE_STYLE ? 'bg-[#F7F8FA]' : 'bg-white'}`}
    >
      <button onClick={handleBackBtn}>
        <Image
          src="/icon/back-arrow.svg"
          alt="back-arrow"
          width={11}
          height={20}
        />
      </button>
      <button onClick={handleCopy}>
        <Image src={'/header/share.svg'} alt="share" width={18} height={20} />
      </button>
    </header>
  );
}
