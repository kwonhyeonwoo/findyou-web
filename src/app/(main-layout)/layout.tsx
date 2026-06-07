import MainAuthProvider from "@/components/MainAuthProvider/MainAuthProvider";
import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MainAuthProvider>
      <main className="mx-auto flex min-h-screen w-full max-w-[420px] flex-col bg-white shadow-xl">
        {children}
      </main>
    </MainAuthProvider>
  );
}
