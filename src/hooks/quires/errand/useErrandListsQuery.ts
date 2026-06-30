import { errandApi } from "@/api/errand/errandApi";
import { ERRAND_KEYS } from "@/api/errand/errandKeys";
import { ErrandCategory } from "@/schema/errand.schema";
import { useQuery } from "@tanstack/react-query";

export const useErrandListsQuery = ({
  limit,
  category,
  keyword,
}: {
  limit?: string;
  category?: ErrandCategory | "all";
  keyword?: string;
}) => {
  return useQuery({
    queryKey: [...ERRAND_KEYS.lists(), { limit, category, keyword }],
    queryFn: () => errandApi.lists({ limit, category, keyword }),
  });
};
