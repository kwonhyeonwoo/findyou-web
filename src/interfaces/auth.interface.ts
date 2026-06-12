import { ReigsterType } from "@/schema/auth.schema";
import { IResponse } from "./response.interface";

export interface IAccountInput {
    name: keyof ReigsterType;
    label: string;
    placeholder: string;
    maxLength?: number;
    minLength?: number;
    type: string;
    readOnly?:boolean;
    activeText?: string;
    value?:string;
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
    address: string;
    lat: number; // 위도
    lng: number; // 경도
    nickName: string;
    agreeUsage: boolean;
    agreePrivacy: boolean;
    agreeMarketingMandatory: boolean;
    agreeMarketingOptional: boolean;
}

export interface IMeResponse {
    id: string | null;
    email: string | null;
    type: "helper" | "client" | null;
}

export interface ISigninRequest {
    email: string;
    password: string;
}

export interface ISigninResponse extends IResponse {
    id: string;
}