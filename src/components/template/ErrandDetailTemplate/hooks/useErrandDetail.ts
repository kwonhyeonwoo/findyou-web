import {  useErrandDetailQuery } from "@/hooks/quires/errand/useErrandDetailMutation";
import { useUser } from "@/store/useUserStore";
import { useParams, useRouter } from "next/navigation";

export const useErrandDetail = ()=>{
    const router = useRouter()
    const user = useUser();
    const {id} = useParams();
    const {data,isPending} = useErrandDetailQuery(String(id));
    const handleKaKaoOpenLink = (link:string)=>{
        router.push(link)
    };

    return {
        data,
        uid:user.userId,
        isPending,
        handleKaKaoOpenLink
    }
}