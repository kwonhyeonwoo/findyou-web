import React from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="w-full max-w-[420px] min-h-screen mx-auto bg-white shadow-xl flex flex-col">
      {children}
    </main>
  );
}
