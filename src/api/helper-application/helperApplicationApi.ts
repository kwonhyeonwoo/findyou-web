import { HelperApplicationRequest } from '@/interfaces/helper-application.interface';
import { IResponse } from '@/interfaces/response.interface';
import { client } from '../client/clientApi';

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

  getHelperApplications: async () => {
    const response = await client.get('/helper-application');
    return response;
  },
};
