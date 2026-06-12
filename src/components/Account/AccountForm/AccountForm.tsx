import AccountLabel from "../AccountLabel/AccountLabel";
import TypeCheckBox from "../TypeCheckBox/TypeCheckBox";
import AccountInput from "../AccountInput/AccountInput";
import Terms from "../Terms/Terms";
import { FormProvider } from "react-hook-form";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import { useAccountForm } from "./hooks/useAccountForms";
import { CHECK_TYPE_LIST } from "@/constants/auth-constants";
import { DaumPostcodeEmbed } from "react-daum-postcode";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function AccountForm() {
  const {
    methods,
    basicInputs,
    addInputs,
    type,
    isPending,
    isValid,
    errors,
    isOpen,
    handleLocation,
    setIsOpen,
    handleComplete,
    onSubmit,
    register,
    handleChangeType,
  } = useAccountForm();
  return (
    <FormProvider {...methods}>
      <form className="mt-10" onSubmit={methods.handleSubmit(onSubmit)}>
        {/* 회원구분 */}
        <div className="flex flex-col gap-4">
          <AccountLabel label="회원구분" />
          <div className="flex items-center gap-6">
            {CHECK_TYPE_LIST.map((item) => (
              <TypeCheckBox
                key={item.type}
                text={item.text}
                type={item.type}
                currentType={type}
                handleChangeType={handleChangeType}
              />
            ))}
          </div>
        </div>

        {/* 기본정보 */}
        <div className="mt-[32px] flex flex-col gap-6">
          <p className="text-[18px] text-[#0B1C30]">기본정보</p>
          {basicInputs.map((item) => (
            <AccountInput
              register={register}
              error={errors[item.name]}
              key={item.label}
              {...item}
            />
          ))}
        </div>

        {/* 추가 정보 */}
        <div className="mt-[32px] flex flex-col gap-6">
          <p className="text-[18px] text-[#0B1C30]">추가 정보</p>
          {addInputs.map((item) => (
            <AccountInput register={register} key={item.label} {...item} />
          ))}
        </div>
        {/* 약관동의 */}
        <Terms />
        <SubmitButton
          text="회원가입"
          isDisabled={!isValid}
          isPending={isPending}
        />
      </form>
      {/* <DaumPostcodeEmbed onComplete={(data) => console.log("addreses", data)} /> */}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        {/* 모달을 열어줄 버튼 트리거 */}
        <DialogTrigger asChild>
          <Button variant="outline">주소 검색</Button>
        </DialogTrigger>

        {/* 모달 본문 (max-w 설정을 통해 주소창 크기에 맞게 조절) */}
        <DialogContent className="max-w-[500px] p-6">
          <DialogHeader>
            <DialogTitle>주소 검색</DialogTitle>
          </DialogHeader>
          <button onClick={handleLocation}>
              현재위치 설정
          </button>
          <div className="w-full h-[450px] overflow-hidden rounded-md border mt-2">
            {/* 다음 주소 검색 임베드 컴포넌트 */}
            
            <DaumPostcodeEmbed 
              onComplete={handleComplete} 
              style={{ height: "100%" }}
            />
          </div>
        </DialogContent>
      </Dialog>
    </FormProvider>
  );
}
