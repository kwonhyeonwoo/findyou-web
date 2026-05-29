"use client";

import { useFormContext } from "react-hook-form";
import { ReigsterType } from "@/schema/auth.schema";
import { TERMS_LIST } from "@/constants/auth-constants";

export const useTerms = () => {
  const { watch, setValue } = useFormContext<ReigsterType>();

  const agreeUsage = watch("agreeUsage");
  const agreePrivacy = watch("agreePrivacy");
  const agreeMarketingMandatory = watch("agreeMarketingMandatory");
  const agreeMarketingOptional = watch("agreeMarketingOptional");

  const isAllChecked = !!(
    agreeUsage &&
    agreePrivacy &&
    agreeMarketingMandatory &&
    agreeMarketingOptional
  );

  const handleAllAgreeClick = () => {
    const nextValue = !isAllChecked;
    
    TERMS_LIST.forEach((item) => {
      setValue(item.name, nextValue, { shouldValidate: true });
    });
  };

  return {
    isAllChecked,
    handleAllAgreeClick,
    termsList: TERMS_LIST,
  };
};