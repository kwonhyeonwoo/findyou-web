"use client";
import { useState } from "react";
import AccountLabel from "../AccountLabel/AccountLabel";
import TypeCheckBox from "../TypeCheckBox/TypeCheckBox";
import AccountInput from "../AccountInput/AccountInput";
import Terms from "../Terms/Terms";
import { FormProvider} from "react-hook-form";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import { useAccountForm } from "./hooks/useAccountForms";

export default function AccountForm() {
  const {methods, basicInputs,addInputs} = useAccountForm();
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
  

  
  return (
    <FormProvider {...methods}>
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
        <SubmitButton text="회원가입"/>
      </form>
    </FormProvider>
  );
}
