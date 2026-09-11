import { ReviewCreateRequest } from '@/interfaces/review.interface';
import { client } from '../client/clientApi';
import { IResponse } from '@/interfaces/response.interface';

export const reviewApi = {
  createErrandReview: async ({
    data,
    errandApplicationId,
  }: {
    data: ReviewCreateRequest;
    errandApplicationId: string;
  }): Promise<IResponse> => {
    const response = await client.post<IResponse>(
      `/review/${errandApplicationId}`,
      data,
    );
    return response;
  },

  createHelperPostReview: async ({
    data,
    helperApplicationId,
  }: {
    data: ReviewCreateRequest;
    helperApplicationId: string;
  }): Promise<IResponse> => {
    const response = await client.post<IResponse>(
      `/review/${helperApplicationId}/helper-post`,
      data,
    );
    console.log('response', response);
    return response;
  },
};
