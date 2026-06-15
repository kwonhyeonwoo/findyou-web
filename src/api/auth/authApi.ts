import { IMeResponse, ISigninRequest, ISigninResponse, ISignupRequest } from "@/interfaces/auth.interface";
import { client } from "../client/clientApi";
import { IResponse } from "@/interfaces/response.interface";

export const authApi = {
    signup: async (data: ISignupRequest): Promise<IResponse> => {
        try {
            const response = await client.post<IResponse>("/auth/signup", data);
            if (!response) throw new Error('회원가입 실패');
            return response;
        } catch (error: any) {
            console.log('api error', error.message);
            throw error;
        }
    },
    signin: async (data: ISigninRequest): Promise<ISigninResponse> => {
        const response = await client.post<ISigninResponse>('/auth/signin', data);
        if (!response) throw new Error('로그인 실패');
        return response;
    },
    me: async (): Promise<IMeResponse> => {
        const result = await client.get('/auth/me');
        if (!result) {
            return result as IMeResponse;
        }
        console.log('result', result);
        return result as IMeResponse;
    }
}