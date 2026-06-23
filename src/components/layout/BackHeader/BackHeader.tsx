'use client'
import Image from 'next/image';
import { useBackShare } from './hooks/useBackShare';

export default function BackHeader() {
    const {handleBackBtn,handleCopy} =useBackShare();
  return (
    <header className="flex items-center justify-between py-4 px-4">
        <button onClick={handleBackBtn}>
            <Image
                src="/icon/back-arrow.svg"
                alt="back-arrow"
                width={11}
                height={20}
            />
        </button>
        <button onClick={handleCopy}>
            <Image
                src={"/header/share.svg"}
                alt="share"
                width={18}
                height={20}
            />
        </button>
    </header>
  )
}
