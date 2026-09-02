import FloatingActionBtn from '@/components/common/FloatingActionBtn/FloatingActionBtn';
import BottomTab from '@/components/layout/BottomTab/BottomTab';
import MainHeader from '@/components/layout/MainHeader/MainHeader';
import React from 'react';

export default function TabWithBottomLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      <MainHeader />
      {children}
      <BottomTab />
      <FloatingActionBtn />
    </div>
  );
}
