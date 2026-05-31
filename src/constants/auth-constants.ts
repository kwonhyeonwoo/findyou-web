import { IAccountInput, IGetBasicInputArgs, ITerms } from "@/interfaces/auth.interface";

export const TERMS_LIST: ITerms[] = [
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
]