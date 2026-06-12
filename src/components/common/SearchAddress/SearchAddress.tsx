import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Image from "next/image";
import React from "react";
import { Address, DaumPostcodeEmbed } from "react-daum-postcode";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  handleLocation: () => void;
  handleComplete: (data: Address) => void;
}

export default function SearchAddress({
  isOpen,
  setIsOpen,
  handleLocation,
  handleComplete,
}: Props) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      {/* 모달을 열어줄 버튼 트리거 */}

      {/* 모달 본문 (max-w 설정을 통해 주소창 크기에 맞게 조절) */}
      <DialogContent className="max-w-[600px] p-6">
        <DialogHeader>
          <DialogTitle>주소 검색</DialogTitle>
        </DialogHeader>
        <button
          onClick={handleLocation}
          className="flex w-full items-center gap-2 rounded-[12px] bg-[#2A14B4] p-3 text-white"
        >
          <Image src="/address/gps.svg" width={22} height={22} alt="gps" />
          <p>현재위치 설정</p>
        </button>
        <div className="mt-2 h-[500px] w-full overflow-hidden rounded-md border">
          {/* 다음 주소 검색 임베드 컴포넌트 */}
          <DaumPostcodeEmbed
            onComplete={handleComplete}
            style={{ height: "100%" }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
