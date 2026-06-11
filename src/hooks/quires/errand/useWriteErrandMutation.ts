import { errandApi } from "@/api/errand/errandApi";
import { ERRAND_KEYS } from "@/api/errand/errandKeys";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useWriteErrandMutation = ()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:errandApi.write,
        onSuccess:(data)=>{
            console.log('mutation',data)
            queryClient.invalidateQueries({
                queryKey:ERRAND_KEYS.errand,
            })
        }
    })
}