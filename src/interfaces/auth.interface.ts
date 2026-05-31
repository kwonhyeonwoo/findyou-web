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