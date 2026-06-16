import { useErrandDetailMutation } from "@/hooks/quires/errand/useErrandDetailMutation";
import { useParams } from "next/navigation";

export const useErrandDetail = ()=>{
    const {id} = useParams();
    const {data} = useErrandDetailMutation(String(id));

    return {
        data
    }
}