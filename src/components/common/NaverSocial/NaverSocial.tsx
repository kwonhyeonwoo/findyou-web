import Image from "next/image";
import React from "react";

export default function NaverSocial() {
  return (
    <button className="w-full flex items-center py-[13px] px-[10px] bg-[#03C75A] text-white rounded-md">
      <Image src="/icon/naver.svg" alt="naver" width={18} height={18} />
      <p className="font-bold text-[15px] mx-auto">네이버 로그인</p>
    </button>
  );
}
