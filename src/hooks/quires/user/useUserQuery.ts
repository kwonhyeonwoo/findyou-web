import { userApi } from "@/api/user/userApi";
import { USER_KEYS } from "@/api/user/userKeys";
import { useQuery } from "@tanstack/react-query";

export const useUserQuery = (id:string|null)=>{
    return useQuery({
        queryKey:USER_KEYS.detail( id?? ""),
        queryFn:()=>userApi.getUser(id??""),
    })
}