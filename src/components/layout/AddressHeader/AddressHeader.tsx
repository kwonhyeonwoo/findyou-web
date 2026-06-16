'use client'
import { useUserQuery } from '@/hooks/quires/user/useUserQuery';
import { useUser } from '@/store/useUserStore';
import Image from 'next/image';
import RoleToggle from '../MainHeader/components/RoleToggle/RoleToggle';

export default function AddressHeader() {
    const user = useUser()
    const { data } = useUserQuery(user?.userId);
    if(!data) return ;
  return (
    <header className="flex items-center justify-between px-3 py-[6px] box-border">
        <button className="flex item-center gap-1 ">
            <span className="text-[20px] font-bold">{data?.address}</span>
            <Image
                src="/common/down-arrow.svg"
                alt='down-arrow'
                width={10}
                height={6}
            />
        </button>
        <RoleToggle type={data?.type} onToggleBtn={()=>{}}/>
    </header>
  )
}
