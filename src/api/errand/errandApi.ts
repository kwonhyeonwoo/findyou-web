import { ErrandCategory, ErrandRegisterType } from "@/schema/errand.schema";
import { client } from "../client/clientApi";
import { IResponse } from "@/interfaces/response.interface";
import { ErrandResponse } from "@/interfaces/errand.interface";

export const errandApi = {
  write: async (data: ErrandRegisterType): Promise<IResponse> => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("category", data.category);
    formData.append("address", data.address);
    formData.append("address_dong", data.address_dong);
    formData.append("price", String(data.price));
    formData.append("openLink", data.openLink);
    formData.append("description", data.description);
    formData.append("lat", String(data.lat));
    formData.append("lng", String(data.lng));

    // 이미지 배열 순회하며 추가 (필드명을 'images'로 통일해서 멀티파트 전송)
    if (data.images && data.images.length > 0) {
      data.images.forEach((file: File) => {
        formData.append("images", file);
      });
    }

    // ✨ [수정] 2번째 인자에는 오직 'formData' 객체만 딱 넘겨줍니다!
    // 만약 추가적인 헤더나 설정이 필요하다면 3번째 인자(options)로 넘깁니다.
    const response = await client.post<IResponse>("/errand", formData);

    console.log("response", response);
    return response;
  },
  lists: async ({
    limit,
    category,
    keyword,
  }: {
    limit?: string;
    category?: ErrandCategory | "all";
    keyword?: string;
  }): Promise<ErrandResponse[]> => {
    const searchParams = new URLSearchParams();
    if (limit) searchParams.append("limit", limit);
    if (category) searchParams.append("category", category);
    if (keyword) searchParams.append("keyword", keyword);

    const queryString = searchParams.toString();
    const requestUrl = `/errand${queryString ? `?${queryString}` : ""}`;
    const response = await client.get<ErrandResponse[]>(requestUrl);
    console.log("response", response);
    return response;
  },
  getErrand: async (id: string): Promise<ErrandResponse> => {
    const response = await client.get<ErrandResponse>(`/errand/${id}`);
    return response;
  },

  getMyErrand: async (): Promise<ErrandResponse[]> => {
    const response = await client.get<ErrandResponse[]>("/errand/my");
    console.log("response", response);
    return response;
  },

  postComplete: async (id: string): Promise<IResponse> => {
    const response = await client.post<IResponse>(`/errand/${id}/complete`);
    return response;
  },
};
