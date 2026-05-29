'use client'

import { getAddInputs, getBasicInputs } from "@/constants/auth-constants";
import { ReigsterType } from "@/schema/auth.schema";
import { useForm } from "react-hook-form";

export const useAccountForm = ()=>{
    const methods = useForm<ReigsterType>();

    const handleEmailCheck = () => {
        console.log("이메일 중복 확인 API 호출!");
      };
    
      const handlePhoneVerifyRequest = () => {
        console.log("휴대폰 인증번호 발송 API 호출!");
      };
    
      const handlePhoneVerifyConfirm = () => {
        console.log("인증번호 검증 API 호출!");
      };
      
      const handleAddress = ()=>{
        console.log('주소검색')
      }
      const basicInputs = getBasicInputs({
        onEmailCheck: handleEmailCheck,
        onPhoneVerifyRequest: handlePhoneVerifyRequest,
        onPhoneVerifyConfirm: handlePhoneVerifyConfirm,
      });

      const addInputs = getAddInputs({onAddress:handleAddress})

    return{
        methods,
        basicInputs,
        addInputs
    }
}