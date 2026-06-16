import { IResponse } from "@/interfaces/response.interface";
import { client } from "../client/clientApi"
import { UserResponse } from "@/interfaces/user.interface";

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
    },
    getUser:async(id:string):Promise<UserResponse>=>{
        try{
            const response = await client.get<UserResponse>(`/user/${id}`);
            if(!response) throw new Error('회원을 찾을 수 없습니다.')
            return response; 
        }catch(error){
            throw error
        }
    }
}