import z from "zod";

export const authCommonSchema = z.object({
    email: z.string().email('올바른 이메일 형식이 아닙니다.'),
    password: z.string().min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, "비밀번호는 최대 16자 입니다."),
});

export const registerSchema = authCommonSchema.extend({
    type: z.enum(['helper', 'client']),
    verify: z.string().min(6, "인증번호는 6글자 입니다.").max(6, "인증번호는 6글자 입니다."),
    division: z.enum(['kakao', 'naver', 'email']),
    region: z.string(),
    nickName: z.string().min(3, '닉네임은 3자 이상이어야 합니다.').max(6, '닉네임은 최대 10자 입니다.'),
    phone: z.string().min(11, '전화번호는 11자 이상이어야 합니다.').max(11, '전화번호는 11자 이하이어야 합니다.'),
    name: z.string().min(2, '이름은 2자 이상이어야 합니다.').max(10, '이름은 최대 10자 입니다.'),
    confirmPassword: z.string().min(8, '비밀번호는 8자 이상이어야 합니다.').max(16, "비밀번호는 최대 16자 입니다."),
    agreeUsage: z.boolean().refine((val) => val === true, "이용약관 동의는 필수입니다."),
    agreePrivacy: z.boolean().refine((val) => val === true, "개인정보 수집 동의는 필수입니다."),
    agreeMarketingMandatory: z.boolean().refine((val) => val === true, "마케팅 활용 동의는 필수입니다."), // 필수 마케팅인 경우
    agreeMarketingOptional: z.boolean(),
})
    .refine((data) => {
        if (data.division === 'kakao' || data.division === 'naver') {
            return true;
        }
        return data.password === data.confirmPassword;
    }, {
        message: "비밀번호가 일치하지 않습니다.",
        path: ['confirmPassword']
    });


export type AuthCommonSchema = z.infer<typeof authCommonSchema>;
export type ReigsterType = z.infer<typeof registerSchema>;