import { errandApi } from '@/api/errand/errandApi';
import { ERRAND_KEYS } from '@/api/errand/errandKeys';
import { ErrandStatus } from '@/interfaces/errand.interface';
import { ErrandCategory } from '@/schema/errand.schema';
import { useQuery } from '@tanstack/react-query';

export const useErrandListsQuery = ({
  limit,
  category,
  keyword,
  status,
}: {
  limit?: string;
  category?: ErrandCategory;
  keyword?: string;
  status?: ErrandStatus | undefined;
}) => {
  return useQuery({
    queryKey: [...ERRAND_KEYS.lists(), { limit, category, keyword, status }],
    queryFn: () => errandApi.lists({ limit, category, keyword, status }),
  });
};
