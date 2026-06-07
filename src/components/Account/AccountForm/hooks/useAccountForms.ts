'use client'

import { getAddInputs, getBasicInputs } from "@/constants/auth-constants";
import { useSignupMutation } from "@/hooks/quires/auth/useSignupMutaion";
import { registerSchema, ReigsterType } from "@/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const useAccountForm = () => {
  const methods = useForm<ReigsterType>({
    mode: "onChange",
    resolver: zodResolver(registerSchema),
    defaultValues: {
      type: "helper",
      division: 'email',
      agreeUsage: false,
      agreePrivacy: false,
      agreeMarketingMandatory: false,
      agreeMarketingOptional: false,
    },
  });
  const { watch, setValue, register, formState: { isValid } } = methods;
  const { mutate, isPending } = useSignupMutation();
  const type = watch("type");

  const onSubmit = (data: ReigsterType) => {
    mutate({
      email: data.email,
      type: data.type,
      password: data.password,
      name: data.name,
      phone: data.phone,
      division: data.division,
      region: data.region,
      nickName: data.nickName,
      agreeUsage: data.agreeUsage,
      agreePrivacy: data.agreePrivacy,
      agreeMarketingMandatory: data.agreeMarketingMandatory,
      agreeMarketingOptional: data.agreeMarketingOptional,
    })
  }
  const handleChangeType = ({ type }: { type: "helper" | "client" }) => {
    setValue("type", type, { shouldValidate: true });
  }
  const handleEmailCheck = () => {
    console.log("이메일 중복 확인 API 호출!");
  };

  const handlePhoneVerifyRequest = () => {
    console.log("휴대폰 인증번호 발송 API 호출!");
  };

  const handlePhoneVerifyConfirm = () => {
    console.log("인증번호 검증 API 호출!");
  };

  const handleAddress = () => {
    console.log('주소검색')
  }
  const basicInputs = getBasicInputs({
    onEmailCheck: handleEmailCheck,
    onPhoneVerifyRequest: handlePhoneVerifyRequest,
    onPhoneVerifyConfirm: handlePhoneVerifyConfirm,
  });

  const addInputs = getAddInputs({ onAddress: handleAddress })

  return {
    type,
    methods,
    basicInputs,
    addInputs,
    isValid,
    isPending,
    onSubmit,
    register,
    handleChangeType
  }
}