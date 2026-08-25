import { ReviewCreateRequest } from "@/interfaces/review.interface";
import { client } from "../client/clientApi";
import { IResponse } from "@/interfaces/response.interface";

export const reviewApi = {
    createReview: async ({ data, errandId }: { data: ReviewCreateRequest, errandId: string }) => {
        const response = await client.post(`/review/${errandId}`, data);
        console.log('response', response);
        return response;
    },

    createHelperPostReview: async ({ data, helperApplicationId }: { data: ReviewCreateRequest, helperApplicationId: string }): Promise<IResponse> => {
        console.log('idididid', helperApplicationId)
        const response = await client.post<IResponse>(`/review/${helperApplicationId}/helper-post`, data);
        console.log('response', response);
        return response;
    }
}