import { useErrandCompleteMutation } from "@/hooks/mutations/errand/useErrandCompleteMutation";
import { useGetErrandDetail } from "@/hooks/quires/errand/useGetErrandDetail";
import { useParams, useRouter } from "next/navigation";

export const useErrandStatus = () => {
  const { id } = useParams();
  const router = useRouter();
  const { data } = useGetErrandDetail(String(id));
  const { mutate } = useErrandCompleteMutation(String(id));
  const handleProfileDetail = (id: string) => {
    router.push(`/helper/${id}`);
  };

  const handleKaKaoOpenLink = (link: string) => {
    router.push(link);
  };

  const handleComplete = () => {
    mutate(String(id));
  };
  return {
    data,
    handleComplete,
    handleProfileDetail,
    handleKaKaoOpenLink,
  };
};
