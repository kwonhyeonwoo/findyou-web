import FloatingActionBtn from '@/components/common/FloatingActionBtn/FloatingActionBtn';
import AddressHeader from '@/components/layout/AddressHeader/AddressHeader';
import BottomTab from '@/components/layout/BottomTab/BottomTab';
import MainAuthProvider from '@/components/MainAuthProvider/MainAuthProvider';
import React from 'react'

export default function layout({children}:{children:React.ReactNode}) {
  return (
        <MainAuthProvider>
            <div className="mx-auto relative flex min-h-screen w-full max-w-[480px] flex-col bg-white shadow-xl">
                <AddressHeader/>
                <main className="flex-1 px-5 box-border">
                    {children}
                </main>
            </div>
        </MainAuthProvider>
  )
}
