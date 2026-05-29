"use client";
import Image from "next/image";

export default function KaKaoSocial() {
  return (
    <button className="w-full flex items-center py-[13px] px-[10px] bg-[#FEE500] rounded-md">
      <Image src="/icon/kakao.svg" alt="kakao" width={18} height={18} />
      <p className="font-bold text-[15px] mx-auto">카카오 로그인</p>
    </button>
  );
}
