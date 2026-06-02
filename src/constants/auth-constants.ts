import { IAccountInput, IGetBasicInputArgs } from "@/interfaces/auth.interface";
import { ReigsterType } from "@/schema/auth.schema";

interface TermsItem {
  name: keyof ReigsterType;
  text: string;
}
interface InputItem {
  name: keyof ReigsterType; // 💡 RHF와 연동할 고유 키값
  label: string;
  placeholder: string;
  maxLength?: number;
  minLength?: number;
  type: string;
  activeText?: string;
  onActive?: () => void;
}

interface GetBasicInputsArgs {
  onEmailCheck: () => void;
  onPhoneVerifyRequest: () => void;
  onPhoneVerifyConfirm: () => void;
}
export const TERMS_LIST: TermsItem[] = [
  { name: "agreeUsage", text: "[필수] FINDYOU 이용약관 동의" },
  { name: "agreePrivacy", text: "[필수] 개인정보 수집 및 이용 동의" },
  { name: "agreeMarketingMandatory", text: "[필수] 마케팅 활용 동의" },
  { name: "agreeMarketingOptional", text: "[선택] 마케팅 활용 동의" },
];

export const getBasicInputs = ({
  onEmailCheck,
  onPhoneVerifyRequest,
  onPhoneVerifyConfirm,
}: IGetBasicInputArgs): IAccountInput[] => [
    {
      name: "email",
      label: "이메일",
      placeholder: "example@findyou.com",
      type: "email",
      activeText: "중복 확인",
      onActive: onEmailCheck, // 💡 외부에서 주입받은 함수 매칭
    },
    {
      name: "password",
      label: "비밀번호",
      minLength: 8,
      maxLength: 16,
      placeholder: "영문, 숫자, 특수문자 조합 8자 이상",
      type: "password",
    },
    {
      name: "confirmPassword",
      label: "비밀번호 확인",
      minLength: 8,
      maxLength: 16,
      placeholder: "비밀번호 재입력",
      type: "password",
    },
    {
      name: "name",
      label: "이름",
      placeholder: "실명 입력",
      minLength: 2,
      maxLength: 6,
      type: "text",
    },
    {
      name: "phone",
      label: "휴대폰 번호",
      placeholder: "-없이 숫자만 입력",
      type: "text",
      maxLength: 11,
      minLength: 11,
      activeText: "인증 받기",
      onActive: onPhoneVerifyRequest,
    },
    {
      name: "verify",
      label: "인증번호",
      placeholder: "인증번호 입력",
      minLength: 6,
      maxLength: 6,
      type: 'text',
      activeText: "인증하기",
      onActive: onPhoneVerifyConfirm,
    },
  ];

export const getAddInputs = ({ onAddress }: { onAddress: () => void; }): IAccountInput[] => [
  {
    label: "닉네임",
    name: "nickName",
    placeholder: "닉네임 입력",
    type: "text",
    minLength: 3,
    maxLength: 6,
  },
  {
    label: "활동지역",
    name: "region",
    placeholder: "동 단위 검색 (예: 역삼동)",
    type: "text",
    activeText: "주소검색",
    onActive: onAddress,
  },
]

export const CHECK_TYPE_LIST: { text: string; type: "helper" | "client" }[] = [
  {
    text: "헬퍼(도움제공)",
    type: "helper",
  },
  {
    text: "의뢰인(도움요청)",
    type: "client",
  },
];

export const LOGIN_INPUTS:{name:string,type:string,placeholder:string,minLength?:number,maxLength?:number}[]=[
  {
      name:"email",
      type:"email",
      placeholder:"이메일"
  },
  {
    name:"password",
    type:"password",
    placeholder:"비밀번호",
    minLength:8,
    maxLength:16,
  }
]