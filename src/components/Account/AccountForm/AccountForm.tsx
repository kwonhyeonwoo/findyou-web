"use client";
import { useState } from "react";
import AccountLabel from "../AccountLabel/AccountLabel";
import TypeCheckBox from "../TypeCheckBox/TypeCheckBox";
import AccountInput from "../AccountInput/AccountInput";
import Terms from "../Terms/Terms";

export default function AccountForm() {
  const [selectedType, setSelectedType] = useState<"helper" | "client">(
    "helper",
  );
  const handleChangeType = (type: "helper" | "client") => {
    setSelectedType(type);
  };
  const typeLists: { text: string; type: "helper" | "client" }[] = [
    {
      text: "헬퍼(도움제공)",
      type: "helper",
    },
    {
      text: "의뢰인(도움요청)",
      type: "client",
    },
  ];
  const basicInputs: {
    label: string;
    placeholder: string;
    type: string;
    activeText?: string;
    onActive?: () => void;
  }[] = [
    {
      label: "이메일",
      placeholder: "example@findyou.com",
      type: "email",
      activeText: "중복 확인",
      onActive: () => {
        console.log("이메일 입력");
      },
    },
    {
      label: "비밀번호",
      placeholder: "영문, 숫자, 특수문자 조합 8자 이상",
      type: "password",
    },
    {
      label: "비밀번호 확인",
      placeholder: "비밀번호 재입력",
      type: "password",
    },
    {
      label: "이름",
      placeholder: "실명 입력",
      type: "text",
    },
    {
      label: "휴대폰 번호",
      placeholder: "-없이 숫자만 입력",
      type: "text",
      activeText: "인증 받기",

      onActive: () => {
        console.log("휴대폰 번호 입력");
      },
    },
    {
      label: "인증번호",
      placeholder: "인증번호 입력",
      activeText: "인증하기",
      type: "text",
      onActive: () => {
        console.log("인증번호 입력");
      },
    },
  ];

  const addInputs: {
    label: string;
    placeholder: string;
    type: string;
    activeText?: string;
    onActive?: () => void;
  }[] = [
    {
      label: "닉네임",
      placeholder: "닉네임 입력",
      type: "text",
    },
    {
      label: "활동지역",
      placeholder: "동 단위 검색 (예: 역삼동)",
      type: "text",
      activeText: "주소검색",
      onActive: () => {
        console.log("활동지역 입력");
      },
    },
  ];
  return (
    <form className="mt-10">
      {/* 회원구분 */}
      <div className="flex flex-col gap-4">
        <AccountLabel label="회원구분" />
        <div className="flex items-center gap-6">
          {typeLists.map((item) => (
            <TypeCheckBox
              key={item.type}
              text={item.text}
              type={item.type}
              selectedType={selectedType}
              onSelectType={handleChangeType}
            />
          ))}
        </div>
      </div>

      {/* 기본정보 */}
      <div className="mt-[32px] flex flex-col gap-6">
        <p className="text-[18px] text-[#0B1C30]">기본정보</p>
        {basicInputs.map((item) => (
          <AccountInput key={item.label} {...item} onChange={() => {}} />
        ))}
      </div>

      {/* 추가 정보 */}
      <div className="mt-[32px] flex flex-col gap-6">
        <p className="text-[18px] text-[#0B1C30]">추가 정보</p>
        {addInputs.map((item) => (
          <AccountInput key={item.label} {...item} onChange={() => {}} />
        ))}
      </div>
      {/* 약관동의 */}
      <Terms />
    </form>
  );
}
