"use client";
import Image from "next/image";
import { useHomeSearchHook } from "./hook/useHomeSearchHook";

export default function HomeSearch() {
  const { register, onSubmit, handleSubmit } = useHomeSearchHook();
  return (
    <form className="relative" onSubmit={handleSubmit(onSubmit)}>
      <Image
        src="/home/glass.svg"
        alt="glass"
        width={18}
        height={18}
        className="absolute top-1/2 left-4 -translate-y-1/2"
      />
      <input
        {...register("keyword")}
        type="text"
        placeholder="어떤 도움이 필요하신가요?"
        className="box-border w-full rounded-[12px] border-none bg-[#F5F3F3] px-10 py-3"
      />
    </form>
  );
}
