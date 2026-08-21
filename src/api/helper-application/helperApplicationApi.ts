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
    return response;
  },

  // 내역 수락
  async patchAcceptedApplication(id: string): Promise<IResponse> {
    const response = await client.patch<IResponse>(`/helper-application/${id}`);
    return response;
  },

  // 내역 거절
  async patchRejectedApplication(id: string): Promise<IResponse> {
    const response = await client.patch<IResponse>(
      `/helper-application/rejected/${id}`,
    );
    return response;
  },

  // 수락된 내역상세
  async getAcceptedApplication(
    appliId: string,
  ): Promise<HelperApplicationResponse> {
    const response = await client.get<HelperApplicationResponse>(
      `/helper-application/${appliId}`,
    );
    return response;
  },

  // 완료요청
  async postCompletedRequested(appliId: string): Promise<IResponse> {
    const response = await client.post<IResponse>(
      `/helper-application/${appliId}/completed-request`,
    );
    return response;
  },

  // 지원취소
  async deleteApplication(id: string): Promise<IResponse> {
    const response = await client.delete<IResponse>(
      `/helper-application/${id}`,
    );
    return response;
  },
};
