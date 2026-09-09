import { useHelperAppliCreateMutation } from "@/hooks/mutations/helper-application/useHelperAppliCreateMutation";
import { useGetHelperQuery } from "@/hooks/quires/helper/useGetHelperQuery"
import { useCustomApplication } from "@/hooks/common/useCustomApplication";
import { useParams } from "next/navigation";

export const useHelperPostDetail = () => {
    const { id } = useParams();
    const { data } = useGetHelperQuery(String(id));
    const { mutate } = useHelperAppliCreateMutation();
    const { message, saveAsDefault, openLink } = useCustomApplication();

    const handleSubmit = () => {
        if (id) {
            mutate({ message, saveAsDefault, openLink, helperId: id as string });
        }
    };

    return {
        data,
        handleSubmit,
    }
}
