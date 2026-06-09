import Image from 'next/image';
import Link from 'next/link';

export default function FloatingActionBtn() {
  return (
    <Link href={"/errand/write"} className="fixed bottom-24 left-1/2 z-40 flex h-14 w-14 translate-x-[160px] items-center justify-center rounded-full bg-[#170083] shadow-lg">
        <Image
            src='/icon/plus.svg'
            alt="plus"
            width={14}
            height={14}
        />
    </Link>
  )
}
