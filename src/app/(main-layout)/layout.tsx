import FloatingActionBtn from "@/components/common/FloatingActionBtn/FloatingActionBtn";
import BottomTab from "@/components/layout/BottomTab/BottomTab";
import MainHeader from "@/components/layout/MainHeader/MainHeader";
import MainAuthProvider from "@/components/MainAuthProvider/MainAuthProvider";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainAuthProvider>
      <div className="mx-auto relative flex min-h-screen w-full max-w-[480px] flex-col bg-white shadow-xl">
        <MainHeader />
        <main className="flex-1 pb-20">
          {children}
          <BottomTab/>
        </main>
        <FloatingActionBtn/>
      </div>
    </MainAuthProvider>
  );
}
