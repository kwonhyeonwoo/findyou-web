import { ReigsterType } from "@/schema/auth.schema";

export interface IAccountInput {
    name: keyof ReigsterType;
    label: string;
    placeholder: string;
    maxLength?: number;
    minLength?: number;
    type: string;
    activeText?: string;
    onActive?: () => void;
}

export interface ITerms {
    name: keyof ReigsterType;
    text: string;
}
export interface IGetBasicInputArgs {
    onEmailCheck: () => void;
    onPhoneVerifyRequest: () => void;
    onPhoneVerifyConfirm: () => void;
}

export interface ISignupRequest {
    email: string;
    password: string;
    name: string;
    type: 'helper' | 'client';
    phone: string;
    division: string; // kakao, naver, email
    region: string;
    nickName: string;
    agreeUsage: boolean;
    agreePrivacy: boolean;
    agreeMarketingMandatory: boolean;
    agreeMarketingOptional: boolean;
}

export interface IMeResponse {
    id: string | null;
    email: string | null;
}

export interface ISigninRequest {
    email: string;
    password: string;
}

export interface ISigninResponse {
    id: string;
}