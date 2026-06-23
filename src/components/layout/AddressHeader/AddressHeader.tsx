"use client";
import { useUserQuery } from "@/hooks/quires/user/useUserQuery";
import { useUser } from "@/store/useUserStore";
import Image from "next/image";

export default function AddressHeader() {
  const user = useUser();
  const { data } = useUserQuery(user?.userId);
  if (!data) return;
  return (
    <header className="box-border flex items-center justify-between px-3 py-[6px]">
      <button className="item-center flex gap-1">
        <span className="text-[20px] font-bold">{data?.address}</span>
        <Image
          src="/common/down-arrow.svg"
          alt="down-arrow"
          width={10}
          height={6}
        />
      </button>
    </header>
  );
}
