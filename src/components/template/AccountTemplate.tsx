import AccountForm from "../Account/AccountForm/AccountForm";
import AuthDivider from "../AuthDivider/AuthDivider";
import KaKaoSocial from "../common/KaKaoSocial/KaKaoSocial";
import NaverSocial from "../common/NaverSocial/NaverSocial";

export default function AccountTemplate() {
  return (
    <section className="mx-auto max-w-[420px] px-5 py-3 pb-20">
      {/* title */}
      <div className="flex flex-col items-center">
        <h1 className="text-[32px] font-bold">회원가입</h1>
        <p className="text-[#464554]">
          FINDYOU와 함께 동네의 도움을 나눠보세요
        </p>
      </div>
      {/* social btns */}
      <div className="mt-6 flex flex-col gap-3">
        <p className="text-center text-[15px] text-[#464554]">간편 회원가입</p>
        <KaKaoSocial />
        <NaverSocial />
      </div>

      <AuthDivider />
      <AccountForm />
    </section>
  );
}
