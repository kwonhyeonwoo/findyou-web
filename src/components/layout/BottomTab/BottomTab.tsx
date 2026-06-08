'use client'
import { BOTTOM_TAB } from '@/constants/bottom-tab.constants';
import Link from 'next/link';
import React from 'react'
import { usePathname } from 'next/navigation';

export default function BottomTab() {
    const pathname = usePathname();
  return (
    <div className="fixed bottom-0  bg-white rounded-tl-lg rounded-tr-lg border-t border-t-[#EEEEEE] left-0 right-0 mx-auto py-4 px-10 flex justify-between items-center w-full max-w-[480px] z-50">
        <div className="flex items-center justify-between w-full">
            {BOTTOM_TAB.map(({icon,text,link})=>{
                const isActive = pathname === link;
                return(
                    <Link href={link} key={link} className="flex flex-col items-center gap-1">
                        <img src={`/bottom-tab/${icon}${isActive ? "_active":""}.svg`} alt={icon} />
                        <p className={`text-[14px] font-bold text-[${isActive ? "#2A14B4":"#464554"}]`}>{text}</p>
                    </Link>
                )
            })}
        </div>
    </div> 
  )
}
 