'use client';
import { BOTTOM_TAB } from '@/constants/bottom-tab.constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function BottomTab() {
  const pathname = usePathname();
  return (
    <div className="fixed right-0 bottom-0 left-0 z-50 mx-auto flex w-full max-w-[480px] items-center justify-between rounded-tl-lg rounded-tr-lg border-t border-t-[#EEEEEE] bg-white px-10 py-4">
      <div className="flex w-full items-center justify-between">
        {BOTTOM_TAB.map(({ icon, text, link }) => {
          const isActive = pathname === link;
          return (
            <Link
              href={link}
              key={link}
              className="flex flex-col items-center gap-1"
            >
              <img
                src={`/bottom-tab/${icon}${isActive ? '_active' : ''}.svg`}
                alt={icon}
                width={18}
                height={18}
                className="transition-all duration-300 ease-out"
              />
              <p
                className={`text-[14px] font-bold ${isActive ? 'text-teal-primary' : 'text-[#464554]'} `}
              >
                {text}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
