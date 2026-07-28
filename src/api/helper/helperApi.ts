import { HelperRegisterType } from "@/schema/helper.schema";
import { client } from "../client/clientApi";
import { IResponse } from "@/interfaces/response.interface";

export const helperApi = {
    async createHelper(data: HelperRegisterType): Promise<IResponse> {
        console.log('tq', data)
        const response = await client.post<IResponse>('/helper', data);
        return response;
    }
}