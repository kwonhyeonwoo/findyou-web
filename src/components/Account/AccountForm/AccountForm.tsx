import AccountInput from "../AccountInput/AccountInput";
import Terms from "../Terms/Terms";
import { FormProvider } from "react-hook-form";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import { useAccountForm } from "./hooks/useAccountForms";
import SearchAddress from "@/components/common/SearchAddress/SearchAddress";
import { useSearchAddress } from "@/hooks/useSearchAddress";

export default function AccountForm() {
  const {
    methods,
    basicInputs,
    addInputs,
    isPending,
    isValid,
    errors,
    isOpen,
    setIsOpen,
    onSubmit,
    register,
  } = useAccountForm();
  const { handleComplete, handleLocation } = useSearchAddress({
    setValue: methods.setValue,
    setIsOpen: setIsOpen,
  });
  return (
    <FormProvider {...methods}>
      <form className="mt-10" onSubmit={methods.handleSubmit(onSubmit)}>
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
      <SearchAddress
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleLocation={handleLocation}
        handleComplete={handleComplete}
      />
    </FormProvider>
  );
}
