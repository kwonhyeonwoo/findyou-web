import { useErrandCompleteMutation } from "@/hooks/mutations/errand/useErrandCompleteMutation";
import { useGetErrandDetail } from "@/hooks/quires/errand/useGetErrandDetail";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";

export const useErrandStatus = () => {
  const { id } = useParams();
  const router = useRouter();
  const { data } = useGetErrandDetail(String(id));
  const { mutate } = useErrandCompleteMutation(String(id));
  const [isCompleteOpen, setIsCompleteOpen] = useState<boolean>(false);
  const handleProfileDetail = (id: string) => {
    router.push(`/helper/${id}`);
  };

  const handleKaKaoOpenLink = (link: string) => {
    router.push(link);
  };

  const handleOpenCompleteModal = () => {
    setIsCompleteOpen(true);
  };
  const handleComplete = () => {
    mutate(String(id));
  };
  return {
    data,
    isCompleteOpen,
    setIsCompleteOpen,
    handleOpenCompleteModal,
    handleComplete,
    handleProfileDetail,
    handleKaKaoOpenLink,
  };
};
