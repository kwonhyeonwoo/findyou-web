import { useErrandDetailMutation } from "@/hooks/quires/errand/useErrandDetailMutation";
import { useParams, useRouter } from "next/navigation";

export const useErrandDetail = ()=>{
    const router = useRouter()
    const {id} = useParams();
    const {data} = useErrandDetailMutation(String(id));
    const handleKaKaoOpenLink = (link:string)=>{
        router.push(link)
    };

    return {
        data,
        handleKaKaoOpenLink
    }
}