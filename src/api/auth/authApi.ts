import { IMeResponse, ISigninRequest, ISigninResponse, ISignupRequest } from "@/interfaces/auth.interface";
import { client } from "../client/clientApi";

export const authApi = {
    signup: async (data: ISignupRequest) => {
        const result = await client.post("/auth/signup", data);
        if (!result) throw new Error('회원가입 실패');
        return result;
    },
    signin: async (data: ISigninRequest): Promise<ISigninResponse> => {
        const result = await client.post<ISigninResponse>('/auth/signin', data);
        if (!result) throw new Error('회원가입 실패');
        console.log('result', result);
        return result;
    },
    me: async (): Promise<IMeResponse> => {
        const result = await client.get('/auth/me');
        if (!result) {
            return result as IMeResponse;
        }
        return result as IMeResponse;
    }
}