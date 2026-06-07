"use client";
import AuthDivider from "@/components/AuthDivider/AuthDivider";
import KaKaoSocial from "@/components/common/KaKaoSocial/KaKaoSocial";
import NaverSocial from "@/components/common/NaverSocial/NaverSocial";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import LoginInput from "@/components/Login/LoginInput/LoginInput";
import SaveId from "@/components/Login/SaveId/SaveId";
import { LOGIN_INPUTS } from "@/constants/auth-constants";
import Image from "next/image";
import Link from "next/link";
import { useLoginHooks } from "./hooks/useLoginHooks";
export default function LoginTemplate() {
  const { onSubmit, isPending, handleSubmit, register, isValid } =
    useLoginHooks();
  return (
    <section className="flex flex-col items-center">
      {/* title box */}
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-[32px] font-bold">로그인</h2>
        <p className="text-center text-[14px] leading-5 whitespace-pre text-[#777586]">{`간편하게 로그인하고
파인드유의 다양한 서비스를 이용해보세요.`}</p>
      </div>

      {/* social */}
      <div className="mt-[30px] flex w-full flex-col items-center gap-[15px]">
        <div className="flex w-full flex-col items-center gap-[10px]">
          <NaverSocial />
          <KaKaoSocial />
        </div>
        <AuthDivider />
      </div>

      {/* inputs */}
      <form onSubmit={handleSubmit(onSubmit)} className="flex w-full flex-col">
        <div className="mt-[15px] flex w-full flex-col items-center gap-2">
          {LOGIN_INPUTS.map((item) => (
            <LoginInput key={item.name} {...item} register={register} />
          ))}
        </div>
        {/* 보안접속 */}
        <div className="mt-[15px] flex w-full items-center justify-between">
          <SaveId />
          <div className="flex items-center gap-1">
            <Image
              src="/login/security.png"
              alt="security"
              width={10}
              height={14}
            />
            <span className="text-[14px] text-[#464554]">보안접속</span>
          </div>
        </div>
        <div className="mt-7">
          <SubmitButton
            text="로그인"
            isDisabled={!isValid}
            isPending={isPending}
          />
        </div>
      </form>
      <div className="mt-9 flex items-center gap-2">
        <Link className="text-[14px] text-[#777586]" href={""}>
          아이디 찾기
        </Link>
        <Link className="text-[14px] text-[#777586]" href={""}>
          비밀번호 찾기
        </Link>
        <Link className="text-[14px] text-[#777586]" href={"/account"}>
          회원가입
        </Link>
      </div>
    </section>
  );
}
