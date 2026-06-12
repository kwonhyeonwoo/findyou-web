import AccountLabel from "../AccountLabel/AccountLabel";
import TypeCheckBox from "../TypeCheckBox/TypeCheckBox";
import AccountInput from "../AccountInput/AccountInput";
import Terms from "../Terms/Terms";
import { FormProvider } from "react-hook-form";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import { useAccountForm } from "./hooks/useAccountForms";
import { CHECK_TYPE_LIST } from "@/constants/auth-constants";
import SearchAddress from "@/components/common/SearchAddress/SearchAddress";
import { useSearchAddress } from "@/hooks/useSearchAddress";

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
    setIsOpen,
    onSubmit,
    register,
    handleChangeType,
  } = useAccountForm();
  const { handleComplete, handleLocation } = useSearchAddress({
    setValue: methods.setValue,
    setIsOpen: setIsOpen,
  });
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
      <SearchAddress
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        handleLocation={handleLocation}
        handleComplete={handleComplete}
      />
    </FormProvider>
  );
}
