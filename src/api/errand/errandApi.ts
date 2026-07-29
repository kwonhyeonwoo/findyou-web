import { ErrandCategory, ErrandRegisterType } from '@/schema/errand.schema';
import { client } from '../client/clientApi';
import { IResponse } from '@/interfaces/response.interface';
import {
  ErrandDetailResponse,
  ErrandResponse,
  ErrandStatus,
} from '@/interfaces/errand.interface';
import { parsePrice } from '@/lib/lib';

export const errandApi = {
  write: async (data: ErrandRegisterType): Promise<IResponse> => {
    console.log('price', typeof data.price);
    const formData = new FormData();
    formData.append('title', data.title);
    formData.append('category', data.category);
    formData.append('address', data.address);
    formData.append('address_dong', data.address_dong);
    formData.append('price', String(parsePrice(data.price)));
    formData.append('openLink', data.openLink);
    formData.append('description', data.description);
    formData.append('lat', String(data.lat));
    formData.append('lng', String(data.lng));
    formData.append('deadlineTime', String(data.deadlineTime));
    if (data.images && data.images.length > 0) {
      data.images.forEach((file: File) => {
        formData.append('images', file);
      });
    }
    const response = await client.post<IResponse>('/errand', formData);
    return response;
  },
  lists: async ({
    limit,
    category,
    keyword,
    status,
  }: {
    limit?: string;
    category?: ErrandCategory;
    keyword?: string;
    status?: ErrandStatus;
  }): Promise<ErrandResponse[]> => {
    const searchParams = new URLSearchParams();
    if (limit) searchParams.append('limit', limit);
    if (category) searchParams.append('category', category);
    if (keyword) searchParams.append('keyword', keyword);
    if (status) searchParams.append('status', status);

    const queryString = searchParams.toString();
    const requestUrl = `/errand${queryString ? `?${queryString}` : ''}`;
    const response = await client.get<ErrandResponse[]>(requestUrl);
    return response;
  },

  // 심부름 진행 상황
  getErrandProgress: async (id: string): Promise<ErrandDetailResponse> => {
    const response = await client.get<ErrandDetailResponse>(`/errand/${id}`);
    return response;
  },

  getMyErrand: async (): Promise<ErrandResponse[]> => {
    const response = await client.get<ErrandResponse[]>('/errand/my');
    return response;
  },

  postComplete: async (id: string): Promise<IResponse> => {
    const response = await client.post<IResponse>(`/errand/${id}/complete`);
    return response;
  },
};
