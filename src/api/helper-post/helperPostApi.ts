import { HelperPostRegisterType } from '@/schema/helper-post.schema';
import { client } from '../client/clientApi';
import { IResponse } from '@/interfaces/response.interface';
import { HelperPostResponse } from '@/interfaces/helper-postinterface';

export const helperPostApi = {
  async createHelper(data: HelperPostRegisterType): Promise<IResponse> {
    const response = await client.post<IResponse>('/helper-post', data);
    return response;
  },

  async getHelpers(): Promise<HelperPostResponse[]> {
    const response = await client.get<HelperPostResponse[]>('/helper-post');
    return response;
  },

  async getHelper(id: string): Promise<HelperPostResponse> {
    const response = await client.get<HelperPostResponse>(`/helper-post/${id}?limit=3`);
    return response;
  },

  async getReceivedApplications() {
    const response = await client.get('/helper-post/applications');
    console.log('response', response);
    return response;
  },
};

// 헬퍼 닉네임, 별점, 카테고리, 프로필,
