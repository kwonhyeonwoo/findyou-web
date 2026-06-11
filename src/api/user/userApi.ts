import { IResponse } from "@/interfaces/response.interface";
import { client } from "../client/clientApi"

export const userApi = {
    emailCheck: async (email: string): Promise<IResponse> => {
        try {
            const response = await client.post<IResponse>('/user/email-check', { email });
            if (!response) throw new Error('이메일 중복검사 실패');
            return response;
        } catch (error) {
            console.log('error', error);
            throw error;
        }
    }
}