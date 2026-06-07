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
      <div className="mx-auto flex min-h-screen w-full max-w-[420px] flex-col bg-white shadow-xl">
        <MainHeader />
        <main>{children}</main>
      </div>
    </MainAuthProvider>
  );
}
