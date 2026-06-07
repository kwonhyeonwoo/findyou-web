"use client";
import { useUserStore } from "@/store/useUserStore";
import Image from "next/image";
import React from "react";
import RoleToggle from "./components/RoleToggle/RoleToggle";

export default function MainHeader() {
  const user = useUserStore((state) => state.user);
  return (
    <header className="flex items-center justify-between px-5 py-3">
      <div className="relative h-[50px] w-[170px]">
        <Image
          src="/header/header-logo.png"
          alt="header-icon"
          className="object-contain"
          width={170}
          height={49}
          priority
        />
      </div>

      <div>
        <RoleToggle type={user.type} onToggleBtn={() => {}} />
      </div>
    </header>
  );
}
