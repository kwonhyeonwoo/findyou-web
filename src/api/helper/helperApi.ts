import { HelperRegisterType } from "@/schema/helper.schema";
import { client } from "../client/clientApi";
import { IResponse } from "@/interfaces/response.interface";
import { HelperResponse } from "@/interfaces/helper.interface";

export const helperApi = {
    async createHelper(data: HelperRegisterType): Promise<IResponse> {
        const response = await client.post<IResponse>('/helper', data);
        return response;
    },

    async getHelpers(): Promise<HelperResponse[]> {
        const response = await client.get<HelperResponse[]>('/helper');
        return response;
    }
}

// 헬퍼 닉네임, 별점, 카테고리, 프로필, 