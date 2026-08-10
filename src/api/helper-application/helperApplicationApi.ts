import {
  HelperApplicationRequest,
  HelperApplicationResponse,
} from '@/interfaces/helper-application.interface';
import { IResponse } from '@/interfaces/response.interface';
import { client } from '../client/clientApi';
3;
export const helperApplicationApi = {
  postCreate: async (data: HelperApplicationRequest): Promise<IResponse> => {
    const response = await client.post<IResponse>(
      `/helper-application/${data.helperId}`,
      {
        message: data.message,
      },
    );
    return response;
  },

  getHelperApplications: async (): Promise<HelperApplicationResponse[]> => {
    const response = await client.get<HelperApplicationResponse[]>(
      '/helper-application',
    );
    return response;
  },

  // 내가 받은 지원내역
  async getReceivedApplications(
    helperPostId: string,
  ): Promise<HelperApplicationResponse[]> {
    const response = await client.get<HelperApplicationResponse[]>(
      `/helper-application/received/${helperPostId}`,
    );
    console.log('response', response);
    return response;
  },
};
