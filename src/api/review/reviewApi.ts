import { ReviewCreateRequest } from "@/interfaces/review.interface";
import { client } from "../client/clientApi";

export const reviewApi = {
    createReview: async ({ data, errandId }: { data: ReviewCreateRequest, errandId: string }) => {
        const response = await client.post(`/review/${errandId}`, data);
        console.log('response', response);
        return response;
    }
}