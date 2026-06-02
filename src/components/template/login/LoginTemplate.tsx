import AuthDivider from "@/components/AuthDivider/AuthDivider";
import KaKaoSocial from "@/components/common/KaKaoSocial/KaKaoSocial";
import NaverSocial from "@/components/common/NaverSocial/NaverSocial";
import SubmitButton from "@/components/common/SubmitButton/SubmitButton";
import LoginInput from "@/components/Login/LoginInput/LoginInput";
import SaveId from "@/components/Login/SaveId/SaveId";
import { LOGIN_INPUTS } from "@/constants/auth-constants";
import Image from "next/image";
import Link from "next/link";
;export default function LoginTemplate() {
  return (
    <section className="flex flex-col items-center">
        {/* title box */}
       <div className="flex flex-col items-center gap-2">
            <h2 className="text-[32px] font-bold">로그인</h2>
            <p className="text-[#777586] text-[14px] whitespace-pre leading-5 text-center">{`간편하게 로그인하고
파인드유의 다양한 서비스를 이용해보세요.`}</p>
       </div>

       {/* social */}
        <div className="flex flex-col gap-[15px] items-center w-full  mt-[30px]">
            <div className="flex flex-col gap-[10px] items-center w-full">
                <NaverSocial/>
                <KaKaoSocial/>
            </div>
            <AuthDivider/>
        </div>
        
        {/* inputs */}
        <form action="" className="w-full flex flex-col ">
            <div className="flex flex-col items-center w-full mt-[15px] gap-2">
                {LOGIN_INPUTS.map((item)=>(
                    <LoginInput key={item.name} {...item}/>
                ))}
            </div>
            {/* 보안접속 */}
            <div className="flex items-center w-full justify-between mt-[15px]">
                <SaveId/>
                <div className="flex items-center gap-1">
                    <Image src="/login/security.png" alt="security" width={10}height={14}/>
                    <span className="text-[#464554] text-[14px]">보안접속</span>
                </div>
            </div>
            <div className="mt-7">
                <SubmitButton text="로그인" isDisabled={true}/>
            </div>
        </form>
        <div className="mt-9 flex items-center gap-2">
            <Link className="text-[14px] text-[#777586]" href={''}>아이디 찾기</Link>
            <Link className="text-[14px] text-[#777586]" href={''}>비밀번호 찾기</Link>
            <Link className="text-[14px] text-[#777586]" href={''}>회원가입</Link>
        </div>
    </section>
  )
}
