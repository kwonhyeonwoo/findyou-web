import { helperApi } from "@/api/helper/helperApi";
import { HELPER_KEYS } from "@/api/helper/helperKeys";
import { useQuery } from "@tanstack/react-query"

export const useGetHelpersQuery = () => {
    return useQuery({
        queryFn: () => helperApi.getHelpers(),
        queryKey: HELPER_KEYS.lists(),
    })
}