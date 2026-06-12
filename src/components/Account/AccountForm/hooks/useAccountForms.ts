'use client'

import { getAddInputs, getBasicInputs } from "@/constants/auth-constants";
import { useEmailCheckMutation } from "@/hooks/quires/auth/useEmailCheckMutation";
import { useSignupMutation } from "@/hooks/quires/auth/useSignupMutaion";
import { registerSchema, ReigsterType } from "@/schema/auth.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { watch, setValue, register, formState: { errors, isValid } } = methods;
  const { mutate, isPending } = useSignupMutation();
  const { mutate: emailCheck } = useEmailCheckMutation();
  const type = watch("type");
  const email = watch("email");
  const onSubmit = (data: ReigsterType) => {
    console.log('submit data', data)
    mutate({
      email: data.email,
      type: data.type,
      password: data.password,
      name: data.name,
      phone: data.phone,
      division: data.division,
      address: data.address,
      lat: data.lat,
      lng: data.lng,
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
    emailCheck(email)
  };

  const handlePhoneVerifyRequest = () => {
    console.log("휴대폰 인증번호 발송 API 호출!");
  };

  const handlePhoneVerifyConfirm = () => {
    console.log("인증번호 검증 API 호출!");
  };

  const handleAddressIsOpen = () => {
    setIsOpen((prev) => !prev);
  }
  const basicInputs = getBasicInputs({
    onEmailCheck: handleEmailCheck,
    onPhoneVerifyRequest: handlePhoneVerifyRequest,
    onPhoneVerifyConfirm: handlePhoneVerifyConfirm,
  });

  const addInputs = getAddInputs({ onAddress: handleAddressIsOpen })

  return {
    type,
    methods,
    basicInputs,
    addInputs,
    isValid,
    errors,
    isPending,
    isOpen,
    setIsOpen,
    onSubmit,
    register,
    handleChangeType
  }
}