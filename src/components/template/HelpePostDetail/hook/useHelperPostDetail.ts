import { useHelperAppliCreateMutation } from "@/hooks/mutations/helper-application/useHelperAppliCreateMutation";
import { useGetHelperQuery } from "@/hooks/quires/helper/useGetHelperQuery"
import { useParams } from "next/navigation";
import { useState } from "react";

export const useHelperPostDetail = () => {
    const { id } = useParams();
    const { data } = useGetHelperQuery(String(id));
    const { mutate } = useHelperAppliCreateMutation();
    const [isModalOpen, setisModalOpen] = useState<false>(false);
    // mutate -> message, helperId 보내야함
    return {
        data
    }
}