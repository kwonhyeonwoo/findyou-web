import { errandApi } from "@/api/errand/errandApi";
import { ERRAND_KEYS } from "@/api/errand/errandKeys";
import { useQuery } from "@tanstack/react-query";

export const useErrandListsQuery = (limit?:string) => {
    return useQuery({
        queryKey: ERRAND_KEYS.lists(),
        queryFn: ()=>errandApi.lists(limit),
    });
};
