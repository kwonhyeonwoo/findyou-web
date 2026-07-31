import { IResponse } from '@/interfaces/response.interface';
import { ErrandApplicationResponse } from '@/interfaces/errand_application.interface';
import { client } from '../client/clientApi';

export const errandApplicationApi = {
  create: async ({
    message,
    errandId,
  }: {
    message: string;
    errandId: string;
  }): Promise<IResponse> => {
    const response = await client.post<IResponse>(
      `/errand-application/${errandId}`,
      { message },
    );
    return response;
  },

  getMyApplications: async (): Promise<ErrandApplicationResponse[]> => {
    const response = await client.get<ErrandApplicationResponse[]>(
      '/errand-application/my',
    );
    return response;
  },

  updatedStatus: async ({ applicationId }: { applicationId: string }) => {
    const response = await client.post<IResponse>(
      `/errand-application/${applicationId}/status`,
    );
    return response;
  },
};
