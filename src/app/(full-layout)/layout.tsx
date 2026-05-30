import AuthHeader from "@/components/layout/AuthHeader/AuthHeader";
import React from "react";

export default function FullLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full justify-center bg-white">
      <div className="flex min-h-screen w-full max-w-[480px] flex-col bg-white">
        <AuthHeader />
        <main>{children}</main>
      </div>
    </div>
  );
}
