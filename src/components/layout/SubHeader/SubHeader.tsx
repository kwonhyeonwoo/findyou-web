'use client'
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface Props{
    title?:string;
}

export default function SubHeader({title}:Props) {
    const router= useRouter();
  return (
    <header className="flex items-center px-5 py-3  w-full">
        <button onClick={()=>router.back()}>
            <Image 
                src={'/icon/back-arrow.svg'}
                width={11}
                height={20}
                alt='back-arrow'
            />
        </button>
        <h2 className="absolute left-1/2 -translate-x-1/2 text-[18px] font-bold text-[#111111]">{title}12345</h2>
    </header>
  )
}
