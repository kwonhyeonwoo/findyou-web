import { IResponse } from "@/interfaces/response.interface";
import { ApiError, client } from "../client/clientApi";

export const errandApplicationApi = {
  create: async (errandId: string): Promise<IResponse> => {
    const response = await client.post<IResponse>(
      `/errand-application/${errandId}`,
    );
    return response;
  },
};
