import { helperPostApi } from "@/api/helper-post/helperPostApi";
import { HELPER_POST_KEYS } from "@/api/helper-post/helperPostKeys";
import { useQuery } from "@tanstack/react-query"

export const useGetHelpersQuery = () => {
    return useQuery({
        queryFn: () => helperPostApi.getHelpers(),
        queryKey: HELPER_POST_KEYS.lists(),
    })
}