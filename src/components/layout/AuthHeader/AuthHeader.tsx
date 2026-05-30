"use client";
import Image from "next/image";
import { useBack } from "./hooks/useNavigation";

export default function AuthHeader() {
  const { handleBack, handleHome } = useBack();
  return (
    <header className="px-4 py-5 flex box-sing justify-between items-center box-border w-full">
      <Image
        src="/icon/back-arrow.svg"
        alt="back-arrow"
        width={11}
        height={20}
        onClick={handleBack}
      />
      <Image
        src="/icon/home-icon.svg"
        alt="home-icon"
        width={16}
        height={18}
        onClick={handleHome}
      />
    </header>
  );
}
